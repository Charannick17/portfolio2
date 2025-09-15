import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Project Experience</h3>
            <span className="about__subtitle">6 Months Working</span>
        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5+ Projects in Data Analysis & 2 projects in ML</span>
        </div>
        <div className="about__box">
            <i className="bx bx-heart about__icon"></i>
            <h3 className="about__title">Interest</h3>
            <span className="about__subtitle">DSA, ML, GenAI & System Design </span>
        </div>
    </div>
  )
}

export default info
