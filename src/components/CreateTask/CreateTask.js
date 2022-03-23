import "./CreateTask.css";
import React from "react";
import Button from "../../common/components/Button";
import TextField from "../../common/components/TextField";
import { connect } from "react-redux";
import { addTaskInToDo } from "../../redux/actions";
import { TASK_STATUS } from "../../common/constants/task/status";
import { TASK_INITIAL_STATE } from "../../common/constants/task/state";

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = TASK_INITIAL_STATE;
    this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
    this.handleCreateTask = this.handleCreateTask.bind(this);
  }

  handleTaskInputChange(event) {
    this.setState({ task: event.target.value });
  }

  handleCreateTask(event) {
    event.preventDefault();
    if (this.state.task) {
      this.props.addTaskInToDo(this.state.task);
      this.setState(TASK_INITIAL_STATE);
    }
  }

  render() {
    return (
      <div className="CreateTaskContainer">
        <TextField
          className="CreateTaskInputBar"
          placeholder="Buy Groceries"
          onChange={this.handleTaskInputChange}
          value={this.state.task}
        />
        <Button onClick={this.handleCreateTask}>Create Task</Button>
      </div>
    );
  }
}

export default connect(null, { addTaskInToDo })(CreateTask);
