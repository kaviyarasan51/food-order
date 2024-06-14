import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import Help from "./components/Help";
import ContactUs from "./components/ContactUs";
import Offers from "./components/Offers";
import Errorpage from "./components/Errorpage";
import RestaurantOverview from "./components/RestaurantOverview";

const Page = () => {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/details/:id",
        element: <RestaurantOverview />,
      },
    ],
  },
]);
const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);
root.render(<RouterProvider router={appRouter}></RouterProvider>);
