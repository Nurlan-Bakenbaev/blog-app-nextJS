import React from 'react'

const DarkModeToogle = () => {
  return (
    <div className='relative flex gap-2 p-[2px] border-[1.5px] border-gray-400 rounded-[30px] '>
        <div>🌙</div>
        <div>🌕</div>
        <div className=' absolute w-[26px] h-[26px] bg-green-600 rounded-full'/>
    </div>
  )
}

export default DarkModeToogle