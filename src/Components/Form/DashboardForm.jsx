import React, {Component} from "react";
import {Badge, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import "./Form";

class DashboardForm extends Component {
  render() {
    return (
      <div className="ui-dashboard-form">
        <Container>
          <Row>
            <Col md="2" />
            <Col md="8">
              <Form>
                <FormGroup className="chart-input">
                  <Label
                    className="form-label"
                    for="name">
                    Chart name
                  </Label>
                  <p className="form-notification">
                    Give a name for the chart
                  </p>
                  <Input
                    className="form-input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter a name"
                  />
                </FormGroup>
                <FormGroup className="chart-input">
                  <Label
                    for="query"
                    className="form-label">
                    Query
                  </Label>
                  <p className="form-notification">
                    Enter the query to execute
                  </p>
                  <Input
                    className="form-text-area"
                    type="textarea"
                    name="query"
                    id="query"
                  />
                </FormGroup>
                <FormGroup>
                  <Badge
                    color="danger"
                    className="chart-badge">
                    Line Chart
                  </Badge>
                  <Badge
                    color="danger"
                    className="chart-badge disabled">
                    Multi Line Chart
                  </Badge>
                  <Badge
                    color="danger"
                    className="chart-badge">
                    Bar Chart
                  </Badge>
                  <Badge
                    color="danger"
                    className="chart-badge disabled">
                    Stacked Bar Chart
                  </Badge>
                  <Badge
                    color="danger"
                    className="chart-badge">
                    Grouped Bar Chart
                  </Badge>
                  <Badge
                    color="danger"
                    className="chart-badge">
                    Pie Chart
                  </Badge>
                  <Badge
                    color="danger"
                    className="chart-badge">
                    Doughnut Chart
                  </Badge>
                </FormGroup>
              </Form>
            </Col>
            <Col md="2" />
          </Row>
        </Container>
      </div>
    )
  }
}

export default DashboardForm;
