import React from "react";
import {connect} from "react-redux";
import {getAllFriends} from "../../Action/Friend";

const mapStateToProps = (state) => ({
  friends: state.friend.friends
});

const mapDispatchToProps = (dispath) => ({
  getAllFriends: () => {
    dispath(getAllFriends())
  }
})

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      friends: props.friends
    });
  }

  componentDidMount() {
    this.props.getAllFriends();
  }

  render() {
    return (
      <div>
        Friends Page
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
