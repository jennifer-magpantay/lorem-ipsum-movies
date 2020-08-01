import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ScreenNewVideo from './screens/ScreenNewVideo';
import ScreenNewCategory from './screens/ScreenNewCategory';
import ScreenError from './screens/ScreenError';

import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/screens/video" component={ScreenNewVideo} />
      <Route path="/screens/category" component={ScreenNewCategory} />      
      <Route path="/" component={ScreenError} />      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
