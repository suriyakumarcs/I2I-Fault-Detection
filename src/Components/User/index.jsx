import React, {Component} from "react";
import {Breadcrumb, BreadcrumbItem, Col, Row} from "reactstrap";
import Timeline from "../Timeline/UserForm";
import UserForm from "./UserForm";
import "./User";

class User extends Component {
  render() {
    return (
      <div className="ui-user">
        <Row>
          <Col md="8">
            <Col md="12">
              <Breadcrumb>
                <BreadcrumbItem><a href="#/">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#/form">Form</a></BreadcrumbItem>
                <BreadcrumbItem active>User</BreadcrumbItem>
              </Breadcrumb>
            </Col>
            <Col md="12">
              <UserForm />
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

export default User;
