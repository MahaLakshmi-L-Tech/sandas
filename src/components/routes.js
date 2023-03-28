import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Projects from "./projects";
import Methods from "./methods";
import Getearlyacess from "./getearlyacess";
import Team from "./team";

const routes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/team" element={<Team />} />
      <Route path="/methods" element={<Methods />} />
      <Route path="/login" element={<Login />} />
      <Route path="/getearlyacess" element={<Getearlyacess />} />
    </Routes>
  );
};

export default routes;
