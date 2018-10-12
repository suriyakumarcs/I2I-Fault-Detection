import React, {Component} from "react";
import { Link } from 'react-router-dom';
import TaskForm from "./TaskForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Home";

class Home extends Component {
  render() {
    return (
      <section className="form-container">
        <header>
            <Link to="/">
              <FontAwesomeIcon icon="coffee" />Back
            </Link>
          <h3>Add Device</h3>
        </header>
        <TaskForm />
      </section>
    );
  }
}

export default Home;
