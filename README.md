# AI Content Studio (PydanticAI + Replicate)

**Goal:**  
A tool where users can generate both **text content** and **AI images** in one intuitive dashboard.

---

## Features

- **Text Generation:**  
  Uses **PydanticAI** to structure blog/article output including **title, summary, and body**.

- **Image Generation:**  
  Uses **Replicate** to generate cover images automatically based on the generated title or summary.

- **Preview Mode:**  
  Side-by-side card view displaying both **text** and **image** for easy review.

- **Save Drafts:**  
  Store generated results in **localStorage** for later editing or publishing.

- **Routing:**  
  - `/generate` → Generate new content  
  - `/drafts` → View saved drafts  

---

## Technology Stack

- **Frontend:** React.js, CSS/Bootstrap  
- **Backend:** FastAPI / Python  
- **AI Services:**  
  - PydanticAI (text generation & validation)  
  - Replicate (image generation)  
- **Storage:** localStorage (for drafts)  

---

## Workflow

1. User navigates to the **Generate** page.
2. Enter a prompt or topic.
3. **Text content** is generated via **PydanticAI**.
4. **Cover image** is generated via **Replicate** based on the title/summary.
5. User can **preview** content and image side-by-side.
6. Optionally, the user can **save the draft** to revisit later.
7. Drafts are accessible via `/drafts` page.

---

## Output Example

| Title | Summary | Body | Cover Image |
|-------|--------|------|-------------|
| "The Future of AI" | "How AI is shaping tomorrow..." | "Artificial Intelligence is rapidly..." | ![AI Image](https://via.placeholder.com/150) |

---

## Installation & Run

```bash
# Clone the repo
git clone https://github.com/Linda-31/Content-Studio.AI.git
cd Content-Studio.AI

# Install dependencies
npm install        # Frontend
pip install -r requirements.txt   # Backend

# Run backend (FastAPI)
uvicorn app:app --reload

# Run frontend
npm start
