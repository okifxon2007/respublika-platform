import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Mainthree = () => {
  const [text, settext] = useState('')
  useEffect(()=>{
    axios("https://trello.vimlc.uz/psychologic")
    .then(data =>{
      settext(data.data)
    })
    .catch(err=>{
      console.log(err);
      
    })
  },[])
  return (
    <div>
        <div className='ml-auto mr-auto max-w-[1200px]'>
    <div className="testhead flex mt-24">
     <div className='w-5 h-10 bg-blue-800'></div>  <h1 className='text-2xl font-bold ml-4'>Психологик диагностика</h1> <div className='w-[950px] h-0.5 bg-[#495057] ml-5 mt-5'></div> <br />
    
   </div>
   <p className='flex mt-12'><span className='w-[644px] h-[155px]'>{text.text1}</span><span className='w-[644px] h-[155px]'>{text.text2}</span></p>
</div>
</div>
  )
}

export default Mainthree