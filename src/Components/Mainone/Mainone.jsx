import React, { useEffect, useState } from 'react'
import norma from '../../img/norma.png'
import axios from 'axios'
const Mainone = () => {
  const [data, setdata] = useState([])
  useEffect(() =>{
    axios('https://trello.vimlc.uz/get-personal-info')
    .then(data =>{
      setdata(data.data)
      console.log(data.data);
      
    })
    .catch(err =>{
      console.log(err);
      
    })
  },[])
  return (
    <div className="mainone">
        {data && (
                      <div className="ml-auto mr-auto max-w-[1200px] " >
                      <div className="mt-12 flex">
                      <img src={data.imageUrl} alt="" />
                       <div className="malumot">
                           <h2 className='w-[350px] text-4xl mt-4 ml-2'>{data.firstName}<br />
                           <span className='w-[350px] text-4xl mt-4 text-[#212529]'>{data.lastName}</span></h2>
                          <div className="parag mt-7 ml-2">
                          <p className='text-[#495057]'>Тугилган сана: <span className='text-black'>{data.birthday}</span></p>
                          <p className='text-[#495057]'>Тугилган жой: <span className='text-black'> {data.adress}</span></p> <br />
               
                          <div className="malumot flex gap-8 mt-10">
                           <p>Буйи: <br /> <span>{data.hight}</span></p>
                           <p>Вазни: <br /> <span>{data.weight}</span></p>
                           <p>Индекс: <br /> <span>{data.index}</span></p>
                           <img src={norma} alt="" loading='lazy'/>
                          </div>
                          </div>
                       </div>
                       <div className="malumot2 ml-72 mt-4">
                           <p className='w-80'><span className='text-[#495057]'>Лавозими:</span> <br />
                          {data.position}</p>
                           <p className='w-80'><span className='text-[#495057]'>Номзод:</span> <br />{data.candidate}</p>
                       </div>
                   </div>
                      </div>
        )
        }
    </div>
  )
}

export default Mainone