import React from "react";
import "../App.css";

function AiContentSection() {
    return (
        <section className="ai-section container py-5" style={{ marginTop: "80px" }}>
            <div className="row align-items-center">

                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img
                        src="/images/section.jpg"
                        alt="AI Content Dashboard"
                        className="img-fluid ai-dashboard"
                        style={{ width: "80%", maxWidth: "600px", height: "auto" }}
                    />
                </div>


                <div className="col-md-6 pt-5 pb-4 ps-3 pe-5">
                    <h2 className="fw-bold ai-heading mb-3">
                        Generate and manage <span className="text-gradient">AI-powered</span> posts in one place
                    </h2>
                    <p className="text-muted ai-desc ">
                        Generate high quality AI-crafted articles and review them effortlessly in one place.
                        Organize every piece inside your centralized, searchable content hub, where your team and clients can access drafts, track revisions, and collaborate for{" "}
                        <a href="/home" className="text-link">seamless publishing</a> and faster content delivery.
                    </p>
                </div>
            </div>
            <div className="row align-items-center mt-5 mb-5">


                <div className="col-md-6 pt-5 pb-4 ps-5 pe-3" >
                    <h2 className="fw-bold ai-heading mb-3">
                        Generate stunning <span className="text-gradient">AI images</span> with matching content
                    </h2>
                    <p className="text-muted ai-desc">
                        Create visually engaging AI-generated images paired with perfectly written content all in one place.
                        From blog banners to social posts, generate stunning visuals that match your message instantly.
                    </p>
                </div>
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img
                        src="/images/section1.jpg"
                        alt="AI Content Dashboard"
                        className="img-fluid ai-dashboard"
                        style={{ width: "80%", maxWidth: "600px", height: "auto" }}
                    />
                </div>
            </div>
        </section>


    );
}

export default AiContentSection;
