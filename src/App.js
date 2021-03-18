import React from "react";
import "./App.css";
import Login from "./componets/login/Login";
import Home from "./componets/home/Home";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="*">
          404
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
