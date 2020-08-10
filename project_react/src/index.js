import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import addArticle from './screens/addArticle';
import addCategory from './screens/addCategory';
import ErrorScreen from "./screens/ErrorScreen";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/screens/article" component={addArticle} />
      <Route path="/screens/category" component={addCategory} />      
      <Route path="/" component={ErrorScreen} />      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
