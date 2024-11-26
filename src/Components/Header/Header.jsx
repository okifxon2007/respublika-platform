import React from 'react'
import gerb from '../../img/gerb.png'
const Header = () => {
  return (
    <div>
      <header className='mt-7'>
      <div className="ml-auto mr-auto max-w-[1400px] flex justify-center gap-64">
      <img className='w-36' src={gerb} alt="" loading='lazy'/>
        <h1 className='mt-4 w-96 text-2xl text-center'>Республика Ассессмент маркази онлайн платформаси</h1>
        <button>78 <span>2</span></button>
      </div>
      </header>
    </div>
  )
}

export default Header