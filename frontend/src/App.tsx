import React from "react";
import "./App.css";
import DashBoard from "./views/dashboard/DashBoard";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="sidebar">
      <Sidebar/>  
      </div>
      <DashBoard />
      </div>
      
    </div>
  );
}

export default App;
