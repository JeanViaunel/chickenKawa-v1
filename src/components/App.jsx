import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import Team from "./Team";
import Projects from "./Projects";
import AboutUs from "./AboutUs";
import chickens from "./chickens";
import ChickenDetails from "./ChickenDetails";

import Footer from "./Footer";
import { Container } from "@material-ui/core";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Container className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-us" element={<AboutUs />} />

          {chickens.map((chicken) => {
            return (
              <Route
                path={"/" + chicken.name}
                element={<ChickenDetails {...chicken} />}
              />
            );
          })}
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}
