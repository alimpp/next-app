import "./styles/index.css";
import React, { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert: React.FC<AlertProps> = ({ children }) => {
  return <div className="w-full alert">{children}</div>;
};

export default Alert;
