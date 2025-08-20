import { Routes, Route, Link } from "react-router-dom";
import "./DashboardLayout.scss";
import Overview from "~/pages/Dashboard/overview.js";
import BlogsTable from "~/pages/Dashboard/blogTable/index.js";
import About from "~/pages/Dashboard/aboutUs/index.js";

function DashboardLayout() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="dashboard__sidebar">
        <h2 className="logo">Hello Admin</h2>
        <nav>
          <Link to="/dashboard">Overview</Link>
          <Link to="/dashboard/blogs">Blogs</Link>
          <Link to="/dashboard/about-us">About Us</Link>
        </nav>
      </aside>

      {/* Content */}

      <Routes>
        {/* Chú ý: chỉ để path="" hoặc "blogs" */}
        <Route path="" element={<Overview />} />
        <Route path="blogs" element={<BlogsTable />} />
        <Route path="about-us" element={<About />} />
      </Routes>
    </div>
  );
}

export default DashboardLayout;
