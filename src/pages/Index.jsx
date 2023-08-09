import React from "react";

import { Home } from "../components/home/Home";
import { About } from "../components/about/About";
import { Skills } from "../components/skills/Skills";
import { Services } from "../components/services/Services";
import { Qualification } from "../components/qualification/Qualification";
import { Work } from "../components/work/Work";
import { Publications } from "../components/publications/Publications";
import { Teaching } from "../components/teaching/Teaching";
import { Testimonials } from "../components/testimonials/Testimonials";
import { Contact } from "../components/contact/Contact";

import "../App.css";

const Index = () => {
  return (
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Work />
      <Teaching />
      <Publications />
      <Testimonials />
      <Contact />
    </main>
  );
};

export { Index };
