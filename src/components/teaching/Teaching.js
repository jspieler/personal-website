import React from "react";
import { teachingData } from "./Data";
import TeachingItem from "./TeachingItem";
import "./teaching.css";

const Teaching = () => {
  return (
    <section className="teaching section" id="teaching">
      <h2 className="section__title">Teaching</h2>
      <span className="section__subtitle">
        Learning is a continuous process
      </span>

      <div className="teaching__container container grid">
        {teachingData.map((item) => {
          return <TeachingItem item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Teaching;
