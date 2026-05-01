import "./styles/index.css";
import React, { InputHTMLAttributes } from "react";

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  placeholder?: string;
}

const BaseInput: React.FC<BaseInputProps> = ({
  label,
  error,
  placeholder,
  ...props
}) => {
  const inputId = React.useId();

  return (
    <div className="flex flex-column">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        id={inputId}
        className={`
          base-input
          ${error ? "error-style" : ""}
          ${props.className || ""}
        `}
        {...props}
      />
      {error && <p className="text-error">{error}</p>}
    </div>
  );
};

export default BaseInput;
