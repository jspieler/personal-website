import React from "react";

import "./article.css";

const Article = ({ title, subtitle, children }) => {
  return (
    <section className="article section" id="article">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="article__container container">
        <div className="article__data">{children}</div>
      </div>
    </section>
  );
};

export { Article };
