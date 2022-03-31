import "./task.css";
import React from "react";
import CancelIcon from "./assets/crossIcon.svg";
import { connect } from "react-redux";
import { deleteTask, editTask } from "../../redux/actions";
import Icon from "../../common/components/Icon";
import EditIcon from "./assets/editIcon.svg";
import {INITIAL_STATE} from "./constants/task.general";
import { taskNameValidator } from "../../common/validators/taskNameValidator";
class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }
  handleDragStart = (e) => {
    e.dataTransfer.setData("id", this.props.id);
  };
  handleTaskEdit = (e) => {
    this.setState(INITIAL_STATE);
    const tempTask = e.currentTarget.textContent
    const taskValidator = taskNameValidator(tempTask)    
    if (taskValidator.isValid) {
      this.props.editTask(this.props.id, tempTask);
    } else {
      this.setState({err: taskValidator.err})
    }
  };
  handleDeleteTask = () => {
    this.props.deleteTask(this.props.id);
  };
  toggleEditMode = () => {
    this.setState({ isEditMode: !this.state.isEditMode });
  };
  renderError = () => {
    if (this.state.err) {
      return <div>{this.state.err}</div>
    }
  }

  render() {
    return (
      <div
        className={"Task"}
        key={this.props.id}
        draggable
        onDragStart={this.handleDragStart}
      >
        <div
          contentEditable={this.state.isEditMode}
          onBlur={this.handleTaskEdit}
          suppressContentEditableWarning
        >
          {this.props.name}
        </div>
        {this.renderError()}
        <div className={"IconContainer"}>
          <Icon src={EditIcon} alt="edit icon" onClick={this.toggleEditMode} />
          <Icon
            src={CancelIcon}
            alt="delete icon"
            onClick={this.handleDeleteTask}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteTask, editTask })(Task);
