import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Mongodb } from "./components/MongoDB/Mongodb";
import { Express } from "./components/Express/Express";
import { ReactJs } from "./components/React/React";
import { NodeJs } from "./components/Nodejs/Nodejs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mongodb" element={<Mongodb />} />
      <Route path="/express" element={<Express />} />
      <Route path="/react" element={<ReactJs />} />
      <Route path="/nodejs" element={<NodeJs />} />
    </Routes>
  </BrowserRouter>
);
