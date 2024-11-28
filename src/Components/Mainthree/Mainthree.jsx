import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const Mainthree = () => {
  const [text, settext] = useState('');

  useEffect(() => {
    axios("https://trello.vimlc.uz/psychologic")
      .then(data => {
        settext(data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // `useMemo` bilan `text1` va `text2` ni optimallashtirish
  const text1 = useMemo(() => text.text1 || '', [text]);
  const text2 = useMemo(() => text.text2 || '', [text]);

  return (
    <div>
      <div className='ml-auto mr-auto max-w-[1200px]'>
        {/* Sarlavha bo'limi */}
        <div className="testhead flex mt-24">
          <div className='w-5 h-10 bg-blue-800'></div>
          <h1 className='text-2xl font-bold ml-4'>Психологик диагностика</h1>
          <div className='w-[950px] h-0.5 bg-[#495057] ml-5 mt-5'></div>
          <br />
        </div>
        
        {/* Matn ko'rsatish */}
        <p className='flex mt-12'>
          <span className='w-[644px] h-[155px]'>{text1}</span>
          <span className='w-[644px] h-[155px]'>{text2}</span>
        </p>
      </div>
    </div>
  );
};

export default Mainthree;
