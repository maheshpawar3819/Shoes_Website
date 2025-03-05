import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body.jsx";
import Mens from "./Components/Mens.jsx";
import Womens from "./Components/Womens.jsx";
import Sandals from "./Components/Sandals.jsx";
import Kids from "./Components/Kids.jsx";
import Login from "./Components/Login.jsx";
import Mensdetail from "./Components/Mens/Mensdetail.jsx";
import { Provider } from "react-redux";
import appstore from "./Components/Utils/appstore.js";
import Signin from "./Components/Signin.jsx";
import Cart from "./Components/Cart.jsx";
const approuter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={appstore}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/mens",
        element: <Mens />,
      },
      {
        path: "/womens",
        element: <Womens />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/sandals",
        element: <Sandals />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/menscard/:id",
        element: <Mensdetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={approuter} />
);
