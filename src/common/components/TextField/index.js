import "./TextField.css";
import React from "react";

class TextField extends React.Component {
  render() {
    return (
      <input className='TextField' {...this.props}>{this.props.children}</input>
    );
  }
}

export default TextField;
