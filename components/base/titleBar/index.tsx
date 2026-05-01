import "./styles/index.css";
import React from "react";

interface BaseTitleBarProps {
  title: string;
  subTitle: string;
}

const BaseTitleBar: React.FC<BaseTitleBarProps> = ({
  title = "",
  subTitle = "",
  ...props
}) => {
  return (
    <div className="w-full flex flex-column">
      <span className="title-style">{title}</span>
      <span className="sub-title-style">{subTitle}</span>
    </div>
  );
};

export default BaseTitleBar;
