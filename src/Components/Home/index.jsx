import React, {Component} from "react";
import TaskForm from "./TaskForm";
import "./Home";

class Home extends Component {
  render() {
    return (
      <div className="form-container">
          <TaskForm />
      </div>
    );
  }
}

export default Home;
