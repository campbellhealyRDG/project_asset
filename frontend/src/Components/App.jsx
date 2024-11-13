// src/Components/App.jsx

import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';
import SmartTable from './SmartTable';  // Existing Pvals table component
import CubicGatesTable from './CubicGatesTable'; // New Gates table component
import DataTable from './DataTable'; 
import EveryNlc from './EveryNlc';
import InboundaryStations from './InboundaryStations';
import LocationData from './LocationData';
import SnbGates from './SnbGates';
import SnbPvals from './SnbPvals';
import Stations from './Stations';
import VixPvals from './VixPvals';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [showSmart, setshowSmart] = useState(false);
  const [showCubicGates, setShowCubicGates] = useState(false);
  const [showDataTable, setShowDataTable] = useState(false);
  const [showEveryNlc, setShowEveryNlc] = useState(false);
  const [showInboundaryStations, setShowInboundaryStations] = useState(false);
  const [showLocationData, setShowLocationData] = useState(false);
  const [showSnbGates, setShowSnbGates] = useState(false);
  const [showSnbPvals, setShowSnbPvals] = useState(false);
  const [showStations, setShowStations] = useState(false);
  const [showVixPvals, setShowVixPvals] = useState(false);

  const fetchSmarts = async () => {
    try {
      const response = await axios.get('http://localhost:8081/smartdevices');
      setData(response.data);
      setshowSmart(true);
      setShowCubicGates(false); // Hide CubicGates table when showing Smarts
      setShowDataTable(false); 
      setShowEveryNlc(false);
      setShowInboundaryStations(false);
      setShowLocationData(false);
      setShowSnbGates(false);
      setShowSnbPvals(false);
      setShowStations(false);
      setShowVixPvals(false);
    } catch (error) {
      console.error('Error fetching SmartDevices:', error);
    }
  };
  
  const fetchCubicGates = async () => {
    try {
      const response = await axios.get('http://localhost:8081/gates');
      setData(response.data);
      setshowSmart(false); // Hide Smarts table when showing Gates
      setShowCubicGates(true);
      setShowDataTable(false);
      setShowEveryNlc(false);
      setShowInboundaryStations(false);
      setShowLocationData(false);
      setShowSnbGates(false);
      setShowSnbPvals(false);
      setShowStations(false);
      setShowVixPvals(false);
    } catch (error) {
      console.error('Error fetching Cubic gates:', error);
    }
  };
  
  const fetchDataTable = async () => {
    try {
      const response = await axios.get('http://localhost:8081/data');
      setData(response.data);
      setshowSmart(false); // Hide Smarts table when showing Gates
      setShowCubicGates(false);
      setShowDataTable(true);
      setShowEveryNlc(false);
      setShowInboundaryStations(false);
      setShowLocationData(false);
      setShowSnbGates(false);
      setShowSnbPvals(false);
      setShowStations(false);
      setShowVixPvals(false);
    } catch (error) {
      console.error('Error fetching data table:', error);
    }
  };
  
  const fetchEveryNlc = async () => {
    try {
      const response = await axios.get('http://localhost:8081/everynlc');
      setData(response.data);
      setshowSmart(false); // Hide Smarts table when showing Gates
      setShowCubicGates(false);
      setShowDataTable(false);
      setShowEveryNlc(true);
      setShowInboundaryStations(false);
      setShowLocationData(false);
      setShowSnbGates(false);
      setShowSnbPvals(false);
      setShowStations(false);
      setShowVixPvals(false);
    } catch (error) {
      console.error('Error fetching Every NLC:', error);
    }
  };
  
  const fetchInboundaryStations = async () => {
    try {
      const response = await axios.get('http://localhost:8081/inboundarystations');
      setData(response.data);
      setshowSmart(false); // Hide Smarts table when showing Gates
      setShowCubicGates(false);
      setShowDataTable(false);
      setShowEveryNlc(false);
      setShowInboundaryStations(true);
      setShowLocationData(false);
      setShowSnbGates(false);
      setShowSnbPvals(false);
      setShowStations(false);
      setShowVixPvals(false);
    } catch (error) {
      console.error('Error fetching inboundary stations:', error);
    }
  };
  
  const fetchLocationData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/locationdata');
      setData(response.data);
      setshowSmart(false); // Hide Smarts table when showing Gates
      setShowCubicGates(false);
      setShowDataTable(false);
      setShowEveryNlc(false);
      setShowInboundaryStations(false);
      setShowLocationData(true);
      setShowSnbGates(false);
      setShowSnbPvals(false);
      setShowStations(false);
      setShowVixPvals(false);
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  };
  
  const fetchSnbGates = async () => {
    try {
      const response = await axios.get('http://localhost:8081/snbgates');
      setData(response.data);
      setshowSmart(false); // Hide Smarts table when showing Gates
      setShowCubicGates(false);
      setShowDataTable(false);
      setShowEveryNlc(false);
      setShowInboundaryStations(false);
      setShowLocationData(false);
      setShowSnbGates(true);
      setShowSnbPvals(false);
      setShowStations(false);
      setShowVixPvals(false);
    } catch (error) {
      console.error('Error fetching snb gates data:', error);
    }
  };
  
  const fetchSnbPvals = async () => {
    try {
      const response = await axios.get('http://localhost:8081/snbpvals');
      setData(response.data);
      setshowSmart(false); // Hide Smarts table when showing Gates
      setShowCubicGates(false);
      setShowDataTable(false);
      setShowEveryNlc(false);
      setShowInboundaryStations(false);
      setShowLocationData(false);
      setShowSnbGates(false);
      setShowSnbPvals(true);
      setShowStations(false);
      setShowVixPvals(false);
    } catch (error) {
      console.error('Error fetching locaion data:', error);
    }
  };
  
  const fetchStations = async () => {
    try {
      const response = await axios.get('http://localhost:8081/stations');
      setData(response.data);
      setshowSmart(false); // Hide Smarts table when showing Gates
      setShowCubicGates(false);
      setShowDataTable(false);
      setShowEveryNlc(false);
      setShowInboundaryStations(false);
      setShowLocationData(false);
      setShowSnbGates(false);
      setShowSnbPvals(false);
      setShowStations(true);
      setShowVixPvals(false);
    } catch (error) {
      console.error('Error fetching Stations data:', error);
    }
  };
  
  const fetchVixPvals = async () => {
    try {
      const response = await axios.get('http://localhost:8081/vixpvals');
      setData(response.data);
      setshowSmart(false); // Hide Smarts table when showing Gates
      setShowCubicGates(false);
      setShowDataTable(false);
      setShowEveryNlc(false);
      setShowInboundaryStations(false);
      setShowLocationData(false);
      setShowSnbGates(false);
      setShowSnbPvals(false);
      setShowStations(false);
      setShowVixPvals(true);
    } catch (error) {
      console.error('Error fetching Vix PVals data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Station Assets</h1>
      <Button onClick={fetchSmarts} label="Smart Devices" />
      <Button onClick={fetchCubicGates} label="Cubic Gates" />
      <Button onClick={fetchDataTable} label="Data Table" />
      <Button onClick={fetchEveryNlc} label="Every NLC" />
      <Button onClick={fetchInboundaryStations} label="Inboundary Stations" />
      <Button onClick={fetchLocationData} label="Location Data" />
      <Button onClick={fetchSnbGates} label="SnB Gates" />
      <Button onClick={fetchSnbPvals} label="SnB PVals" />
      <Button onClick={fetchStations} label="Stations" />
      <Button onClick={fetchVixPvals} label="Vix PVals" />
      {showSmart && <SmartTable data={data} />}
      {showCubicGates && <CubicGatesTable data={data} />}
      {showDataTable && <DataTable data={data} />}
      {showEveryNlc && <EveryNlc data={data} />}
      {showInboundaryStations && <InboundaryStations data={data} />}
      {showLocationData && <LocationData data={data} />}
      {showSnbGates && <SnbGates data={data} />}
      {showSnbPvals && <SnbPvals data={data} />}
      {showStations && <Stations data={data} />}
      {showVixPvals && <VixPvals data={data} />}
    </div>
  );
}

export default App;
