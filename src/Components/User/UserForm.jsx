import React, {Component} from "react";
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import "./User";

class UserForm extends Component {
  render() {
    return (
      <div className="ui-user-form">
        <Container>
          <Row>
            <Col md="2" />
            <Col md="8">
              <Form>
                <FormGroup className="user-input">
                  <Label
                    className="form-label"
                    for="name">
                    User Name
                  </Label>
                  <p className="form-notification">
                    Search for a user
                  </p>
                  <Input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Enter a name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label 
                    className="form-label"
                    for="chart">
                    Select charts
                  </Label>
                  <p className="form-notification">
                    Select one or more charts
                  </p>
                  <Input
                    className="form-input"
                    type="select"
                    name="chart"
                    id="chart"
                    multiple>
                    <option>Line chart</option>
                    <option>Multi line chart</option>
                    <option>Bar chart</option>
                    <option>Stacked bar chart</option>
                    <option>Grouped bar chart</option>
                    <option>Pie chart</option>
                    <option>Doughnut chart</option>
                  </Input>
                </FormGroup>
                <Row>
                  <Col md="12">
                    <p className="form-label">Is the chart active?</p>
                    <p className="form-notification">Is the chart active?</p>
                  </Col>
                  <Col md="6">
                    <Button color="primary" size="lg" block>Yes</Button>
                  </Col>
                  <Col md="6">
                    <Button color="secondary" size="lg" block>No</Button>                    
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md="2" />
          </Row>
        </Container>
      </div>
    )
  }
}

export default UserForm;
