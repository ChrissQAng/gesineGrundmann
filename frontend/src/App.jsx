import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Texts from "./pages/Texts/Texts";
import Views from "./pages/Views/Views";
import Works from "./pages/Works/Works";
import Details from "./pages/Detail/Details";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/texts" element={<Texts />} />
          <Route path="/views" element={<Views />} />
          <Route path="/works" element={<Works />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
