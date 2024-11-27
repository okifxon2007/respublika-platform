import axios from "axios";
import React, { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";


const data = [{ name: "Конституциявий-ҳуқуқий саводхонлик", value: 33, fill: "#dc3545" }];

const LegalLiteracy = () => {
  const [chartone, setchartone] = useState([])
  useEffect(() =>{
    axios('https://trello.vimlc.uz/knowlodge')
    .then(data =>{
      setchartone(data.data.semicharts)
    })
    .catch(err =>{
      console.log(err);
      
    })
  },[])
  return (
    <div className="flex flex-wrap">
   
    {chartone.length > 0 &&
      chartone.map((item, index) => (
        <div
        key={index}
        style={{
          width: "30%",
          height: 200,
          marginBottom: 20,
        }}
      >
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="100%"
            innerRadius="70%"
            outerRadius="100%"
            startAngle={180}
            endAngle={0}
            barSize={10}
            data={[
              { name: item.label, value: item.percentage, fill: item.percentage <= 50 ? "red" : "green" }, 
              { name: "Remaining", value: 100 - item.percentage, fill: item.percentage <= 50 ? "green" : "red" }, 
            ]}
          >
            <RadialBar minAngle={15} dataKey="value" clockWise />
          </RadialBarChart>
        </ResponsiveContainer>
        <p style={{ textAlign: "center" }}>
          {item.percentage}% <br /> {item.label}
        </p>
      </div>
      
      ))
    }
  </div>
  );
};

export default LegalLiteracy;
