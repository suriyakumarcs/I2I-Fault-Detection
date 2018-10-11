import React from 'react';
import PropTypes from 'prop-types';

import "./Navigation.scss";

class Navigation extends React.Component {
  componentDidMount() {
    this.elemHeight = this.elemHeight.clientHeight;
  }

  handleSelect = selectedTab => {
    this.props.handleSelect(selectedTab);
  }

  render() {
    const { tabHeaderList, activeSection } = this.props;
    return (
      <div
        className="custom-nav-tab"
        id="profile-nav-tab"
        ref={elem => { this.elemHeight = elem; }}
      >
        <ul className="nav nav-tabs tab-ul" id="myTab" role="tablist">
          {tabHeaderList.map(header => (
            <li
              key={header}
              onClick={() => this.handleSelect(header)}
              className="nav-item pt-1 c-pointer"
              role="presentation"
            >
              <span
                className={`nav-link tab-content c-pointer ${activeSection === header
                  ? 'active' : ''}`}
                id={`${header}'-tab'`}
                data-toggle="tab"
                role="tab"
                aria-controls={header}
                aria-selected="true"
              > {header}
              </span>
            </li>))}
        </ul>
      </div>
    );
  }
}


Navigation.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  tabHeaderList: PropTypes.array.isRequired,
  activeSection: PropTypes.string.isRequired
};
export default Navigation;
