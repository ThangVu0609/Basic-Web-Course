import React from "react";
import { connect } from "react-redux";
import { editTodo } from "../redux/actions";

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEditTodo = () => {
    debugger;
  }

  render() {
    return (
      <div>  
        <button className="delete-todo" onClick={this.handleEditTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { editTodo }
)(EditTodo);

