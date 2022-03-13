import "./CreateTask.css";
import React from "react";
import Button from "../../common/components/Button";
import TextField from "../../common/components/TextField";
import { connect } from "react-redux";
import { addTaskInToDo } from "../../redux/actions";
import { TASK_STATUS } from "../../common/constants";

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
    this.handleCreateTask = this.handleCreateTask.bind(this);
  }

  handleTaskInputChange(event) {
    this.setState({ task: event.target.value });
  }

  handleCreateTask(event) {
    if (this.state.task) {
        this.props.addTaskInToDo({
          name: this.state.task,
          status: TASK_STATUS.TODO
        });
    this.setState({ task: "" });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="CreateTaskContainer">
        <TextField
          className="CreateTaskInputBar"
          placeholder="Buy Groceries"
          onChange={this.handleTaskInputChange}
          value={this.state.task}
        ></TextField>
        <Button onClick={this.handleCreateTask}>Create Task</Button>
      </div>
    );
  }
}

export default connect(
    null,
    { addTaskInToDo }
  )(CreateTask);
