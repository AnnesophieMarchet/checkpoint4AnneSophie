import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import GameForm from "./components/GameForm";
import GameResultPage from "./components/GameResultPage";
import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import SignUpPage from "./pages/SignUpPage";

const ApiUrl = import.meta.env.VITE_API_URL;

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        id: "homePage",
        element: <HomePage />,
      },
      {
        path: "/game-result",
        id: "game-result",
        loader: async () => fetch(`${ApiUrl}/api/games`),
        element: <GamePage />,
      },
      {
        path: "/game-result/:id",
        id: "game-result-list",
        element: <GameResultPage />,
      },
      {
        path: "/sign-up-page",
        id: "sign-up-page",
        element: <SignUpPage />,
      },
      {
        path: "/game-form",
        id: "game-form",
        element: <GameForm />,
      },
      {
        path: "/login-page",
        id: "login-page",
        // loader: async () => fetch(`${ApiUrl}/api/users/login`),
        element: <LoginPage />,
      },
      {
        path: "/profile",
        id: "profil-page",
        element: <Profile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
