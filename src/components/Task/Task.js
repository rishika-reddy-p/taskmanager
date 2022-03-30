import "./task.css";
import React from "react";
import CancelIcon from "./assets/crossIcon.svg";
import { connect } from "react-redux";
import { deleteTask, editTask } from "../../redux/actions";
import Icon from '../../common/components/Icon';
class Task extends React.Component {
  handleDragStart = (e) => {
    e.dataTransfer.setData("id", this.props.id);
  };
  handleTaskEdit = (e) => {
    // add validations - use validator function
    this.props.editTask(this.props.id, e.currentTarget.textContent);
  };
  handleDeleteTask = () => {
    this.props.deleteTask(this.props.id);
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
          contentEditable
          onBlur={this.handleTaskEdit}
          suppressContentEditableWarning
        >
          {" "}
          {this.props.name}
        </div>
        <Icon
          src={CancelIcon}
          alt="delete icon"
          onClick={this.handleDeleteTask}
        />
        {/* <Icon
          src={EditIcon}
          alt="edit icon"
          onClick={this.handleTaskEdit}
        /> */}
      </div>
    );
  }
}

export default connect(null, { deleteTask, editTask })(Task);
