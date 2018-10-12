import React from 'react';
import { Link } from "react-router-dom";

import './Devices.scss';
import '../../common.scss';

class Devices extends React.Component {
    constructor(props) {
        super();
        this.header = ['Id', 'Name', 'Model no.', 'Mac address', 'Action'];
        this.values = [{id: 'asdasd', macaddress: 'asdasdas4d6a4sd5'},
            {id: 'asdasd', name: 'sa', modelNo: 'as', macaddress: 'asdasdas4d6a4sd5', },
            {id: 'asdasd', macaddress: 'asdasdas4d6a4sd5'},
            {id: 'asdasd', macaddress: 'asdasdas4d6a4sd5'},
            {id: 'asdasd', macaddress: 'asdasdas4d6a4sd5'},
            {id: 'asdasd', macaddress: 'asdasdas4d6a4sd5'}]
    }

    renderTable = () => {

    }
    render() {
        return (
            <section className="device-grid-section">
                <header className="row m-0">
                    <h3 className="col-6">Devices</h3>
                    <div className="add-device col-lg-2 offset-lg-4 col-md-3 offset-md-3 col-6">
                        <Link to="/add"><i className="fa fa-plus" /> <span>Add device</span></Link></div>
                </header>
                <section className="table table-section">
                    <table>
                        <thead>
                            <tr>
                                {this.header.map(header => <th> {header}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {this.values.map(value =>
                                (<tr>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.modelNo}</td>
                                    <td>{value.macaddress}</td>
                                    <td><i className="fa fa-edit" /></td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                </section>
            </section>
        );
    }
}

export default Devices;