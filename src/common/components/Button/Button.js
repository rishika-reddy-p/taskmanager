import "./button.css";
import React from "react";
import cx from "classnames";
import { getClassName } from "./helpers/getClassName";

const Button = (props) => {
  return (
    <button
      className={cx("Button", getClassName(props.variant))}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
