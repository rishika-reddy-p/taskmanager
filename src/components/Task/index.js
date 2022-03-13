import "./Task.css";
import React from "react";

class Task extends React.Component {
    handleDragStart(e, id){
        e.dataTransfer.setData("id", id)
    }
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
        {this.props.name}
      </div>
    );
  }
}

export default Task;
