import "./App.css";
import React from "react";
import CreateTask from "./components/CreateTask";
import TasksContainer from "./components/TasksContainer";

// [
//   {
//     task: 'Buy milk',
//     state: 'TO_DO'
//   },
//   {
//     task: 'Exercise',
//     state: 'DONE'
//   },
//   {
//     task: 'Read AH',
//     state: 'IN_PROGRESS'
//   }
// ]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">TASK MANAGER</div>
        <CreateTask />
        <div className="AllTasksContainer">
          <TasksContainer title="TODO" />
          <TasksContainer title="IN PROGRESS" />
          <TasksContainer title="DONE" />
        </div>
      </div>
    );
  }
}

export default App;
