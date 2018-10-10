import React from "react";
import {Col, Container, Row} from "reactstrap";
import Header from "../Header";
import "./Container";

class AppContainer extends React.Component {
  render() {
    return (
      <div className="ui-container">
        <Container fluid>
          <Row>
            <Col className="padding-0" md="12">
              <Header />
            </Col>
            <Col md="12">
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AppContainer;
