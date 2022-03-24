import "./CreateTask.css";
import React from "react";
import Button from "../../common/components/Button";
import TextField from "../../common/components/TextField";
import { connect } from "react-redux";
import { addTaskInToDo } from "../../redux/actions";
import { TASK_INITIAL_STATE } from "../../common/constants/task/state";
import _ from "lodash";
import { hasSpecialCharacters } from "../../common/utils/helpers/regex";
import { SPECIAL_CHARACTERS_NOT_ALLOWED } from "../../common/constants/messages/errorTexts";

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = TASK_INITIAL_STATE;
  }

  handleTaskInputChange = (event) => {
    const tempTask = event.target.value;
    if (hasSpecialCharacters(tempTask)) {
      this.setState({ ...this.state, err: SPECIAL_CHARACTERS_NOT_ALLOWED });
    } else {
      this.setState({ ...this.state, task: tempTask, err: "" });
    }
  };

  handleCreateTask = (event) => {
    event.preventDefault();
    const taskNameTrimmed = this.state.task.trim();
    if (_.isEmpty(taskNameTrimmed)) return;
    this.props.addTaskInToDo(taskNameTrimmed);
    this.setState(TASK_INITIAL_STATE);
  };

  render() {
    return (
      <div className="CreateTaskContainer">
        <div className="TaskBarContainer">
          <TextField
            className="CreateTaskInputBar"
            placeholder="Buy Groceries"
            onChange={this.handleTaskInputChange}
            value={this.state.task}
            maxLength={50}
          />
          {this.state.err}
        </div>
        <Button onClick={this.handleCreateTask}>Create Task</Button>
      </div>
    );
  }
}

export default connect(null, { addTaskInToDo })(CreateTask);
