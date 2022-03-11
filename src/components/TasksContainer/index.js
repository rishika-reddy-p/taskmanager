import "./TasksContainer.css";
import React from "react";
import { connect } from "react-redux";

class TasksContainer extends React.Component {
  render() {
    return (
      <div className="Container">
        <h3>{this.props.title}</h3>
        {this.props.tasks && this.props.tasks.length
          && this.props.tasks.map((todo, index) => {
              return <div>{todo.content}</div>;
            })
          }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { byIds, allIds } = state.tasks || {};
  const tasks =
    allIds && allIds.length
      ? allIds.map((id) => (byIds ? { ...byIds[id], id } : null))
      : null;
  return { tasks };
};

export default connect(mapStateToProps)(TasksContainer);
