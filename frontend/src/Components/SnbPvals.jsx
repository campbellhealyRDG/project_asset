// src/components/SnbPvals.jsx

import React from 'react';
import './App.css'; // Import the same CSS for consistent styling

function SnbPvals({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>TOC</th>
          <th>Station</th>
          <th>NLC</th>
          <th>Proposed Pval Number</th>
          <th>Suggested PVal Number</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.TOC}</td>
            <td>{item.Station}</td>
            <td>{item.NLC}</td>
            <td>{item.ProposedPvalNumber}</td>
            <td>{item.SuggestedPvalNumber}</td>
            <td>{item.Comment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SnbPvals;
