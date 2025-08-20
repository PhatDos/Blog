import React from "react";

import {
  FaUsers,
  FaChartLine,
  FaShoppingCart,
  FaDollarSign
} from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

const Overview = () => {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [1200, 1900, 3000, 2500, 3200, 4000],
        borderColor: "#4cafef",
        backgroundColor: "rgba(76,175,239,0.2)"
      }
    ]
  };

  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Orders",
        data: [30, 45, 60, 40, 80, 90, 50],
        backgroundColor: "#ff9800"
      }
    ]
  };

  const orders = [
    { id: 1, customer: "John Doe", total: "$120", status: "Completed" },
    { id: 2, customer: "Jane Smith", total: "$90", status: "Pending" },
    { id: 3, customer: "Sam Wilson", total: "$200", status: "Completed" },
    { id: 4, customer: "Lisa Wong", total: "$150", status: "Cancelled" }
  ];

  return (
    <main className="dashboard__main">
      {/* Header */}
      <header className="dashboard__header">
        <h1>Dashboard</h1>
        <div className="user-info">Hello, Admin</div>
      </header>

      {/* Stats Cards */}
      <section className="dashboard__stats">
        <div className="card">
          <FaUsers />
          <div>
            <h3>1,230</h3>
            <p>Users</p>
          </div>
        </div>
        <div className="card">
          <FaShoppingCart />
          <div>
            <h3>320</h3>
            <p>Orders</p>
          </div>
        </div>
        <div className="card">
          <FaDollarSign />
          <div>
            <h3>$5,430</h3>
            <p>Revenue</p>
          </div>
        </div>
        <div className="card">
          <FaChartLine />
          <div>
            <h3>+12%</h3>
            <p>Growth</p>
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="dashboard__charts">
        <div className="chart-card">
          <h3>Revenue Over Time</h3>
          <Line data={lineData} />
        </div>
        <div className="chart-card">
          <h3>Orders This Week</h3>
          <Bar data={barData} />
        </div>
      </section>

      {/* Table */}
      <section className="dashboard__table">
        <h3>Recent Orders</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.total}</td>
                <td className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Overview;
