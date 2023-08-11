import React, { useEffect, useState, useContext } from "react";

import Giscus from "@giscus/react";

import { ThemeContext } from "../../theme/Theme";
import "./article.css";

const Article = ({ title, subtitle, children }) => {
  const [sectionLinks, setSectionLinks] = useState([]);
  const { theme, _ } = useContext(ThemeContext);

  useEffect(() => {
    // Create section links for all h3 headers within the article content
    const headers = document.querySelectorAll(".article__content h3");
    const links = Array.from(headers).map((header, index) => ({
      title: header.textContent,
      id: `section-${index}`,
    }));
    setSectionLinks(links);
  }, []);

  return (
    <section className="article section" id="article">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="article__container container">
        <div className="article__content">{children}</div>
        <div className="article__outline">
          <ul>
            {sectionLinks.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <Giscus
          id="comments"
          repo="[ENTER REPO HERE]"
          repoId="[ENTER REPO ID HERE]"
          category="[ENTER CATEGORY NAME HERE]"
          categoryId="[ENTER CATEGORY ID HERE]"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={theme === "dark-theme" ? "dark" : "light"}
          lang="en"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export { Article };
