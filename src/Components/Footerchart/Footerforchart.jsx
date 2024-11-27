import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import axios from "axios";


const CustomPieChart = () => {
  const [datas, setdatas] = useState([])
  useEffect(() =>{
    axios("https://trello.vimlc.uz/competence")
  .then(data =>{
    const dataslice = data.data.slice(3,4)
    setdatas(dataslice)
  })
  .catch(err =>{
    console.log(err);
  })
  },[])

  const chartdata = datas.map((value) =>({
      name: value.label,
      value: value.percentage,
      color: value.color,
    
  }));
  
    
  return (
    <PieChart width={300} height={300} >
      <Pie
        data={chartdata}
        cx={200}
        cy={150}
        innerRadius={60}
        outerRadius={80}
        dataKey="value"
        nameKey="name"
      >
        {datas.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CustomPieChart;
