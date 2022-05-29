import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/actions";

class DeleteTodo extends React.Component {
  constructor(props) {
    super(props);
 
  }


  handleDeleteTodo = () => {
    console.log(this.props);
    this.props.deleteTodo(this.props.todoId);
  };

  render() {
    return (
      <div>
        <button className="delete-todo" onClick={this.handleDeleteTodo}>
          Delete
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteTodo }
)(DeleteTodo);

