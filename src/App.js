import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Countries from "./components/Countries";
import Header from "./components/Header";
import CountryInfo from "./components/CountryInfo";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route path="/country/:name" component={CountryInfo} />
        <Route exact path="/">
          <Header />
          <div className="centered-components">
            <Countries />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
