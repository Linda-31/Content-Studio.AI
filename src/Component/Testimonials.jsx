import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const testimonials = [
  {
    name: "Abbied D",
    role: "Senior Software Engineer, Laywers",
    text: "I use ContentStudio to optimize our digital content management. It helps me manage multiple accounts seamlessly across various platforms.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Anthony Garcia",
    role: "Owner at Aught Media",
    text: "ContentStudio – the best social media management tool out there. Designed beautifully posts, everything just makes sense.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Angela R.",
    role: "Agency Owner",
    text: "Before ContentStudio, getting client approvals was stressful. Now clients get instant notifications and can approve posts easily.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const testimonials2 = [
  {
    name: "Marcos Ruvalcaba",
    role: "USMC United States Marine Corps",
    text: "ContentStudio integrates social, blog, YouTube, and inbox control all in one spot. A must-have for marketers.",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Matt Li Haoming",
    role: "Managing Director, Aimaai Pte Ltd",
    text: "ContentStudio connects social accounts and enables easy creation + publishing directly from their platform.",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Thomas Smith",
    role: "Digital Marketing Specialist",
    text: "ContentStudio is easy to use and helps manage my social needs while keeping audience engagement high.",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container" style={{ marginTop: "50px" }}>
      <h2 className="testimonials-title">What our customers say</h2>

        <motion.div
        className="testimonial-row"
        animate={{ x: [0, 60, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="profile">
              <img src={t.img} alt={t.name} className="avatar" />
              <div>
                <h4>{t.name}</h4>
                <p className="role">{t.role}</p>
              </div>
            </div>
            <p className="text">{t.text}</p>
          </div>
        ))}
      </motion.div>

   
      <motion.div
        className="testimonial-row"
        animate={{ x: [0, -60, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {testimonials2.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="profile">
              <img src={t.img} alt={t.name} className="avatar" />
              <div>
                <h4>{t.name}</h4>
                <p className="role">{t.role}</p>
              </div>
            </div>
            <p className="text">{t.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
