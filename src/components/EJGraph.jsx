import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./EJGraph.css";

const data = [
  { year: "2022", skills: 2, projects: 1, awards: 1, leadership: 0 },
  { year: "2023", skills: 4, projects: 2, awards: 2, leadership: 1 },
  { year: "2024", skills: 7, projects: 4, awards: 4, leadership: 4 },
  { year: "2025", skills: 9, projects: 8, awards: 7, leadership: 7 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{`Year: ${label}`}</p>
        {payload.map((entry) => (
          <p key={entry.dataKey} style={{ color: entry.stroke }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const EJGraph = () => {
  return (
    <section className="chart-container" id="growth">
      <h2 className="chart-heading">My Professional Growth</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            dataKey="year"
            stroke="#333"
            tick={{ fill: "#333", fontWeight: 600 }}
            axisLine={{ stroke: "#999" }}
          />
          <YAxis
            stroke="#333"
            tick={{ fill: "#333", fontWeight: 600 }}
            axisLine={{ stroke: "#999" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="skills"
            stroke="#4f46e5"
            name="Skills Gained"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="projects"
            stroke="#16a34a"
            name="Projects Built"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="awards"
            stroke="#facc15"
            name="Awards"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="leadership"
            stroke="#f97316"
            name="Leadership"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default EJGraph;
