import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo-section">
                    <img src="/images/logo1.png" alt="AI Smart Marketing" className="footer-logo" />
                </div>
                <div className="footer-contact">
                    <p>
                        <a href="mailto:info@aismartmarketing.com">
                            info@ai-contentStudio.com
                        </a>
                    </p>
                    <p>876-354-5001</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-about">
                    <p>
                        Supercharge your writing workflow with intelligent AI tools that generate high quality articles, blogs, and marketing copy instantly saving time while boosting creativity.
                    </p>
                </div>

                <div className="footer-links">
                    <div>
                        <h3>Navigation</h3>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/generate">ContentStudio</Link>
                            </li>
                            <li>
                                <Link to="/drafts">Drafts</Link>
                            </li>
                        </ul>

                    </div>

                    <div>
                        <h3>Contact Info</h3>
                        <ul>
                            <li>
                                📍 123 Creative Street, Chennai, India
                            </li>
                            <li>
                                📞 +91 98765 43210
                            </li>
                            <li>
                                ✉️ <a href="mailto:info@aiarticlestudio.com">info@aiarticlestudio.com</a>
                            </li>
                            <li>
                                🌐 <a href="https://www.aiarticlestudio.com" target="_blank" rel="noreferrer">
                                    www.aiarticlestudio.com
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3>Follow Us</h3>
                        <ul>
                            <li className="youtube">YouTube</li>
                            <li>LinkedIn</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-rights">
        <p>© {new Date().getFullYear()} AI Content Studio. All rights reserved.</p>
      </div>
        </footer>
    );
};

export default Footer;
