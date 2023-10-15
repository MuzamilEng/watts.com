import React from 'react'
import { infos } from '../Data'

const Info = () => {
  return (
    <div className='flex'>
       {infos.map((item, index) => (
        <div style={{backgroundColor: item?.bg}} key={index} className={`w-fll flex justify-center items-center p-5 max-w-[20rem] h-[20rem] rounded-full`}>
            <h1 style={{color: item?.text}} className='text-2xl font-semibold text-left'>{item.label}</h1>
        </div>
       ))} 
    </div>
  )
}

export default Info