import React from "react";
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee, faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import "./Timeline";

class UserFormTimeline extends React.Component {
  render() {
    return (
      <div className="ui-timeline">
        <ul className="timeline">
          <li>
            <p className="empty-timeline" />
          </li>
          <li>
            <i className="timeline-icon">
              <FontAwesomeIcon icon={faCoffee} />
            </i>
            <div className="timeline-content minimize">
              <h4 className="title">Title</h4>
              <p className="content">
                Sed ut perspiciatis unde omnis iste natus error sitvoluptatem.
              </p>
            </div>
          </li>
          <li>
            <i className="timeline-icon">
              <FontAwesomeIcon icon={faCoffee} />
            </i>
            <div className="timeline-content user-content">
              <h4 className="title">Title</h4>
              <p className="content">
                Sed ut perspiciatis unde omnis iste natus error sitvoluptatem.
              </p>
            </div>
          </li>
          <li>
            <i className="timeline-icon">
              <FontAwesomeIcon icon={faCoffee} />
            </i>
            <div className="timeline-content minimize">
              <h4 className="title">Title</h4>
              <p className="content">
                Sed ut perspiciatis unde omnis iste natus error sitvoluptatem.
              </p>
            </div>
          </li>
          <li>
            <Button size="lg" color="success" className="submit-button">
              Get Charts
              <FontAwesomeIcon icon={faCheckCircle} />
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserFormTimeline;
