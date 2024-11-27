import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";
import { data } from "autoprefixer";


const ChartComponent = () => {
  const [datas, setdata] = useState([])
  useEffect(()=>{
    axios('https://trello.vimlc.uz/professional')
    .then(data =>{
      const limitedData = data.data.percents.slice(4, 8);
      setdata(limitedData)
    })
    .catch(err =>{
      console.log(err);
      
    })
  },[])

  
  const chartdatas = datas.map((value) => ({
    name: value.label, 
    value: value.percentage, 
  }));

  return (
    <div style={{ width: "70%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={chartdatas}
          layout="vertical"
          margin={{ top: 100, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis type="category" dataKey="name" width={200} />
          <Tooltip />
          <Bar dataKey="value" fill="#00468b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
