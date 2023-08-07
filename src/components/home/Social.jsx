import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://linkedin.com/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://xing.com/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-xing"></i>
      </a>

      <a
        href="https://github.com/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export { Social };
