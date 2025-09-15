import React from "react";
import {
  FaUsers,
  FaChartLine,
  FaShoppingCart,
  FaDollarSign,
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
  BarElement,
  ChartData,
} from "chart.js";

// Register chart.js components
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

// ==== Types ====
type Order = {
  id: number;
  customer: string;
  total: string;
  status: "Completed" | "Pending" | "Cancelled";
};

// type cho icon (fix lỗi JSX)
type IconComponent = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { size?: string | number }
>;

// Reusable stats card
const StatsCard = ({
  Icon,
  value,
  label,
}: {
  Icon: IconComponent;
  value: string | number;
  label: string;
}) => (
  <div className="card">
    <Icon size={24} />
    <div>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  </div>
);

const Overview: React.FC = () => {
  const lineData: ChartData<"line"> = {
    labels: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun" ],
    datasets: [
      {
        label: "Revenue",
        data: [ 1200, 1900, 3000, 2500, 3200, 4000 ],
        borderColor: "#4cafef",
        backgroundColor: "rgba(76,175,239,0.2)",
      },
    ],
  };

  const barData: ChartData<"bar"> = {
    labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
    datasets: [
      {
        label: "Orders",
        data: [ 30, 45, 60, 40, 80, 90, 50 ],
        backgroundColor: "#ff9800",
      },
    ],
  };

  const orders: Order[] = [
    { id: 1, customer: "John Doe", total: "$120", status: "Completed" },
    { id: 2, customer: "Jane Smith", total: "$90", status: "Pending" },
    { id: 3, customer: "Sam Wilson", total: "$200", status: "Completed" },
    { id: 4, customer: "Lisa Wong", total: "$150", status: "Cancelled" },
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
        <StatsCard Icon={FaUsers as IconComponent} value="1,230" label="Users" />
        <StatsCard
          Icon={FaShoppingCart as IconComponent}
          value="320"
          label="Orders"
        />
        <StatsCard
          Icon={FaDollarSign as IconComponent}
          value="$5,430"
          label="Revenue"
        />
        <StatsCard
          Icon={FaChartLine as IconComponent}
          value="+12%"
          label="Growth"
        />
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
