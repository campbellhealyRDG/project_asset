// src/components/SnbGates.jsx

import React from 'react';
import './App.css'; // Import the same CSS for consistent styling

function SnbGates({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>Station Location</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.StationLocation}</td>
            <td>{item.Unnamed1}</td>
            <td>{item.Unnamed2}</td>
            <td>{item.Unnamed3}</td>
            <td>{item.Unnamed4}</td>
            <td>{item.Unnamed5}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SnbGates;
