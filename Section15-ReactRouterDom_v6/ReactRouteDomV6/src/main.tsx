import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { Home } from "./components/Home";
import { About } from "./components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Post } from "./components/Post";
import { Posts } from "./components/Posts";
import { Redirect } from "./components/Redirect";
import { NotFound } from "./components/NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/posts/:id" element={<Post />}></Route> */}
        <Route path="/posts" element={<Posts />}>
          <Route path=":id" element={<Post />}></Route>
        </Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/redirect" element={<Redirect />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
