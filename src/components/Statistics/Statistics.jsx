import React, { useState, useEffect } from "react";
// import { useLoaderData } from 'react-router-dom';
// import StatisticsDetails from '../StatisticsDetails/StatisticsDetails';
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const Statistics = () => {
  // const statisticsData = useLoaderData();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("statistics.json")
      .then((res) => res.json())
      .then((resData) => setData(resData));
  }, []);

  return (
    <div>
      <div className="container text-center">
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
              <Cell key={`cell-${index}`} fill="#82ca9d" />
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
