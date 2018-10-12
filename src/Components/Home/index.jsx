import React, {Component} from "react";
import TaskForm from "./TaskForm";
import "./Home";

class Home extends Component {
  render() {
    return (
      <section className="form-container">
        <header>
          <h3>Add Device</h3>
        </header>
        <TaskForm />
      </section>
    );
  }
}

export default Home;
