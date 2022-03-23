import "./Button.css";
import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button className='Button' {...this.props}>{this.props.children}</button>
    );
  }
}

export default Button;
