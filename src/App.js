import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Offers from "./components/Offers";
import Help from "./components/Help";
import ErrorPage from "./components/ErrorPage";
import RestaurantOverview from "./components/RestaurantOverview";
import UserContext from "../utils/UserContext";
// import Groceries from "./components/Groceries";

const AppLayout = () => {
  const [userName, setUserName] = useState("Ganapathy");
  return (
    <div className='main-container'>
      <UserContext.Provider value={{ loggedUser: userName, setUserName }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

const Groceries = lazy(() => import("./components/Groceries"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
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
      {
        path: "/grocery",
        // element: <Groceries />,
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Groceries />
          </Suspense>
        ),
      },
    ],
  },
]);

const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);
root.render(<RouterProvider router={appRouter}></RouterProvider>);
