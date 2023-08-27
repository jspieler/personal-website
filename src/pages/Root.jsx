import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { ScrollUp } from "../components/scrollup/ScrollUp";
import { ThemeContext } from "../theme/Theme";

import "../App.css";

const Root = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Header />

      <Outlet />

      <Footer />
      <ScrollUp />
    </div>
  );
};

export { Root };
