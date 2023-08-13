import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Index } from "./pages/Index.jsx";
import { Root } from "./pages/Root.jsx";
import { IntroductionToPython } from "./pages/IntroductionToPython.jsx";
import { TeachingOverview } from "./pages/TeachingOverview.jsx";
import { Projects } from "./pages/Projects.jsx";
import { ImpressumPage } from "./pages/ImpressumPage.jsx";

import { ThemeProvider } from "./theme/Theme";
import { SafetyForDeepLearning } from "./pages/SafetyForDeepLearning.jsx";

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
        path: "/impressum",
        element: <ImpressumPage />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/teaching",
        element: <TeachingOverview />
      },
      {
        path: "/teaching/introduction-to-python",
        element: <IntroductionToPython />,
      },
      {
        path: "/teaching/safety-for-deep-learning",
        element: <SafetyForDeepLearning />,
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
