import React from 'react'

const LeftContainer = ({ title, info, more, img1, img2 }) => {
    return (
        <div className=''>
            <main className='container mt-[3rem] relative h-[30rem]'>
                <div className='flex justify-around'>
                    <div className="flex w-full relative"><span className='text-black absolute left-[17rem] text-4xl top-0 lg:text-6xl -mt-[2rem] pb-2 m-3'>{title}</span></div>
                    <div className="flex flex-col items-center lg:max-w-[50rem] lg:h-[29rem] w-full">
                        <div className="w-[34rem] h-[22rem] top-[4rem] left-[6rem] res_img absolute lg:w-[50rem] lg:h-[30rem] z-20 overflow-hidden">
                            <img
                                src={img1}
                                alt="images/editorium.png"
                                className="w-full h-full kenburns-bottom"
                            />
                        </div>
                    </div>
                    <div className="mt-[3rem] top-[5rem] absolute right-[8rem]">
                        <p className='w-full max-w-[20rem] res_Lpara_width text-xl lg:text-2xl text-black'>{info}</p>
                        <p className='w-full max-w-[25rem] text-xl cursor-pointer lg:text-2xl text-blue-500'>{more}</p>
                    </div>
                </div>
                <img src={img2} alt="images/grid1.png" className='w-full z-10 absolute top-[16rem] left-0 max-w-[30rem] h-[15rem] lg:w-[43rem] lg:h-[19rem]' />
                <div className='absolute right-0 top-[8rem] transform rotate-90'>
                    <a href="/services" className='relative'>
                        <span className='text-blue-400 absolute top-3 -left-12 border-b-[1px] w-10 border-blue-400'> </span>
                        <span className='text-blue-400 text-sm font-bold lg:text-base ml-1'>{title}</span>
                    </a>
                </div>
            </main>
        </div>
    )
}

export default LeftContainer