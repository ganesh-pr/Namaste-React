import React, { createElement as ce, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";

const Instamart = lazy(() => import("./components/Instamart"));
// Upon On Demand loading -> upon render -> suspend loading

const About = lazy(() => import("./components/About"));

/**
 *
 * Chunking
 * Code Splitting
 * Dynamic Bundling
 * Lazy loading
 * On Demand Loading
 *
 */

const AppLayOut = () => {
  // DO NOT LAZY LOAD A COMPONENT INSIDE ANOTHER COMPONENT. Why not lazy load inside a component? This will lazy load after every render cycle.

  //const About = lazy(() => import("./components/About"));

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile", //it will consider parentPath/{path} => localhost:1234/about/profile
            element: <Profile></Profile>,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      ,
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
