import React from "react";

import "./styles/index.css";

interface BasePaginationProps {
  currentPage: number;
  disabledNext: boolean;
  onPageChange: (page: number) => void;
}

const BasePagination: React.FC<BasePaginationProps> = ({
  currentPage,
  disabledNext = false,
  onPageChange,
}) => {
  const goPrev = () => {
    onPageChange(currentPage - 1);
  };

  const goNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="w-full flex flex-column" style={{ gap: 8 }}>
      <div className="flex align-center">
        <button onClick={goPrev} disabled={currentPage - 1 === 0}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <span className="px-10">
          Page <b>{currentPage}</b>
        </span>

        <button onClick={goNext} disabled={disabledNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BasePagination;
