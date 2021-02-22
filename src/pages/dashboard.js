import Header from "components/header";
import Sidebar from "components/sidebar";
import Timeline from "components/timeline";
import React, { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Quickstagram";
  }, []);
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
