import "./Task.css";
import React from "react";
import CancelIcon from "./assets/crossIcon.svg";
import { connect } from "react-redux";
import { deleteTask, editTask } from "../../redux/actions";
class Task extends React.Component {
  handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };
  handleTaskEdit = (e) => {
    this.props.editTask(this.props.id, e.currentTarget.textContent)
  };
  render() {
    return (
      <div
        className={"Task"}
        style={{ backgroundColor: "aqua" }}
        key={this.props.id}
        draggable
        onDragStart={(e) => {
          this.handleDragStart(e, this.props.id);
        }}
      >
        <div contentEditable onBlur={this.handleTaskEdit} suppressContentEditableWarning>
          {" "}
          {this.props.name}
        </div>
        <img
          src={CancelIcon}
          alt="delete icon"
          className={"DeleteIcon"}
          onClick={() => {
            this.props.deleteTask(this.props.id);
          }}
        />
      </div>
    );
  }
}

export default connect(null, { deleteTask, editTask })(Task);
