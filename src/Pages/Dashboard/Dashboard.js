import React from "react";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if (adminLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboardSidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-3">
        {/* <!-- Page content here --> */}
        <h1 className="text-primary font-bold text-xl md:text-2xl mb-5">
          Welcome to your Dashboard
        </h1>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboardSidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointment</Link>
          </li>
          <li>
            <Link to="/dashboard/reviews">My Reviews</Link>
          </li>
          <li>
            <Link to="/dashboard/histories">My Histories</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="/dashboard/allUsers">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/addDoctor">Add Doctor</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
