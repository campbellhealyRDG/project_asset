// src/components/CubicGatesTable.jsx

import React from 'react';
import './App.css'; // Import the same CSS for consistent styling

function CubicGatesTable({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>TOC</th>
          <th>Station</th>
          <th>Cubic Name</th>
          <th>NLC</th>
          <th>Gated</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.TOC}</td>
            <td>{item.Station}</td>
            <td>{item.CubicName}</td>
            <td>{item.NLC}</td>
            <td>{item.Gated}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CubicGatesTable;
