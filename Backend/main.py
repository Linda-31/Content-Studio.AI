import os
import asyncio
from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pydantic_ai import Agent
import httpx  

load_dotenv()


os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")
REPLICATE_API_TOKEN = os.getenv("REPLICATE_API_TOKEN")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model 
class Article(BaseModel):
    title: str
    summary: str
    body: str
    image_url: str = None  


agent = Agent(model="gpt-3.5-turbo")

@app.post("/api/generate-text")
async def generate_text(request: Request):
    data = await request.json()
    prompt = data.get("prompt", "")
    if not prompt.strip():
        return {"error": "Prompt cannot be empty."}

    try:
       
        result = await agent.run(
            f"Write a blog article about: {prompt}. "
            "The response must include: title, summary, and body in HTML format.",
            output_type=Article,
        )
        article = result.output

       
        if not article.title or not article.summary or not article.body:
            return {"error": "AI did not return a complete article."}

        # Generate image using Replicate
        replicate_payload = {
            "version": "ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
            "input": {
                "prompt": f"{article.title}, {article.summary}",
                "width": 512,
                "height": 512
            }
        }
        headers = {
            "Authorization": f"Token {REPLICATE_API_TOKEN}",
            "Content-Type": "application/json"
        }

        async with httpx.AsyncClient() as client:
           
            resp = await client.post(
                "https://api.replicate.com/v1/predictions",
                json=replicate_payload,
                headers=headers
            )

            print("Replicate POST status:", resp.status_code)
          

            try:
                prediction = resp.json()
            except Exception as e:
                return {"error": f"Invalid JSON from Replicate: {str(e)}"}

       
            prediction_id = prediction.get("id")
            if not prediction_id:
                return {"error": f"No 'id' in Replicate response: {prediction}"}

            prediction_url = f"https://api.replicate.com/v1/predictions/{prediction_id}"

          
            while True:
                status_resp = await client.get(prediction_url, headers=headers)
                try:
                    status_data = status_resp.json()
                except Exception as e:
                    return {"error": f"Invalid JSON in polling: {str(e)}"}

                if status_data["status"] == "succeeded":
                    article.image_url = status_data["output"][0]
                    break
                elif status_data["status"] in ["failed", "canceled"]:
                    article.image_url = None
                    break
                await asyncio.sleep(1) 

        return article.model_dump()

    except Exception as e:
        return {"error": str(e)}
