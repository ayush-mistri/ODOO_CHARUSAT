import { useState } from "react";
import { FaUser, FaMoneyBillWave, FaSignOutAlt, FaCalendarCheck, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = ({ activeTab, setActiveTab, role, userName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarLinks = [
    { name: "Dashboard", icon: <FaUser />, key: "dashboard" },
    { name: "Appointments", icon: <FaCalendarCheck />, key: "appointments" },
    { name: "Billing", icon: <FaMoneyBillWave />, key: "billing" },
    { name: "Logout", icon: <FaSignOutAlt />, key: "logout" },
  ];

  return (
    <div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg text-blue-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 mt-19"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed md:relative top-0 left-0 h-full bg-gray-800 text-white p-5 flex-shrink-0 border-r border-gray-300 transition-transform duration-300 ease-in-out mt-21 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 w-64`}>
        <div className="text-center mb-5 mt-3">
          <img
            src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto"
          />
          <p className="mt-2 font-semibold">{userName}</p>
          <p className="text-sm text-gray-400">{role === "doctor" ? "Doctor" : "Patient"}</p>
        </div>
        <ul>
          {sidebarLinks.map(({ name, icon, key }) => (
            <li
              key={key}
              className={`flex items-center gap-2 p-3 rounded cursor-pointer text-lg ${
                activeTab === key ? "bg-blue-500 text-white" : "hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab(key)}
            >
              {icon} {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
