import React, {Component} from "react";
import {Breadcrumb, BreadcrumbItem, Col, Row} from "reactstrap";
import Timeline from "../Timeline/TaskForm";
import TaskForm from "./TaskForm";
import Navigation from '../Navigation/Navigation';
import "./Home";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 'Add FP'
    };
    this.tabHeaderList = [
      'Add FP',
      'Update FP',
      'View devices'
    ];
  }
  handleSelect = (selectedTab = 'Add FP') => {
    this.setState({ activeTab: selectedTab });
    this.props.history.push('/form');
  };
  render() {
    const { activeTab } = this.state;
    return (
      <div className="ui-home container-fluid">
        <Row>
          <Col md="12 p-0">
            <Col md="12 p-0 mb-4 custom-navigation">
              <Navigation handleSelect={this.handleSelect}
                activeSection={activeTab}
                tabHeaderList={this.tabHeaderList}
              />
            </Col>
            <Col md="12">
              <TaskForm />
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
