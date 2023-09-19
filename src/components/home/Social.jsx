import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://linkedin.com/in/jspieler"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/jspieler"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export { Social };
