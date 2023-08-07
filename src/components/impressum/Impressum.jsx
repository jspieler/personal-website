import React, { useState, useEffect } from "react";
import "./impressum.css";
import { impressumData } from "./Data";

const Impressum = () => {
  const [toggleState, setToggleState] = useState(false);
  const [language, setLanguage] = useState({ name: "en" });
  const [impressum, setImpressum] = useState([]);
  const [active, setActive] = useState(1); // corresponds to "en"

  useEffect(() => {
    const newImpressum = impressumData.filter((imp) => {
      return imp.language === language.name;
    });
    setImpressum(newImpressum);
  }, [language]);

  const handleClick = (e, index) => {
    setLanguage({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div className="impressum__container">
      <div className="impressum__content">
        <span
          className="impressum__button"
          onClick={() => setToggleState(!toggleState)}
        >
          Impressum
          <i className="uil uil-arrow-right impressum__button-icon"></i>
        </span>

        <div
          className={
            toggleState ? "impressum__modal active-modal" : "impressum__modal"
          }
        >
          <div className="impressum__modal-content">
            <div className="impressum__filters">
              {impressumData.map((item, index) => {
                return (
                  <span
                    onClick={(e) => {
                      handleClick(e, index);
                    }}
                    className={`${
                      active === index ? "active-language" : ""
                    } language__item`}
                    key={index}
                  >
                    {item.language}
                  </span>
                );
              })}
            </div>
            <i
              onClick={() => setToggleState(!toggleState)}
              className="uil uil-times impressum__modal-close"
            ></i>

            {impressum.map((item) => {
              return (
                <div className="impressum__data" key={item.id}>
                  <h3 className="impressum__modal-title">{item.title}</h3>
                  <h4 className="impressum__modal-subtitle">{item.subtitle}</h4>

                  <h4 className="impressum__modal-sectiontitle">
                    {item.sectiontitle1}
                  </h4>
                  <p className="impressum__modal-contact">JS</p>
                  <a
                    href="mailto:user@gmail.com"
                    className="impressum__modal-contact"
                  >
                    user@gmail.com
                  </a>

                  <h4 className="impressum__modal-sectiontitle">
                    {item.sectiontitle2}
                  </h4>
                  <h5 className="impressum__modal-sectionsubtitle">
                    {item.sectionsubtitle1}
                  </h5>
                  <p className="impressum__modal-description">
                    {item.description11}
                  </p>
                  <p className="impressum__modal-description">
                    {item.description12}
                  </p>

                  <h5 className="impressum__modal-sectionsubtitle">
                    {item.sectionsubtitle2}
                  </h5>
                  <p className="impressum__modal-description">
                    {item.description21}
                  </p>
                  <p className="impressum__modal-description">
                    {item.description22}
                  </p>
                  <p className="impressum__modal-description">
                    {item.description23}
                  </p>
                  <p className="impressum__modal-description">
                    {item.description24}
                  </p>

                  <h5 className="impressum__modal-sectionsubtitle">
                    {item.sectionsubtitle3}
                  </h5>
                  <p className="impressum__modal-description">
                    {item.description31}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Impressum };
