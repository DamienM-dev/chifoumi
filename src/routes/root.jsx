import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import GamePage from "../pages/GamePage";
import ResultPage from "../pages/ResultPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "game",
    element: <GamePage />,
  },
  {
    path: "result",
    element: <ResultPage />,
  },
]);
