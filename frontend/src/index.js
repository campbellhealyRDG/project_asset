// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the correct module
import App from './Components/App.jsx';  // Import your App component

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
