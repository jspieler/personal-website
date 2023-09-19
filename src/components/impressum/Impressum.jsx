import React, { useState, useEffect } from 'react';
import './impressum.css';
import { impressumData } from './Data';

const Impressum = () => {
  const [language, setLanguage] = useState({ name: 'en' });
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
    <section className="impressum section" id="impressum">
      <div className="impressum__container container">
        <div className="impressum__content">
          <div className="impressum__filters">
            {impressumData.map((item, index) => {
              return (
                <span
                  onClick={(e) => {
                    handleClick(e, index);
                  }}
                  className={`${
                    active === index ? 'active-language' : ''
                  } language__item`}
                  key={index}
                >
                  {item.language}
                </span>
              );
            })}
          </div>

          {impressum.map((item) => {
            return (
              <div className="impressum__data" key={item.id}>
                <h3 className="impressum__title">{item.title}</h3>
                <h4 className="impressum__subtitle">
                  {item.subtitle}
                </h4>

                <h4 className="impressum__sectiontitle">
                  {item.sectiontitle1}
                </h4>
                <p className="impressum__contact">Jonathan Spieler</p>
                <a
                  href="mailto:jspieler@outlook.de"
                  className="impressum__contact"
                >
                  jspieler[at]outlook[dot]de
                </a>

                <h4 className="impressum__sectiontitle">
                  {item.sectiontitle2}
                </h4>
                <h5 className="impressum__sectionsubtitle">
                  {item.sectionsubtitle1}
                </h5>
                <p className="impressum__description">
                  {item.description11}
                </p>
                <p className="impressum__description">
                  {item.description12}
                </p>

                <h5 className="impressum__sectionsubtitle">
                  {item.sectionsubtitle2}
                </h5>
                <p className="impressum__description">
                  {item.description21}
                </p>
                <p className="impressum__description">
                  {item.description22}
                </p>
                <p className="impressum__description">
                  {item.description23}
                </p>
                <p className="impressum__description">
                  {item.description24}
                </p>

                <h5 className="impressum__sectionsubtitle">
                  {item.sectionsubtitle3}
                </h5>
                <p className="impressum__description">
                  {item.description31}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Impressum };
