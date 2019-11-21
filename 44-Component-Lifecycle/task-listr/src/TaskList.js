import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  return(
    props.tasks !== null ? <div className="tasks-container">{props.tasks.map(task => <Task
      key={task.id}
      removeTask={props.removeTasks}
      task={task}/>)}</div> : null
  )
}

export default TaskList
