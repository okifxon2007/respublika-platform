import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import axios from "axios";

const CustomPieChart = () => {
  const [datas, setdatas] = useState([]);

  useEffect(() => {
    axios("https://trello.vimlc.uz/competence")
      .then((data) => {
        const dataslice = data.data.slice(3, 4);
        setdatas(dataslice);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const chartdata = datas.map((value) => ({
    name: value.label,
    value: value.percentage,
    color: value.color,
  }));

 
  const centerValue = chartdata.length > 0 ? chartdata[0].value : 0;

  return (
    <div style={{ position: "relative", width: "300px", height: "300px" }}>
      <PieChart width={300} height={300}>
        <Pie
          data={chartdata}
          cx={150}
          cy={150}
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
          nameKey="name"
        >
          {chartdata.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333",
          textAlign: "center",
        }}
      >
        {centerValue}%
      </div>
    </div>
  );
};

export default CustomPieChart;
