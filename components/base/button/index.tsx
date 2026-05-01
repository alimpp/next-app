import "./styles/index.css";
import React, {
  ButtonHTMLAttributes,
  ReactNode,
  MouseEventHandler,
} from "react";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  loading = false,
  loadingText = "Loading...",
  disabled = false,
  className = "",
  ...props
}) => {
  let stateStyles = "";
  if (loading) {
    stateStyles = "loading-style";
  }
  if (disabled) {
    stateStyles = "disabled-style";
  }

  return (
    <button
      className={`base-button ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex align-center justify-center">{loadingText}</span>
      ) : (
        children
      )}
    </button>
  );
};

export default BaseButton;
