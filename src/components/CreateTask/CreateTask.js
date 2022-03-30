import "./CreateTask.css";
import React from "react";
import Button from "../../common/components/Button";
import TextField from "../../common/components/TextField";
import { connect } from "react-redux";
import { addTask } from "../../redux/actions";
import {
  TASK_INITIAL_STATE,
  TASK_INPUT_LIMIT,
} from "./constants/createTask.general";
import { isEmpty as _isEmpty } from "lodash";
import { hasSpecialCharacters } from "../../common/utils/hasSpecialCharacters";
import {
  SPECIAL_CHARACTERS_NOT_ALLOWED,
  TASK_INPUT_LIMIT_EXCEEDED,
  TASK_INPUT_REQUIRED,
} from "./constants/errorMessages";
import { generateUUID } from "../../common/utils/generateUUID";
import { TASK_STATUS } from "./constants/createTask.general";
import { SHOULD_TASK_INPUT_DEBOUNCE } from "./constants/featureFlags";
class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = TASK_INITIAL_STATE;
  }
  handleTaskInputChange = (event) => {
    const tempTask = event?.target?.value;
    if (hasSpecialCharacters(tempTask)) {
      this.setState({ err: SPECIAL_CHARACTERS_NOT_ALLOWED });
    } else {
      this.setState({ task: tempTask, err: "" });
    }
  };

  handleCreateTask = (event) => {
    event.preventDefault();
    const taskNameTrimmed = this.state.task.trim();
    if (_isEmpty(taskNameTrimmed)) {
      this.setState({ err: TASK_INPUT_REQUIRED });
      return;
    }
    const newTaskId = generateUUID();
    this.props.addTask(newTaskId, taskNameTrimmed, TASK_STATUS.TODO);
    this.setState(TASK_INITIAL_STATE);
  };

  handleLengthCheck = () => {
    if (this.state.task.length === TASK_INPUT_LIMIT) {
      this.setState({ err: TASK_INPUT_LIMIT_EXCEEDED });
    }
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
            maxLength={TASK_INPUT_LIMIT}
            isDebounceFeatureFlagOn={SHOULD_TASK_INPUT_DEBOUNCE}
            onKeyPress={this.handleLengthCheck}
          />
          {this.state.err}
        </div>
        <Button onClick={this.handleCreateTask}>Create Task</Button>
      </div>
    );
  }
}

export default connect(null, { addTask })(CreateTask);
