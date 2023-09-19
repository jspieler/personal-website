import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__quote">
          <blockquote className="footer__blockquote">
            <p className="footer__blockquote-text">
              "The whole thinking process is still rather mysterious
              to us, but I believe that the attempt to make a thinking
              machine will help us greatly in finding out how we think
              ourselves."
            </p>
          </blockquote>
          <p className="footer__quote-author">Alan Turing</p>
        </div>

        <div className="footer__social">
          <a
            href="https://linkedin.com/in/jspieler"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/jspieler"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; 2023 jspieler. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export { Footer };
