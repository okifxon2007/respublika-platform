import React from 'react'
import Footerchart from '../Footerchart/Footerchart'
import Footertwochart from '../Footerchart/Footertwochart'
import Footerthreechart from '../Footerchart/Footerthreechart'
import qrcode from '../../img/qrcode.png'
import Footerforchart from '../Footerchart/Footerforchart'
import Footerfifechart from '../Footerchart/Footerfifechart'
import Footerendchart from '../Footerchart/Footerendchart'
const Footer = () => {
  return (
    <div>
        <div className='ml-auto mr-auto max-w-[1200px]'>
    <div className="testhead flex mt-24">
     <div className='w-5 h-10 bg-blue-800'></div>  <h1 className='text-2xl font-bold ml-4'> Компетенцияларнинг намоён булиши</h1> <div className='w-[950px] h-0.5 bg-[#495057] ml-5 mt-5'></div> <br />
    
   </div>
  <div className="flex">
  <div className="footerdfone flex">
   <Footerchart></Footerchart>
   <Footertwochart></Footertwochart>
   <Footerthreechart></Footerthreechart>
   </div>
   <img className='w-96 h-60 mt-24' src={qrcode} alt="" />
  </div>
   <div className="footerdfone flex">
   <Footerforchart></Footerforchart>
   <Footerfifechart></Footerfifechart>
   <Footerendchart></Footerendchart>
   </div>
</div>
</div>
  )
}

export default Footer