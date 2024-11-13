// src/Components/DataTable.jsx

import React from 'react';

function SmartTable({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <table>
    <thead>
      <tr>
        <th>TOC</th>
        <th>Station</th>
        <th>NLC</th>
        <th>TLC</th>
        <th>Postcode</th>
        <th>Longtitude</th>
        <th>Latitude</th>
        <th>Cubic Gates</th>
        <th>Vix PVals</th>
        <th>SnB PVals</th>
        <th>SnB Gates</th>
        <th>Device #</th>
        <th>Got A Smart Device</th>
        <th>LTA</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.TOC}</td>
          <td>{item.Station}</td>
          <td>{item.NLC}</td>
          <td>{item.TLC}</td>
          <td>{item.Postcode}</td>
          <td>{item.Longitude}</td>
          <td>{item.Latitude}</td>
          <td>{item.CubicGates}</td>
          <td>{item.VixPvals}</td>
          <td>{item.SnbPvals}</td>
          <td>{item.SnbGates}</td>
          <td>{item.ValidationDeviceNumbers}</td>
          <td>{item.OneSmartDevice}</td>
          <td>{item.Lta}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}

export default SmartTable;
