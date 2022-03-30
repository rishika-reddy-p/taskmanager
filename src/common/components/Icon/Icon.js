import "./icon.css";
import React from "react";
import cx from "classnames";

const Icon = (props) => {
  const { className, alt, ...rest } = props;
  return (
    <img className={cx("Icon", className)} alt={alt ?? "icon"} {...rest} />
  );
};

export default Icon;
