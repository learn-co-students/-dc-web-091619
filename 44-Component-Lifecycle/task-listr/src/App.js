import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

// const sampleTasks = [
//   {id:1, text: "wake up"},
//   {id:2, text: "eat lunch"},
//   {id:3, text: "go to sleep"}
// ]

// state = {name: {}}
// state = {name: {}}

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      taskList: []
    }
    console.warn("App constructor")
  }

  onAddNewTask = (event) => {
    event.preventDefault()
    //when submit the form
    //POST fetch
    //update state
    fetch(`http://localhost:3000/tasks`, {
      method: "POST",
      headers: {"Content-Type":"application/json", "Accept": "application/json"},
      body: JSON.stringify({
        text: this.state.formText
      })
    }).then(res => res.json())
    .then(newTask => {
      //taskList should be the exactly what is currently is but puoshed the new task in
      //this.state.taskList.push(newTask)  BAD!!!!
      // let copy = [...this.state.taskList]
      // copy.push(newTask)
      // this.setState({taskList: copy})
      this.setState({taskList: [...this.state.taskList, newTask]})
      //this.setState((prevState) => {return {taskList: [ ...prevState.taskList, newTask ] }})
    })
  }

  componentDidMount(){
    console.warn("App componentDidMount")
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(tasksArray => {
      this.setState({taskList: tasksArray})
    })
  }

  componentDidUpdate(){
    console.warn("App componentDidUpdate")
  }

  onTypingChange = (event) => {
    this.setState({formText : event.target.value})
  }

  //When x button is clicked, I make DELETE, and update state how??
  //state changing callback in the same class as the state
  removeTasks = (id) => {
    console.log("deleting tasks", id)
    fetch(`http://localhost:3000/tasks/${id}`,{
      method: "DELETE"
    }).then(res => res.json())
    .then(deletedTask => {
      this.setState({taskList: this.state.taskList.filter((t)=>t.id!==id)})
    })
  }

  render() {
    console.warn("App render")
    return (
      <div className="App">
        <Form onChange={this.onTypingChange} onSubmit={this.onAddNewTask}/>
        <TaskList tasks={this.state.taskList} removeTasks={this.removeTasks}/>
      </div>
    );
  }
}

export default App;
