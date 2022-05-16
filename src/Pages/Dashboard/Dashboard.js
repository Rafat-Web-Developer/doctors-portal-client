import React from "react";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboardSidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-3">
        {/* <!-- Page content here --> */}
        <h1 className="text-primary font-bold text-xl md:text-2xl">
          Welcome to your Dashboard
        </h1>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboardSidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>My Appointment</a>
          </li>
          <li>
            <a>My Reviews</a>
          </li>
          <li>
            <a>My Histories</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
