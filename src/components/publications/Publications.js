import React from "react";
import "./publications.css";

const Publications = () => {
  return (
    <section className="publications section" id="publications">
      <h2 className="section__title">Publications</h2>
      <span className="section__subtitle">My published works</span>

      <div className="publications__container container grid">
        <div className="publications__content">
          <div className="publication__external-links">
            <a
              href="https://www.arxiv.org/"
              className="publication__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-link-external publication__link-paper"></i>
            </a>
            <a
              href="https://github.com/"
              className="publication__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github publication__link-github"></i>
            </a>
          </div>
          <h3 className="publication__title">
            The Value-Improvement Path: Towards Better Representations for
            Reinforcement Learning.
          </h3>
          <span className="publication__authors">
            {" "}
            Will Dabney, André Barreto, Mark Rowland, Robert Dadashi, John Quan,
            Marc G. Bellemare, David Silver
          </span>
          <span className="publication__publishing-information">
            AAAI 2021: 7160-7168
          </span>
        </div>

        <div className="publications__content">
          <div className="publication__external-links">
            <a
              href="https://www.arxiv.org/"
              className="publication__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-link-external publication__link-paper"></i>
            </a>
            <a
              href="https://github.com/"
              className="publication__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github publication__link-github"></i>
            </a>
          </div>
          <h3 className="publication__title">
            The Value-Improvement Path: Towards Better Representations for
            Reinforcement Learning.
          </h3>
          <span className="publication__authors">
            {" "}
            Will Dabney, André Barreto, Mark Rowland, Robert Dadashi, John Quan,
            Marc G. Bellemare, David Silver
          </span>
          <span className="publication__publishing-information">
            AAAI 2021: 7160-7168
          </span>
        </div>
      </div>
    </section>
  );
};

export default Publications;
