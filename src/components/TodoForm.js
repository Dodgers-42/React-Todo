import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({ item: e.target.value });
  };

  // class property to submit form
  submitItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({ item: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          name="todo"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Enter</button>
      </form>
    );
  }
}

export default TodoForm;