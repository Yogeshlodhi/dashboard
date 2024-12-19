import { useState } from "react";
import { Bolt, BookOpenCheck, ChartPie, CircleHelp, Gauge, SquareUser } from "lucide-react";
import logo from "../assets/logo.png";

const navigationOptions = [
  { id: 1, logo: <Gauge />, label: "Dashboard" },
  { id: 2, logo: <SquareUser />, label: "Students" },
  { id: 3, logo: <BookOpenCheck />, label: "Chapter" },
  { id: 4, logo: <CircleHelp />, label: "Help" },
  { id: 5, logo: <ChartPie />, label: "Reports" },
  { id: 6, logo: <Bolt />, label: "Settings" },
];

const Sidebar = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="w-60 h-screen p-4 bg-white shadow-md">
      <div className="w-full h-12 mb-4 flex items-center overflow-hidden">
        <img src={logo} alt="Logo" className="h-full object-contain" />
      </div>

      <ul className="space-y-4 flex flex-col">
        {navigationOptions.map((item) => (
          <li
            key={item.id}
            className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer transition-all duration-200 ${activeId === item.id
                ? "bg-gray-300 text-black font-bold"
                : "bg-transparent text-gray-600 hover:bg-gray-200"
              }`}
            onClick={() => setActiveId(item.id)}
          >
            <span className={`transition-all duration-200 ${activeId === item.id ? "text-black" : "text-gray-500"}`}>
              {item.logo}
            </span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
