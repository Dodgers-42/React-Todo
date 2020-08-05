// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  // for sorting the list based on whether an item has been done or not
  // const sortedList = props.todo.sort((a, b) => a.done - b.done);
  return (
    <div className="todo-list">
      {props.taskArr.map(todo => (
        <Todo key={todo.id} todo={todo} toggle={props.toggle} />
      ))}
      <button className="clear-btn" onClick={props.removeDone}>
        Clear Done
      </button>
    </div>
  );
};

export default TodoList;
