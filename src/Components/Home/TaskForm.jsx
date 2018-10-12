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
            <Col>
              <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                <div className="container-fluid"></div>
                <div className="row">
                  <div className="col-6">
                    <TextField
                      type="text"
                      name="name"
                      isLabelRequired
                      htmlFor="Device Name"
                      labelName="Device Name"
                      className="form-control input-box"
                      validate={[required]}
                      placeholder="Enter device name"
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      type="text"
                      name="modelnumber"
                      isLabelRequired
                      htmlFor="Model Number"
                      labelName="Model Number"
                      className="form-control input-box"
                      validate={[required]}
                      placeholder="Enter model number"
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      type="text"
                      name="version"
                      isLabelRequired
                      htmlFor="Android Version"
                      labelName="Android Version"
                      className="form-control input-box"
                      validate={[required]}
                      placeholder="Enter android version"
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      type="text"
                      name="patchlevel"
                      isLabelRequired
                      htmlFor="Security Patch Level"
                      labelName="Security Patch Level"
                      className="form-control input-box"
                      validate={[required]}
                      placeholder="Enter security patch level"
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      type="text"
                      name="miuiversion"
                      isLabelRequired
                      htmlFor="MIUI Version"
                      labelName="MIUI Version"
                      className="form-control input-box"
                      validate={[required]}
                      placeholder="Enter MIUI version"
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      type="text"
                      name="screenresolution"
                      isLabelRequired
                      htmlFor="Screen Resolution"
                      labelName="Screen Resolution"
                      className="form-control input-box"
                      validate={[required]}
                      placeholder="Enter screen resolution"
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      type="text"
                      name="basebandversion"
                      isLabelRequired
                      htmlFor="Baseband Version"
                      labelName="Baseband Version"
                      className="form-control input-box"
                      validate={[required]}
                      placeholder="Enter baseband version"
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      type="text"
                      name="kernalversion"
                      isLabelRequired
                      htmlFor="Kernel Version"
                      labelName="Kernel Version"
                      className="form-control input-box"
                      validate={[required]}
                      placeholder="Enter kernel version"
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      type="text"
                      name="internalstorage"
                      isLabelRequired
                      htmlFor="Internal Storage"
                      labelName="Internal Storage"
                      className="form-control input-box"
                      validate={[required]}
                      placeholder="Enter internal storage"
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      type="text"
                      name="macaddress"
                      isLabelRequired
                      htmlFor="Mac Address"
                      labelName="Mac Address"
                      className="form-control input-box"
                      validate={[required]}
                      placeholder="Enter mac address"
                    />
                  </div>
                  <div className="col-6">
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
                  </div>
                  <div className="col-6">
                    <TextField
                      type="text"
                      name="osversion"
                      isLabelRequired
                      htmlFor="OS Version"
                      labelName="OS Version"
                      className="form-control input-box"
                      validate={[required]}
                      placeholder="Enter OS version"
                    />
                  </div>      
                </div>
                <Col className="p-0 col-4">
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
