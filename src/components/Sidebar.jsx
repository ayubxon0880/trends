import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="h-screen w-64 bg-white text-gray-900 flex flex-col p-4 border-r border-gray-200 shadow-md">
      <nav className="flex-1 space-y-2">
        <SidebarItem link="/" icon="🏠" text="Home" active={location.pathname === "/"} />
        <SidebarItem link="/trends" icon="📊" text="Trends" active={location.pathname === "/trends"} />
        <SidebarItem link="/analytics" icon="📈" text="Analytics" active={location.pathname === "/analytics"} />
        <SidebarItem link="/marketing" icon="📂" text="Marketing" active={location.pathname === "/marketing"} />
        <SidebarItem link="/settings" icon="⚙️" text="Settings" active={location.pathname === "/settings"} />
        <SidebarItem link="/news" icon="📰" text="News" active={location.pathname === "/news"} />
        <SidebarItem link="/instructions" icon="ℹ️" text="Instructions" active={location.pathname === "/instructions"} />
        <SidebarItem link="/search" icon="🔍" text="Your searches" active={location.pathname === "/search"} />
        <SidebarItem link="/contact" icon="📞" text="Contact us" active={location.pathname === "/contact"} />
      </nav>
      <div className="p-4 bg-red-100 rounded-lg mt-4 text-center">
        <p className="text-sm text-gray-700 font-semibold">Get Pro Plan for free for 1 month</p>
        <Link to="/test" className="mt-2 w-full bg-gray-200 text-gray-900 py-2 rounded-lg hover:bg-gray-300 block text-center">Get started</Link>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, active, link }) => {
  return (
    <Link to={link} className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${active ? 'bg-gray-200' : 'hover:bg-gray-100'}`}>
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </Link>
  );
};

export default Sidebar;