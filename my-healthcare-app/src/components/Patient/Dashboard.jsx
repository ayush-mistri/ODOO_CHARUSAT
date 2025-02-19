import { useState } from "react";
import Sidebar from "./Sidebar";
import Appointments from "./Appointments";
// import Billing from "./Billing";

const Dashboard = ({ role = "patient", userName = "Guest" }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-1">
        {/* Sidebar Component */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} role={role} userName={userName} />

        {/* Main Content (Right Side) */}
        <div className="flex-1 p-8 overflow-auto mt-14">
          {/* <h1 className="text-2xl font-semibold mb-5">
            {role === "doctor" ? "Doctor" : "Patient"} Dashboard
          </h1> */}

          {/* Conditional Rendering for Active Tab */}
          {activeTab === "dashboard" && <h1 className="text-2xl font-semibold mb-5">
            {role === "doctor" ? "Doctor" : "Patient"} Dashboard
          </h1>}
          {activeTab === "appointments" && <Appointments />}
          {/* {activeTab === "billing" && <Billing />} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
