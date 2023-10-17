import React, { useEffect, useState } from 'react'


const RightContainer2 = ({ prtitle, location, info, more, img1, img2 }) => {
    return (
        <div className='relative'>
            <main className='container ml-10 mt-[3rem] h-[30rem] lg:h-[60rem] res_Rcontainer relative'>
                <div className='flex justify-around'>
                    <div className="mt-[5rem] ">
                    <h1 className='w-full max-w-[20rem] text-2xl pb-3 font-semibold lg:text-4xl text-black'>{prtitle}</h1>
                        <p className='w-full max-w-[20rem] res_Lpara_width text-2xl pb-3 lg:text-4xl text-black'>{location}</p>
                        <p className='w-full max-w-[20rem] res_Rpara_width1 text-xl lg:text-3xl text-black'>{info}</p>
                        <p className='w-full cursor-pointer max-w-[25rem] text-xl lg:text-2xl text-blue-500'>{more}</p>
                    </div>
                    <div className="flex flex-col items-center lg:max-w-[50rem] lg:h-[29rem] w-full res_right1_container">
                        <div className="w-[34rem] h-[22rem] top-[4rem] right-[7rem] res_img absolute lg:w-[60rem] lg:h-[50rem] z-20 overflow-hidden">
                            <img
                                src={img1}
                                alt="images/editorium.png"
                                className="w-full h-full kenburns-bottom"
                            />
                        </div>
                    </div>

                </div>
                <img src={img2} alt="images/grid1.png" className='w-full z-10 absolute top-0 right-0 h-[20rem] max-w-[15rem] lg:w-[63rem] lg:h-[25rem]' />
            </main>
        </div>
    )
}


export default RightContainer2