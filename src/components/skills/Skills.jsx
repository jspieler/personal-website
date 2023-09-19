import React from 'react';

import './skills.css';

import { Backend } from './Backend';
import { Frameworks } from './Frameworks';
import { Frontend } from './Frontend';
import { Tools } from './Tools';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My tech stack</span>

      <div className="skills__container container grid">
        <Backend />
        <Frontend />
        <Tools />
        <Frameworks />
      </div>
    </section>
  );
};

export { Skills };
