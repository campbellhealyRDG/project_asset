// src/components/DataTable.jsx

import React from 'react';
import './App.css'; // Import the same CSS for consistent styling

function DataTable({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>TOC</th>
          <th>Location Description</th>
          <th>Location Code</th>
          <th>TOC/Third Party Code</th>
          <th>Retail Channel</th>
          <th>WhiteLabel</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.TOC}</td>
            <td>{item.LocationDescription}</td>
            <td>{item.LocationCode}</td>
            <td>{item.TocCode}</td>
            <td>{item.RetailChannel}</td>
            <td>{item.WhiteLabel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
