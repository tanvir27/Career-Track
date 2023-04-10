import React, { useState, useEffect } from "react";
// import { useLoaderData } from 'react-router-dom';
// import StatisticsDetails from '../StatisticsDetails/StatisticsDetails';
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#C71585",
  "#FF6600",
  "#008080",
];

const Statistics = () => {
  // const statisticsData = useLoaderData();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("statistics.json")
      .then((res) => res.json())
      .then((resData) => setData(resData));
  }, []);

  return (
    <div className="container">
      <div className="text-success  text-center mt-5">
        <h1 className="">
          Visualizing Assignment Progress with a Pie Chart
        </h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="assignment_marks"
            nameKey="assignment_name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
