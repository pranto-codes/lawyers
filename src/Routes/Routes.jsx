import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import CardDetails from "../pages/CardDeteails/CardDetails";
import Bookings from "../pages/Bookings/Bookings";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("data.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "/cardDetails/:id",
        loader: () => fetch("./data.json"),
        Component: CardDetails,
      },
      {
        path: "bookings",
        loader: () => fetch("./data.json"),
        Component: Bookings,
      },
    ],
  },
]);
