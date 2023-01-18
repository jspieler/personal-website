import React, { useState } from "react";
import "./publications.css";

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

          <span className="publication__button" onClick={() => toggleTab(1)}>
            View Abstract
            <i className="uil uil-arrow-right publication__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "publication__modal active-modal"
                : "publication__modal"
            }
          >
            <div className="publication__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times publication__modal-close"
              ></i>
              <h3 className="publication__modal-title">
                The Value-Improvement Path: Towards Better Representations for
                Reinforcement Learning.
              </h3>
              <p className="publication__modal-description">
                In value-based reinforcement learning (RL), unlike in supervised
                learning, the agent faces not a single, stationary,
                approximation problem, but a sequence of value prediction
                problems. Each time the policy improves, the nature of the
                problem changes, shifting both the distribution of states and
                their values. In this paper we take a novel perspective, arguing
                that the value prediction problems faced by an RL agent should
                not be addressed in isolation, but rather as a single, holistic,
                prediction problem. An RL algorithm generates a sequence of
                policies that, at least approximately, improve towards the
                optimal policy. We explicitly characterize the associated
                sequence of value functions and call it the value-improvement
                path. Our main idea is to approximate the value-improvement path
                holistically, rather than to solely track the value function of
                the current policy. Specifically, we discuss the impact that
                this holistic view of RL has on representation learning. We
                demonstrate that a representation that spans the past
                value-improvement path will also provide an accurate value
                approximation for future policy improvements. We use this
                insight to better understand existing approaches to auxiliary
                tasks and to propose new ones. To test our hypothesis
                empirically, we augmented a standard deep RL agent with an
                auxiliary task of learning the value-improvement path. In a
                study of Atari 2600 games, the augmented agent achieved
                approximately double the mean and median performance of the
                baseline agent.
              </p>
            </div>
          </div>
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
            Online and Offline Reinforcement Learning by Planning with a Learned
            Model.
          </h3>
          <span className="publication__authors">
            {" "}
            Julian Schrittwieser, Thomas Hubert, Amol Mandhane, Mohammadamin
            Barekatain, Ioannis Antonoglou, David Silver
          </span>
          <span className="publication__publishing-information">
            NeurIPS 2021: 27580-27591
          </span>

          <span className="publication__button" onClick={() => toggleTab(2)}>
            View Abstract
            <i className="uil uil-arrow-right publication__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "publication__modal active-modal"
                : "publication__modal"
            }
          >
            <div className="publication__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times publication__modal-close"
              ></i>
              <h3 className="publication__modal-title">
                Online and Offline Reinforcement Learning by Planning with a
                Learned Model.
              </h3>
              <p className="publication__modal-description">
                Learning efficiently from small amounts of data has long been
                the focus of model-based reinforcement learning, both for the
                online case when interacting with the environment and the
                offline case when learning from a fixed dataset. However, to
                date no single unified algorithm could demonstrate
                state-of-the-art results in both settings. In this work, we
                describe the Reanalyse algorithm which uses model-based policy
                and value improvement operators to compute new improved training
                targets on existing data points, allowing efficient learning for
                data budgets varying by several orders of magnitude. We further
                show that Reanalyse can also be used to learn entirely from
                demonstrations without any environment interactions, as in the
                case of offline Reinforcement Learning (offline RL). Combining
                Reanalyse with the MuZero algorithm, we introduce MuZero
                Unplugged, a single unified algorithm for any data budget,
                including offline RL. In contrast to previous work, our
                algorithm does not require any special adaptations for the
                off-policy or offline RL settings. MuZero Unplugged sets new
                state-of-the-art results in the RL Unplugged offline RL
                benchmark as well as in the online RL benchmark of Atari in the
                standard 200 million frame setting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
