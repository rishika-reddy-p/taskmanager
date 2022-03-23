import "./TasksContainer.css";
import React from "react";
import { connect } from "react-redux";
import Task from "../Task";
import {moveTask} from "../../redux/actions";
import {ThemeContext} from "../../ThemeContext";

class TasksContainer extends React.Component {
  handleDragOver(event) {
    event.preventDefault();
  }
  handleDrop(event, status) {
    const droppedTaskId = event.dataTransfer.getData("id");
    let tempTasks = this.props.tasks.map((item) => {
      if(item.id == droppedTaskId) {
        const tempItem = {id: item.id, task: {name: item.task.name, status: status}}
        return tempItem
      } else {
        return item
      }
    });
    this.props.moveTask(tempTasks)

  }
  render() {
    let theme = this.context;
    return (
      <div
        className="Container"
        style={{backgroundColor: theme.background}}
        onDragOver={(e) => {
          this.handleDragOver(e);
        }}
        onDrop={(e) => {this.handleDrop(e, this.props.title)}}
      >
        <h3>{this.props.title}</h3>
        {this.props.tasks && this.props.tasks.length > 0 &&
          this.props.tasks.map((todo) => {
            return (todo.task.status && todo.task.status === this.props.title) ? (
              <Task name={todo.task.name} id={todo.id} />
            ) : null;
          })}
      </div>
    );
  }
}

TasksContainer.contextType = ThemeContext;

const mapStateToProps = (state) => {
  const { byIds } = state.tasks || {};
  return { tasks: byIds };
};

export default connect(mapStateToProps, {moveTask})(TasksContainer);
