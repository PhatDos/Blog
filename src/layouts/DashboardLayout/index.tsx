import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./DashboardLayout.scss";
import config from "~/config";
import Overview from "~/pages/Dashboard/overview";
import BlogsTable from "~/pages/Dashboard/blogTable";
import About from "~/pages/Dashboard/aboutUs";

const DashboardLayout: React.FC = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="dashboard__sidebar">
        <h2 className="logo">Hello Admin</h2>
        <nav>
          <Link to={config.routes.dashboardRoot}>Overview</Link>
          <Link to={config.routes.dashboardBlogs}>Blogs</Link>
          <Link to={config.routes.dashboardAbout}>About Us</Link>
        </nav>
      </aside>

      {/* Content */}
      <Routes>
        <Route
          path={config.routes.dashboardChildren.overview}
          element={<Overview />}
        />
        <Route
          path={config.routes.dashboardChildren.blogs}
          element={<BlogsTable />}
        />
        <Route
          path={config.routes.dashboardChildren.about}
          element={<About />}
        />
      </Routes>
    </div>
  );
};

export default DashboardLayout;
