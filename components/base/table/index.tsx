import "./styles/index.css";
import React from "react";

type RowData = Record<string, any>;
type Headers = string[];

interface SimpleTableProps {
  headers: Headers;
  data: RowData[];
  className?: string;
}

const BaseTable: React.FC<SimpleTableProps> = ({
  headers,
  data,
  className = "",
}) => {
  const firstRowKeys = data[0] ? Object.keys(data[0]) : [];
  const columnKeys = headers.length > 0 ? firstRowKeys : [];

  return (
    <div className={`table-container ${className}`}>
      <table className="base-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col">
                {header}
              </th>
            ))}
            {!headers ||
              (headers.length === 0 &&
                columnKeys.map((key, index) => (
                  <th key={index} scope="col">
                    {key}
                  </th>
                )))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columnKeys.map((key, colIndex) => {
                return <td key={colIndex}>{String(row[key])}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BaseTable;
