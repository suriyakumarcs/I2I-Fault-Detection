import React, {Component} from "react";
import {Breadcrumb, BreadcrumbItem, Col, Row} from "reactstrap";
import Timeline from "../Timeline/DashboardForm";
import DashboardForm from "./DashboardForm";
import "./Form";

class Form extends Component {
  render() {
    return (
      <div className="ui-form">
        <Row>
          <Col md="8">
            <Col md="12">
              <Breadcrumb>
                <BreadcrumbItem><a href="#/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Form</BreadcrumbItem>
                <BreadcrumbItem><a href="#/user">User</a></BreadcrumbItem>
              </Breadcrumb>
            </Col>
            <Col md="12">
              <DashboardForm />
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

export default Form;
