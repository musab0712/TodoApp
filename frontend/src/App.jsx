import "./App.css";
import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./componenets/experiment/Dashboard";
import Landing from "./componenets/experiment/Landing";
import Navbar from "./componenets/experiment/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
