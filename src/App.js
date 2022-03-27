import "./App.css";
import React from "react";
import CreateTask from "./components/CreateTask";
import TasksContainer from "./components/TasksContainer";
import { ThemeContext, themes } from "./ThemeContext";
import Button from "../src/common/components/Button";
import { BUTTON_VARIANTS } from "./common/components/Button/constants";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className="App">
          <div className="App-header">
            TASK MANAGER
            <Button onClick={this.toggleTheme} variant={BUTTON_VARIANTS.SECONDARY}>Change theme</Button>
          </div>
          <CreateTask />
          <div className="AllTasksContainer">
            <TasksContainer title="TODO" />
            <TasksContainer title="IN PROGRESS" />
            <TasksContainer title="DONE" />
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
