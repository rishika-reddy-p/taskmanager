import "./Button.css";
import React from "react";
import cx from "classnames";
import { BUTTON_VARIANTS } from "./constants";
class Button extends React.Component {
  getClassName = (variant) => {
    switch (variant) {
      case BUTTON_VARIANTS.PRIMARY:
        return "PrimaryButton";
      case BUTTON_VARIANTS.SECONDARY:
        return "SecondaryButton";
      default:
        return "PrimaryButton";
    }
  };
  render() {
    return (
      <button
        className={cx("Button", this.getClassName(this.props.variant))}
        {...this.props}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
