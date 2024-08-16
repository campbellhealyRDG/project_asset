// src/components/VixPvals.jsx

import React from 'react';
import './App.css'; // Import the same CSS for consistent styling

function VixPvals({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>Station</th>
          <th>NLC</th>
          <th>CRS Code</th>
          <th>Host Name</th>
          <th>Platform Position</th>
          <th>Unnamed</th>
          <th>Operator</th>
          <th>Station 1</th>
          <th>Total PVals</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Station}</td>
            <td>{item.Nlc}</td>
            <td>{item.Crscode}</td>
            <td>{item.HostName}</td>
            <td>{item.PlatformPosition}</td>
            <td>{item.Unnamed}</td>
            <td>{item.Operator}</td>
            <td>{item.Station1}</td>
            <td>{item.TotalPvals}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default VixPvals;
