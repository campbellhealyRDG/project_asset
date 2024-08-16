// src/components/LocationData.jsx

import React from 'react';
import './App.css'; // Import the same CSS for consistent styling

function LocationData({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>Station Name</th>
          <th>National Location Code (NLC)</th>
          <th>Three Letter Code (TLC)</th>
          <th>Column 1</th>
          <th>OS: Easting</th>
          <th>OS: Northing</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.StationName}</td>
            <td>{item.LocationCode}</td>
            <td>{item.ThreeLetterCode}</td>
            <td>{item.Column1}</td>
            <td>{item.OSEasting}</td>
            <td>{item.OSNorthing}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LocationData;
