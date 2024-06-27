import React, { useState } from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CaseFlowPage from "./pages/CaseFlowPage";

function App() {
  return (
    <div className=" bg-blue-50">
   
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/details" element={<CaseFlowPage />} />
        </Routes>
     
    </div>
  );
}

export default App;
