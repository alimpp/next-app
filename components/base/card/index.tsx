import "./styles/index.css";
import React, { ReactNode } from "react";

interface BaseCardProps {
  children: ReactNode;
}

const BaseCard: React.FC<BaseCardProps> = ({ children }) => {
  return <div className="w-full base-card">{children}</div>;
};

export default BaseCard;
