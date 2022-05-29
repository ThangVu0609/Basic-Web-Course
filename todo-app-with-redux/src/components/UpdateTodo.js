import React from "react";
import { connect } from "react-redux";
import { updateTodo } from "../redux/actions";

class UpdateTodo extends React.Component {
  constructor(props) {
    super(props);
  }


  handleUpdateTodo = () => {
    console.log(this.props);
    this.props.updateTodo(this.props.todoId);
  };

  render() {
    return (
      <div>
        <button className="update-todo" onClick={this.handleUpdateTodo}>
          update
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { updateTodo }
)(UpdateTodo);