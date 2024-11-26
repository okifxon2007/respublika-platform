import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Strategik fikrlash", value: 85, color: "#00C49F" },
];

const CustomPieChart = () => {
  return (
    <PieChart width={300} height={300} >
      <Pie
        data={data}
        cx={200}
        cy={150}
        innerRadius={60}
        outerRadius={80}
        dataKey="value"
        nameKey="name"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CustomPieChart;
