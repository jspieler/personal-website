import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">x years working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">xxx</span>
      </div>

      <div className="about__box">
        <i className="bx bx-rocket about__icon"></i>
        <h3 className="about__title">Skills</h3>
        <span className="about__subtitle">yyy</span>
      </div>
    </div>
  );
};

export { Info };
