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

const getLawyers = async () => {
  const response = await fetch("/data.json");

  if (!response.ok) {
    throw new Error("Failed to load lawyer data");
  }

  return response.json();
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: getLawyers,
        Component: Home,
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
        path: "cardDetails/:id",
        loader: getLawyers,
        Component: CardDetails,
      },
      {
        path: "bookings",
        loader: getLawyers,
        Component: Bookings,
      },
    ],
  },
]);
