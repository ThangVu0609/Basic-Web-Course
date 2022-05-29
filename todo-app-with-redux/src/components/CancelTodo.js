import React from "react";
import { connect } from "react-redux";
import { cancelTodo } from "../redux/actions";

class CancelTodo extends React.Component {
  constructor(props) {
    super(props);
  }


  handleCancelTodo = () => {
    console.log(this.props);
    this.props.cancelTodo(this.props.todoId);
  };

  render() {
    return (
      <div>
        <button className="cancel-todo" onClick={this.handleCancelTodo}>
          Cancel
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { cancelTodo }
)(CancelTodo);
