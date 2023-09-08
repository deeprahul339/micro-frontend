import React from "react";

import { createRoot } from "react-dom/client";

import Header from "home/Header";
import Footer from "home/Footer";

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="text-center">
      <img
        src="https://t.ly/noyH4"
        className="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 className="text-xl font-medium leading-tight mb-2">Rahul deep</h5>
      <p className="text-gray-500">Front-end developer</p>
    </div>
    <Footer />
  </div>
);
const domNode = document.getElementById("app");
const root = createRoot(domNode);
root.render(<App />);
