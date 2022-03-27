import "./TextField.css";
import React from "react";
import { debounce } from "lodash";

class TextField extends React.Component {
  componentDidMount() {
    if (this.props.onChange && this.props.wait) {
      this.debouncedOnChange = debounce(this.props.onChange, this.props.wait);
    }
  }
  handleChange = (e) => {
    if (this.props.onChange) {
      if (this.props.wait) {
        this.debouncedOnChange();
      } else {
        this.props.onChange(e);
      }
    }
  };
  render() {
    const { onChange, wait, ...rest } = { ...this.props };
    return (
      <input className="TextField" onChange={this.handleChange} {...rest}>
        {this.props.children}
      </input>
    );
  }
}

export default TextField;
