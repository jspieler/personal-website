import React from "react";

import { Article } from "../components/articles/Article";

const IntroductionToPython = () => {
  return (
    <main className="main">
      <Article
        title={"Introduction to Python"}
        subtitle={"Yet another python guide"}
        children={"Lorem ipsum dolor sit ..."}
      />
    </main>
  );
};

export { IntroductionToPython };
