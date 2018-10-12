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
            <Col className="p-0 header" md="12">
              <Header />
            </Col>
            <Col className="p-0 pt-4 body" md="12">
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AppContainer;
