import React from "react";
import "./table.css";

const Table = ({ columns, data, caption }) => {
  return (
    <div className="table-container">
      <table className="table">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
