import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

class ChartTypeGrid extends Component {
  render() {
    const { chartList } = this.props;
    return (
      <div className="mt-4 container-fluid grid-section">
        <div className="row body">
          {
            chartList.values.length > 0 &&
            <Table bordered striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Chart type</th>
                  <th>isActive</th>
                </tr>
              </thead>
              <tbody>
                {
                  chartList.values.map((value, key) => (
                    <tr key={key}>
                      <th scope="row">{key + 1}</th>
                      <td>{value.ChartType}</td>
                      <td>
                        <input type="checkbox" checked={value.isChartActive}
                        onChange={() => { this.props.changeActive(value.ChartType) }}
                        />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          }
        </div>
      </div>
    )
  }
}

ChartTypeGrid.propTypes = {
  chartList: PropTypes.object.isRequired,
  changeActive: PropTypes.func.isRequired
};

export default ChartTypeGrid;
