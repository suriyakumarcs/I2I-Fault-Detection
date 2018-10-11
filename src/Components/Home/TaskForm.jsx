import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { reduxForm } from 'redux-form';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";

import "./Home";
import { saveChartType } from '../../Action/ChartTypeAction';
import TextField from '../FormComponents/TextField';
import ChartTypeGrid from './ChartTypeGrid';
import { required } from '../../utils/Validation';

const mapDispatchToProps = dispatch => ({
  saveChartType: chartTypeObj => dispatch(saveChartType(chartTypeObj))
});

class TaskForm extends Component {
  constructor() {
    super();
    this.state = {
      chartTypeList: {
        count: 0,
        values: []
      }
    };
  }
  handleFormSubmit = (value) => {
    let { chartTypeList } = this.state;
    this.props.saveChartType(value);
    chartTypeList.count += 1;
    chartTypeList.values.push(value);
    this.setState({chartTypeList : chartTypeList});
  };

  changeActive = chartType => {
    let { chartTypeList } = this.state;
    _.map(chartTypeList.values, value => {
      if (value.ChartType === chartType) {
        value.isChartActive = !value.isChartActive;
        this.setState({ chartTypeList: chartTypeList });
      }
    });
  };
  render() {
    const { handleSubmit } = this.props;
    const { chartTypeList } = this.state;
    return (
      <div className="ui-task-form">
        <Container>
          <Row>
            <Col md="2" />
            <Col md="5">
              <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                <TextField
                  type="text"
                  name="ipaddress"
                  isLabelRequired
                  htmlFor="IP Address"
                  labelName="IP Address"
                  className="form-control input-box"
                  validate={[required]}
                  placeholder="Enter IP Address"
                />
                <TextField
                  type="text"
                  name="macaddress"
                  isLabelRequired
                  htmlFor="Mac Address"
                  labelName="Mac Address"
                  className="form-control input-box"
                  validate={[required]}
                  placeholder="Enter Mac Address"
                />
                <TextField
                  type="text"
                  name="ram"
                  isLabelRequired
                  htmlFor="RAM"
                  labelName="RAM"
                  className="form-control input-box"
                  validate={[required]}
                  placeholder="Enter RAM"
                />
                <TextField
                  type="text"
                  name="osversion"
                  isLabelRequired
                  htmlFor="OS Version"
                  labelName="OS Version"
                  className="form-control input-box"
                  validate={[required]}
                  placeholder="Enter OS Version"
                />               
                
                <Col className="p-0" md="6">
                  <Button color="primary" size="md" block>Generate FP</Button>
                </Col>
                {/* <Row>
                  <Col md="12">
                    <p className="form-label">Is the chart active?</p>
                    <
                  </Col>
                  <Col md="6">
                    <Button color="secondary" size="lg" block>No</Button>                    
                  </Col>
                </Row> */}
              </form>
            </Col>
            <Col md="2" />
          </Row>
        </Container>
        <ChartTypeGrid
          chartList={chartTypeList}
          changeActive={this.changeActive}
        />
      </div>
    )
  }
}

TaskForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  saveChartType: PropTypes.func.isRequired
};

const ChartType = connect(null, mapDispatchToProps)(TaskForm);

export default reduxForm({
  form: 'Add Chart'
})(ChartType);
