import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function createWebPageUsingReact() {
  const page = (
    <div className="main-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
  const rootEle = document.getElementById("root");
  const root = ReactDOM.createRoot(rootEle);
  root.render(page);
}

createWebPageUsingReact();
