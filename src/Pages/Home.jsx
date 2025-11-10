import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import Testimonials from "../Component/Testimonials";
import AiContentSection from "../Component/AiContentSection";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-container">

        <motion.div
          className="text-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="title">Content Studio</h1>
          <p className="subtitle">
            Generate engaging blog posts, social media contents, and long-form articles effortlessly with the help of intelligent AI that understands your style and tone.
          </p>
          <div className="buttons">
            <motion.button
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              FREE TRIAL
            </motion.button>
            <motion.button
              className="btn-filled"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/Generate")}
            >
              GET CONTENT STUDIO

            </motion.button>
          </div>
        </motion.div>


        <motion.div
          className="image-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/images/banner.jpg" alt="Content Studio" className="studio-image" />
        </motion.div>

      </div>
      <div className="contentstudio-container" >

        <p className="contentstudio-description">
          All the tools you need to streamline your content creation and marketing across every channel from blogs and social media to newsletters. Say goodbye to data gaps, endless email threads, and disconnected workflows.
        </p>

        <div className="contentstudio-section">
          <div className="contentstudio-text pt-5 pb-4 ps-3 pe-5">
            <h4>CONTENT STUDIO</h4>
            <h2>The Only Complete Management Tool</h2>
            <p>
              AI ContentStudio is your all-in-one platform for generating, optimizing, and publishing high-quality articles effortlessly. Plan, create, and distribute AI-powered content across blogs, websites, and social media.
            </p>
          </div>

          <div className="contentstudio-video">
            <video controls width="100%">
              <source src="/images/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <AiContentSection />
      <div className="form-container">

        <div className="form-curve-top"></div>

        <div className="form-content" style={{ marginTop: "80px" }}>
          <h2 className="heading-primary">Want a FREE Trial?</h2>
          <h3 className="heading-secondary">Contact us</h3>

          <form className="contact-form">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="name">Your Name *</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>

            <div className="input-group message-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>

            <button type="submit" className="submit-button">
              SEND NOW
            </button>
          </form>
        </div>
      </div>
      <Testimonials />

    </>
  );
};

export default Home;
