import React from 'react';

import { Home } from '../components/home/Home';
import { About } from '../components/about/About';
import { Skills } from '../components/skills/Skills';
import { Services } from '../components/services/Services';
import { Qualification } from '../components/qualification/Qualification';
import { Work } from '../components/work/Work';
import { Publications } from '../components/publications/Publications';

import '../App.css';

const Index = () => {
  return (
    <main className="main">
      <Home />
      {/* <About /> */}
      <Skills />
      {/* <Qualification /> */}
      {/* <Work /> */}
      <Publications />
    </main>
  );
};

export { Index };
