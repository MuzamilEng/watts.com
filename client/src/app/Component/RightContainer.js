import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const RightContainer = ({ title, info, more, image, }) => {
    return (
        <div className='relative'>
            <main className='container ml-10 mt-[3rem] h-[33rem] res_Rcontainer relative'>
                <div className='flex justify-around'>
                    <div className="mt-[5rem] absolute left-[8rem]">
                        <p className='w-full max-w-[20rem] res_Rpara_width text-xl lg:text-2xl text-black'>{info}</p>
                        <p  className='w-full cursor-pointer max-w-[25rem] text-xl lg:text-2xl text-blue-500'>{more}</p>
                    </div>
                    <div className="flex w-full relative"><span className='text-black absolute right-[20rem] text-4xl top-0 lg:text-6xl -mt-[2rem] pb-2 m-3'>{title}</span></div>
                    <div className="flex flex-col items-center">
                        <div className="w-[34rem] h-[22rem] top-[4rem] right-[7rem] res_img absolute lg:w-[50rem] lg:h-[29rem] z-20 overflow-hidden">
                            <img
                            src={image}
                                alt="images/editorium.png"
                                className="w-full h-full kenburns-bottom"
                            />
                        </div>
                    </div>

                </div>
                <img src="images/grid1.png" alt="images/grid1.png" className='w-full z-10 absolute top-0 right-0 h-[17rem] max-w-[15rem] lg:w-[43rem] lg:h-[19rem]' />
                <div className='absolute left-0 top-[8rem] transform rotate-90'>
                    <a href="/services" className='relative'>
                        <span className='text-blue-400 absolute top-3 -left-12 border-b-[1px] w-10 border-blue-400'> </span>
                        <span className='text-blue-400 text-sm font-bold lg:text-base ml-1'>{title}</span>
                    </a>
                </div>
            </main>
        </div>
    )
}

export default RightContainer
