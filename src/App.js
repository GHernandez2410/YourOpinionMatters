import React from "react";
import { Router, Switch, Route } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MainPage from "./components/pages/MainPage";

import { history } from "./helpers/history";

const App = () => {
  
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} /> 
        </Switch>
      </div>
    </Router>
  );
};

export default App;
