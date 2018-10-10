import React, {Component} from "react";
import {Breadcrumb, BreadcrumbItem, Col, Row} from "reactstrap";
import Timeline from "../Timeline/TaskForm";
import TaskForm from "./TaskForm";
import "./Home";

class Home extends Component {
  render() {
    return (
      <div className="ui-home">
        <Row>
          <Col md="8">
            <Col md="12">
              <Breadcrumb>
                <BreadcrumbItem active>Home</BreadcrumbItem>
                <BreadcrumbItem><a href="#/form">Form</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#/user">User</a></BreadcrumbItem>
              </Breadcrumb>
            </Col>
            <Col md="12">
              <TaskForm />
            </Col>
          </Col>
          <Col md="4" className="padding-right-0">
            <Timeline />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
