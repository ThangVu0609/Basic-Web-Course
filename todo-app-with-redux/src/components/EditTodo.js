import React from "react";
import { connect } from "react-redux";
import { editTodo } from "../redux/actions";

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
  }


  handleEditTodo = () => {
    console.log(this.props);
    this.props.editTodo(this.props.todoId);
  };

  render() {
    return (
      <div>
        <button className="edit-todo" onClick={this.handleEditTodo}>
          Edit
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { editTodo }
)(EditTodo);
