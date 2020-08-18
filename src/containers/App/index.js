import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../home";
import Articles from "../Articles";
import Contact from "../Contact";
import Legal from "../legal";
import Article from "../Article";
import Category from "../Category";

function App() {
  return (
    <div className="App">
      <Switch>     
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/mentions-legales" component={Legal} exact />
        <Route path="/articles" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
    </div>
  );
}

export default App;
