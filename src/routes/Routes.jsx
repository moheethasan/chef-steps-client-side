import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import ChefsRecipes from "../pages/ChefsRecipes/ChefsRecipes";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "chefs/:id",
        element: (
          <PrivateRoute>
            <ChefsRecipes></ChefsRecipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
