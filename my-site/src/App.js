import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header/header.component";
import SocialBar from "./Components/SocialBar/socialBar.component";
import HomePage from "./Pages/HomePage/homepage.component";
import ProjectPage from "./Pages/ProjectPage/projectPage.component";
import ContactPage from "./Pages/ContactPage/contactPage.component";

const App = () => (
  <div className="container">
    <Header />
    <SocialBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/projects" component={ProjectPage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  </div>
);

export default App;
