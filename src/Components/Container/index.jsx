import React, { Fragment } from "react";
import {Col, Container, Row} from "reactstrap";
import Header from "../Header";
import "./Container.scss";

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;
