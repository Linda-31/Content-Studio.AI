import React, { useState, useEffect } from "react";

function Generate() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [saveMessage, setSaveMessage] = useState(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt before generating.");
      return;
    }

    setLoading(true);
    setError(null);
    setArticle(null);
    setSaveMessage(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/generate-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setArticle(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const drafts = JSON.parse(localStorage.getItem("drafts")) || [];
    if (drafts.length > 0) {
      setArticle(drafts[drafts.length - 1]);
    }
  }, []);
  const handleSaveDraft = () => {
    if (!article) return;

    const drafts = JSON.parse(localStorage.getItem("drafts")) || [];
    drafts.push(article);
    localStorage.setItem("drafts", JSON.stringify(drafts));

    setSaveMessage("Draft saved successfully!");


    setTimeout(() => setSaveMessage(null), 3000);
  };

  const handleClearPreview = () => {
    setArticle(null);
    setPrompt("");
  };

  return (
    <div className="container-fluid min-vh-100 bg-light">
      <div className="row h-100">

        <aside className="col-md-4 bg-white p-4 border-end d-flex flex-column">
          <div className="studio">

            <h4 className="mb-2 text-center fw-bold" style={{ color: "#042870" }}>
              AI Generation
            </h4>


            <p className="text-muted small text-center mb-4">
              Effortlessly generate high quality blog content and AI-powered images all in one intuitive dashboard.
              Perfect for creators to streamline their content workflow.
            </p>

            <textarea
              className="form-control mb-3"
              rows="5"
              placeholder="Enter a topic or idea"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />


            <button
              className={`generate-btn mb-3 ${loading ? 'loading' : ''}`}
              onClick={handleGenerate}
              disabled={loading}
            >
              ⚡{loading ? "Generating..." : "Generate"}
            </button>

            {error && (
              <div className="alert alert-danger text-center" role="alert">
                {error}
              </div>
            )}
          </div>
        </aside>


        <main className="col-md-8 p-4 overflow-auto d-flex flex-column">
          <h2 className="animated-title mb-4">AI-Generated Article</h2>

          {article ? (
            <>
              <div className="card shadow-sm mb-3 flex-grow-1 custom-card">
                <div className="card-body">
                  {article.image_url && (
                    <img
                      src={article.image_url}
                      alt="AI generated cover"
                      className="card-img-bottom img-fluid rounded mb-3"
                      style={{ width: "100%", objectFit: "cover" }}
                    />
                  )}
                  <h3 className="card-title">{article.title}</h3>
                  <p className="card-subtitle mb-2 text-muted fst-italic">
                    {article.summary}
                  </p>
                  <div
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: article.body }}
                  />
                </div>
              </div>


              <div className="d-flex gap-2">
                <button className="custom-save-btn" onClick={handleSaveDraft}>
                  Save Draft
                </button>
                <button className="custom-clear-btn" onClick={handleClearPreview}>
                  Clear
                </button>
              </div>

              {saveMessage && (
                <div className="alert alert-success mt-3" role="alert">
                  {saveMessage}
                </div>
              )}
            </>
          ) : (
            <p className="text-muted fst-italic">Preview will appear here...</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default Generate;
