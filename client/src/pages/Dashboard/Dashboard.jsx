import React from "react";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";

function Dashboard() {
  return (
    <div className="dashboard__container">
      <Sidebar/>
      <Content/>
    </div>
  );
}

export default Dashboard;
