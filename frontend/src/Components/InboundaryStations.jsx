// src/components/InboundaryStations.jsx

import React from 'react';
import './App.css'; // Import the same CSS for consistent styling

function InboundaryStations({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>SFO</th>
          <th>Station Name</th>
          <th>National Location Code (NLC)</th>
          <th>Three Letter Code (TLC)</th>
          <th>Postcode</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.SFO}</td>
            <td>{item.StationName}</td>
            <td>{item.NationalLocationCode}</td>
            <td>{item.ThreeLetterCode}</td>
            <td>{item.Postcode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InboundaryStations;
