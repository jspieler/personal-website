import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Index } from "./pages/Index.jsx";
import { Root } from "./pages/Root.jsx";
import { IntroductionToPython } from "./pages/IntroductionToPython.jsx";

import { ThemeProvider } from "./theme/Theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/teaching/introduction-to-python",
        element: <IntroductionToPython />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
