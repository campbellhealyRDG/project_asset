// src/components/EveryNlc.jsx

import React from 'react';
import './App.css'; // Import the same CSS for consistent styling

function EveryNlc({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>NLC Code</th>
          <th>Location Name - LENNON</th>
          <th>Location Name - Fares Service</th>
          <th>Location Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.NLCCode}</td>
            <td>{item.LocationNameLennon}</td>
            <td>{item.LocationNameFaresService}</td>
            <td>{item.LocationType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EveryNlc;
