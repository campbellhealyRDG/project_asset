// src/components/Stations.jsx

import React from 'react';
import './App.css'; // Import the same CSS for consistent styling

function Stations({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>Station</th>
          <th>NLC</th>
          <th>TLC</th>
          <th>Has Ticket Gate</th>
          <th>Ticket Gates</th>
          <th>Cubic Gates</th>
          <th>Vix PVals</th>
          <th>SnB PVals</th>
          <th>SnB Gates</th>
          <th>Total Devices</th>
          <th>Totals 21/21</th>
          <th>Rank 21/22</th>
          <th>Interchanges 21/22</th>
          <th>Region</th>
          <th>TOC</th>
          <th>SFO</th>
          <th>Station Group</th>
          <th>London Travel Area</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Station}</td>
            <td>{item.Nlc}</td>
            <td>{item.Tlc}</td>
            <td>{item.HasTicketGate}</td>
            <td>{item.TicketsGates}</td>
            <td>{item.CubicGates}</td>
            <td>{item.VixPvals}</td>
            <td>{item.SnbPvals}</td>
            <td>{item.SnbGates}</td>
            <td>{item.TotalDevices}</td>
            <td>{item.Totals2122}</td>
            <td>{item.Rank2122}</td>
            <td>{item.Interchanges2122}</td>
            <td>{item.Region}</td>
            <td>{item.TOC}</td>
            <td>{item.Sfo}</td>
            <td>{item.StationGroup}</td>
            <td>{item.Lta}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Stations;
