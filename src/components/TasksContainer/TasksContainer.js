import "./tasksContainer.css";
import React from "react";
import { connect } from "react-redux";
import Task from "../Task";
import { moveTask } from "../../redux/actions";
import { ThemeContext } from "../../ThemeContext";
import { getTasksByStatus } from "./helpers/getTasksByStatus";
import { updateCurrentTaskStatus } from "./helpers/updateCurrentTaskStatus";

class TasksContainer extends React.Component {
  handleDragOver(event) {
    event.preventDefault();
  }
  handleDrop(event, status) {
    const droppedTaskId = event.dataTransfer.getData("id");
    const tempTasks = this.props.tasks.map(
      updateCurrentTaskStatus(droppedTaskId, status)
    );
    this.props.moveTask(tempTasks);
  }

  renderCurrentTask = (todo) => {
    return <Task name={todo.task.name} id={todo.id} />;
  };

  renderTasks = () => {
    const allTasks = this.props.tasks;
    const currentContainerStatus = this.props.title;
    if (allTasks && allTasks.length > 0) {
      const currentContainerTasks = allTasks.filter(
        getTasksByStatus(currentContainerStatus)
      );
      return currentContainerTasks.map(this.renderCurrentTask);
    }
  };

  render() {
    let theme = this.context;
    const handleDrop = (e) => {
      this.handleDrop(e, this.props.title);
    };
    return (
      <div
        className="Container"
        style={{ backgroundColor: theme.background }}
        onDragOver={this.handleDragOver}
        onDrop={handleDrop}
      >
        <h3>{this.props.title}</h3>
        {this.renderTasks()}
      </div>
    );
  }
}

TasksContainer.contextType = ThemeContext;

const mapStateToProps = (state) => {
  const { allTasks } = state.tasks || {};
  return { tasks: allTasks };
};

export default connect(mapStateToProps, { moveTask })(TasksContainer);
