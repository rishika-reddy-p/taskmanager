import "./textField.css";
import React from "react";
import { debounce } from "lodash";
import { DEFAULT_WAIT_TIME_BEFORE_DEBOUNCE } from "./constants/textField.general";

class TextField extends React.Component {
  componentDidMount() {
    if (this.props.onChange) {
      const wait = this.props.wait ?? DEFAULT_WAIT_TIME_BEFORE_DEBOUNCE;
      this.debouncedOnChange = debounce(this.props.onChange, wait);
    }
  }
  handleChange = (e) => {
    if (this.props.onChange) {
      const shouldDebounce = this.props.isDebounceFeatureFlagOn || this.props.wait;
      if (shouldDebounce) {
        this.debouncedOnChange(e);
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
