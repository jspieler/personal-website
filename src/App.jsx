import React, { useContext } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Services } from './components/services/Services';
import { Qualification } from './components/qualification/Qualification';
import { Work } from './components/work/Work';
import { Publications } from './components/publications/Publications';
import { Teaching } from './components/teaching/Teaching';
import { Testimonials } from './components/testimonials/Testimonials';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { ScrollUp } from './components/scrollup/ScrollUp';
import { ThemeContext } from './theme/Theme';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Header />

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

      <Footer />
      <ScrollUp />
    </div>
  );
};

export { App };
