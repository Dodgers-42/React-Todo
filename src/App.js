import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      taskArr: [{
        task: '',
        id: '',
        Done: false,
      }],
    };
  }
  toggle = id => {
    this.setState({
      taskArr: this.state.taskArr.map(item => {
        if(id === item.id) {
          console.log(item)
          return {
            ...item,
            done: !item.done
          };
        }
        return item;
      })
    })
  }
  removeDone = event => {
    event.preventDefault();
    this.setState({
      taskArr: this.state.taskArr.filter(item => item.Done === false)
    })
  }
  changeHandler = event => {
    const date = Date.now();
    this.setState({task: event.target.value,
                  id: date});
  }
  addItem = (item)  => {
    
    this.setState({
      taskArr: [
        ...this.state.taskArr,
        {
        task: item,
        id: Date.now(),
        done: false
        }]
    })
    
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList taskArr={this.state.taskArr} 
                  change={this.changeHandler} 
                  // submit={this.submitHandler} 
                  toggle={this.toggle}
                  removeDone={this.removeDone} />
      </div>
    );
  }
}
export default App;





  