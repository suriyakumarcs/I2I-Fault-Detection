import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Container from "./Components/Container";
import AddDevice from "./Components/Home";
import Form from "./Components/Form";
import Devices from './Components/Devices';
import User from "./Components/User";
import Friends from "./Components/Friends/Friends.react";

const AppRouter = () => (
  <Router basename="/">
    <Route path="/">
      <Container>
        <Route exact path="/" component={Devices} />
        <Route excat path="/add" component={AddDevice} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/user" component={User} />
        <Route path="/friends" component={Friends}></Route>
      </Container>
    </Route>
  </Router>
);
export default AppRouter;
