import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header/header.component";
import HomePage from "./Pages/HomePage/homepage.component";
import ProjectPage from "./Pages/ProjectPage/projectPage.component";

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/projects" component={ProjectPage} />
    </Switch>
  </div>
);

export default App;
