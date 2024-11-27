import React from 'react'
import Onechart from '../Onechart/Onechart'
import Twochart from '../Twochart/Twochart'
import Dashedlinechart from '../Dashedlinechart/Dashedlinechart'
import Stacedareachart from '../Stacedareacgart/Stacedareachart'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Test = () => {
  const [chartone, setchartone] = useState([])
  useEffect(() =>{
    axios('https://trello.vimlc.uz/knowlodge')
    .then(data =>{
      setchartone(data.data)
    })
    .catch(err =>{
      console.log(err);
      
    })
  },[])
  return (
    <div className='ml-auto mr-auto max-w-[1200px] mb-28'>
        <div className="testhead flex mt-14">
          <div className='w-5 h-10 bg-blue-800'></div>  <h1 className='text-2xl font-bold ml-4'>Билим тести</h1> <div className='w-[950px] h-0.5 bg-[#495057] ml-5 mt-5'></div>
        </div>
     <div className="flex gap-22">
     <div className='flex w-[400px]'>
      <Twochart></Twochart>
      </div>

     <div className="w-96 ml-72 mt-20">
      <Dashedlinechart></Dashedlinechart>
     <div className='ml-2'>
     {/* <Stacedareachart></Stacedareachart> */}
     </div>
     </div>
     </div>
     <h1 className='text-center font-bold text-[#0956AF] text-2xl'>{chartone.overall} <br /> <span className='bg-[#28A264] p-1.5 text-white font-bold pr-28'>Umumiy Natija</span></h1>

    </div>
  )
}

export default Test