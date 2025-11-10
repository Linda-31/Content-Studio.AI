import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Drafts() {
    const [drafts, setDrafts] = useState([]);


    useEffect(() => {
        const storedDrafts = JSON.parse(localStorage.getItem("drafts")) || [];
        setDrafts(storedDrafts);
    }, []);


    const handleRemove = (indexToRemove) => {
        const updatedDrafts = drafts.filter((_, i) => i !== indexToRemove);
        setDrafts(updatedDrafts);
        localStorage.setItem("drafts", JSON.stringify(updatedDrafts));
    };

    return (
        <div className="container py-5">

            {drafts.length === 0 ? (
                <div className="drafts-container text-center py-5">
                    <img
                        src="/images/no_draft.jpg"
                        alt="No Drafts"
                        className="no-drafts-image mb-4"
                        style={{ width: "250px", height: "auto" }}
                    />
                    <h4 className="fw-bold text-gradient mb-2">No Posts Found</h4>
                    <p className="text-muted fst-italic mb-4">
                        You haven’t created any drafts yet. Start by generating your first AI article!
                    </p>
                    <Link to="/generate" className="btn btn-gradient px-4 py-2 rounded-pill">
                        Create New Article
                    </Link>
                </div>
            ) : (
                <div className="row">
                    {drafts.map((draft, index) => (
                        <div className="col-md-6 mb-4" key={index}>
                            <div className="card shadow-sm custom-draft ">
                                <div className="card-body">
                                    {draft.image_url && (
                                        <img
                                            src={draft.image_url}
                                            alt="Draft visual"
                                            className="card-img-bottom img-fluid rounded mb-3"
                                        />
                                    )}
                                    <h3 className="card-title">{draft.title}</h3>
                                    <p className="card-subtitle mb-2 text-muted fst-italic">
                                        {draft.summary}
                                    </p>
                                    <div
                                        className="card-text mb-3"
                                        dangerouslySetInnerHTML={{ __html: draft.body }}
                                    />

                                    <button
                                        className="custom-remove-btn btn-sm"
                                        onClick={() => handleRemove(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Drafts;
