import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Face Detection And Image Manipulation",
      description: "Face Detection and Image Manipulation project with recognition, filtering, editing, processing.",
      link: "https://github.com/Charannick17/FaceDetectionAndImageManipulation"
    },
    {
      title: "Black Friday Data Analysis",
      description: "Performed data cleaning, feature engineering, and generated actionable insights on user demographics, product categories, and spending habits.",
      link: "https://github.com/Charannick17/Data-analysis"
    },
    {
      title: "VidyaAI+ Chatbot",
      description: "Vidya AI: Student-focused chatbot built using Google Gemini API.",
      link: "https://github.com/Charannick17/vidyaai-"
    }
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="portfolio__container">
        {projects.map((project, index) => (
          <div className="portfolio__item" key={index}>
            <h3 className="portfolio__title">{project.title}</h3>
            <p className="portfolio__desc">{project.description}</p>
            <a href={project.link} className="portfolio__button" target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
