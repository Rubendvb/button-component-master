import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";

import "normalize.css";
import "./assets/css/Main.css";
import Menu from "./components/Menu.tsx";
import Buttons from "./pages/Buttons.tsx";
import Inputs from "./pages/Inputs.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/inputs" element={<Inputs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
