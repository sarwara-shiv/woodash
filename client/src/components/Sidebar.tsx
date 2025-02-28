import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
