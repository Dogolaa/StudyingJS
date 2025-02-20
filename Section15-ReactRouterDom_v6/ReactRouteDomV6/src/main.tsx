import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { Home } from "./components/Home";
import { About } from "./components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
