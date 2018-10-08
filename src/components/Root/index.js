import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../App";
import About from "../../pages/About";

import "../../styles/index.global.css";

/**
 * The Root Component
 * 
 * @class Root
 */
function Root() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About} />
      </Fragment>
    </Router>
  );
}

export default Root;