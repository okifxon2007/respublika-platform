import React, { useEffect, useState, useMemo } from 'react';
import norma from '../../img/norma.png';
import axios from 'axios';

const Mainone = () => {
  const [data, setData] = useState({});
  const [dark, setDark] = useState('light');

  useEffect(() => {
    axios('https://trello.vimlc.uz/get-personal-info')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const toggleDarkMode = () => {
    const newTheme = dark === 'light' ? 'dark' : 'light';
    setDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const fullName = useMemo(
    () => `${data.firstName || ''}`,
    [data]
  );

  return (
    <div className="mainone">
      {data && (
        <div className="ml-auto mr-auto max-w-[1200px]">
          <div className="mt-12 flex">
            <img src={data.imageUrl} alt="User Avatar" />
            <div className="malumot">
              <h2 className="w-[350px] text-4xl mt-4 ml-2">
                {fullName}
                <br />
                <span className="w-[350px] text-4xl mt-4 text-[#212529]">
                  {data.lastName}
                </span>
              </h2>
              
              <div className="parag mt-7 ml-2">
                <p className="text-[#495057]">
                  Тугилган сана: <span className="text-black">{data.birthday}</span>
                </p>
                <p className="text-[#495057]">
                  Тугилган жой: <span className="text-black">{data.adress}</span>
                </p>
                <br />
                
                <div className="malumot flex gap-8 mt-10">
                  <p>
                    Буйи: <br /> <span>{data.hight}</span>
                  </p>
                  <p>
                    Вазни: <br /> <span>{data.weight}</span>
                  </p>
                  <p>
                    Индекс: <br /> <span>{data.index}</span>
                  </p>
                  <img src={norma} alt="Norma" loading="lazy" />
                </div>
              </div>
            </div>
            
            <div className="malumot2 ml-72 mt-4">
              <button
                className="w-32 h-10 bg-black mt-[-40px] text-white size-20 rounded-sm"
                onClick={toggleDarkMode}
              >
                {dark === 'light' ? 'Switch to Dark' : 'Switch to Light'}
              </button>
              <p className="w-80">
                <span className="text-[#495057]">Лавозими:</span> <br />
                {data.position}
              </p>
              <p className="w-80">
                <span className="text-[#495057]">Номзод:</span> <br />
                {data.candidate}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mainone;
