import { FaUser, FaMoneyBillWave, FaSignOutAlt, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ activeTab, setActiveTab, role, userName }) => {
  const sidebarLinks = [
    { name: "Dashboard", icon: <FaUser />, key: "dashboard" },
    { name: "Appointments", icon: <FaCalendarCheck />, key: "appointments" },
    { name: "Billing", icon: <FaMoneyBillWave />, key: "billing" },
    { name: "Logout", icon: <FaSignOutAlt />, key: "logout" },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white p-5 flex-shrink-0 border-r border-gray-300 mt-21">
      <div className="text-center mb-5 mt-3">
        {/* Profile Image Clickable - Links to Profile Page */}
        <Link to="/profile">
          <img
            src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto cursor-pointer"
          />
        </Link>
        <p className="mt-2 font-semibold">{userName}</p>
        <p className="text-sm text-gray-400">{role === "doctor" ? "Doctor" : "Patient"}</p>
      </div>

      <ul>
        {sidebarLinks.map(({ name, icon, key }) => (
          <li
            key={key}
            className={`flex items-center gap-2 p-3 rounded cursor-pointer text-lg ${activeTab === key ? "bg-blue-500 text-white" : "hover:bg-gray-700"
              }`}
            onClick={() => setActiveTab(key)}
          >
            {icon} {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
