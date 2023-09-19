import React, { useState } from 'react';
import './publications.css';

const Publications = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="publications section" id="publications">
      <h2 className="section__title">Publications</h2>
      <span className="section__subtitle">My published works</span>

      <div className="publications__container container grid">
        <div className="publications__content">
          <div className="publication__external-links">
            <a
              href="https://github.com/jspieler/QBAF-Learning"
              className="publication__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github publication__link-github"></i>
            </a>
          </div>
          <h3 className="publication__title">
            Interpretable Machine Learning with Gradual Argumentation
            Frameworks
          </h3>
          <span className="publication__authors">
            Jonathan Spieler, Nico Potyka, Steffen Staab
          </span>
          <span className="publication__publishing-information">
            Computational Models of Argument - Proceedings of COMMA
            2022
          </span>

          <span
            className="publication__button"
            onClick={() => toggleTab(1)}
          >
            Read Abstract
            <i className="uil uil-arrow-right publication__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? 'publication__modal active-modal'
                : 'publication__modal'
            }
          >
            <div className="publication__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times publication__modal-close"
              ></i>
              <h3 className="publication__modal-title">
                Interpretable Machine Learning with Gradual
                Argumentation Frameworks
              </h3>
              <p className="publication__modal-description">
                Gradual argumentation frameworks represent arguments
                and their relationships in a weighted graph. Their
                mechanics are closely related to neural networks,
                which are considered as black-box models due to their
                dense structure with millions of neurons. Recent work
                tried making them human-understandable by trying to
                learn parameters that can be well approximated by
                decision trees. However, the tree remains just an
                approximation, which leaves the question how faithful
                it really captures the actual mechanics of the neural
                network. To circumvent the problem, we tailor ideas
                for learning sparse neural networks to the discrete
                structure of gradual argumentation frameworks to learn
                sparse neural networks that can be directly
                interpreted as gradual argumentation frameworks. We
                present a genetic algorithm and evaluate it on
                benchmarks from the UCI machine learning repository.
                Our implementation is publicly available on Github
                https://github.com/jspieler/QBAF-Learning.
              </p>
            </div>
          </div>
        </div>

        <div className="publications__content">
          <div className="publication__external-links">
            <a
              href="https://ceur-ws.org/Vol-3208/paper7.pdf"
              className="publication__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-link-external publication__link-paper"></i>
            </a>
            <a
              href="https://github.com/jspieler/QBAF-Learning"
              className="publication__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github publication__link-github"></i>
            </a>
          </div>
          <h3 className="publication__title">
            Learning Gradual Argumentation Frameworks using
            Meta-heuristics
          </h3>
          <span className="publication__authors">
            Nico Potyka, Mohamad Bazo, Jonathan Spieler, Steffen Staab
          </span>
          <span className="publication__publishing-information">
            Proceedings of the 1st Workshop on Argumentation & Machine
            Learning co-located with 9th International Conference on
            Computational Models of Argument (COMMA 2022), Cardiff,
            Wales, September 13th, 2022
          </span>

          <span
            className="publication__button"
            onClick={() => toggleTab(2)}
          >
            Read Abstract
            <i className="uil uil-arrow-right publication__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? 'publication__modal active-modal'
                : 'publication__modal'
            }
          >
            <div className="publication__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times publication__modal-close"
              ></i>
              <h3 className="publication__modal-title">
                Learning Gradual Argumentation Frameworks using
                Meta-heuristics
              </h3>
              <p className="publication__modal-description">
                Gradual argumentation frameworks represent arguments
                and their relationships in a weighted graph. Their
                mechanics are closely related to neural networks,
                which are considered as black-box models due to their
                dense structure with millions of neurons. Recent work
                tried making them human-understandable by trying to
                learn parameters that can be well approximated by
                decision trees. However, the tree remains just an
                approximation, which leaves the question how faithful
                it really captures the actual mechanics of the neural
                network. To circumvent the problem, structure learning
                ideas can be tailored to the discrete structure of
                gradual argumentation frameworks to learn sparse
                neural networks that can be directly interpreted as
                gradual argumentation frameworks. We discuss the
                learning problem, sketch a genetic and a particle
                swarm optimization algorithm to solve the problem and
                show first results on data sets from the UCI machine
                learning repository.
              </p>
            </div>
          </div>
        </div>

        <div className="publications__content">
          <div className="publication__external-links">
            <a
              href="https://arxiv.org/abs/2106.13585"
              className="publication__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-link-external publication__link-paper"></i>
            </a>
            <a
              href="https://github.com/jspieler/QBAF-Learning"
              className="publication__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github publication__link-github"></i>
            </a>
          </div>
          <h3 className="publication__title">
            Learning Gradual Argumentation Frameworks using Genetic
            Algorithms
          </h3>
          <span className="publication__authors">
            Jonathan Spieler, Nico Potyka, Steffen Staab
          </span>
          <span className="publication__publishing-information">
            arXiv:2106.13585
          </span>

          <span
            className="publication__button"
            onClick={() => toggleTab(3)}
          >
            Read Abstract
            <i className="uil uil-arrow-right publication__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? 'publication__modal active-modal'
                : 'publication__modal'
            }
          >
            <div className="publication__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times publication__modal-close"
              ></i>
              <h3 className="publication__modal-title">
                Learning Gradual Argumentation Frameworks using
                Genetic Algorithms
              </h3>
              <p className="publication__modal-description">
                Gradual argumentation frameworks represent arguments
                and their relationships in a weighted graph. Their
                graphical structure and intuitive semantics makes them
                a potentially interesting tool for interpretable
                machine learning. It has been noted recently that
                their mechanics are closely related to neural
                networks, which allows learning their weights from
                data by standard deep learning frameworks. As a first
                proof of concept, we propose a genetic algorithm to
                simultaneously learn the structure of argumentative
                classification models. To obtain a well interpretable
                model, the fitness function balances sparseness and
                accuracy of the classifier. We discuss our algorithm
                and present first experimental results on standard
                benchmarks from the UCI machine learning repository.
                Our prototype learns argumentative classification
                models that are comparable to decision trees in terms
                of learning performance and interpretability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Publications };
