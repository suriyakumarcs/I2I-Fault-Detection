import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Container from "./Components/Container";
import Home from "./Components/Home";
import Form from "./Components/Form";
import User from "./Components/User";
import Friends from "./Components/Friends/Friends.react";

const AppRouter = () => (
  <Router basename="/">
    <Route path="/">
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/user" component={User} />
        <Route path="/friends" component={Friends}></Route>
      </Container>
    </Route>
  </Router>
);
export default AppRouter;
