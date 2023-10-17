import React from 'react'

const LeftContainer2 = ({ prtitle, info, more, img1, img2, location }) => {
    return (
        <div className=''>
            <main className='container mt-[3rem] relative h-[30rem] lg:h-[60rem]'>
                <div className='flex justify-around'>
                    <div className="flex flex-col items-center lg:max-w-[50rem] lg:h-[29rem] w-full">
                        <div className="w-[34rem] h-[22rem] top-[4rem] left-[6rem] res_img absolute lg:w-[60rem] lg:h-[50rem] z-20 overflow-hidden">
                            <img
                                src={img1}
                                alt="images/editorium.png"
                                className="w-full h-full kenburns-bottom"
                            />
                        </div>
                    </div>
                    <div className="mt-[6rem]">
                        <h1 className='w-full max-w-[20rem] res_Lpara_width text-2xl pb-3 font-semibold lg:text-4xl text-black'>{prtitle}</h1>
                        <p className='w-full max-w-[20rem] res_Lpara_width text-xl lg:text-2xl text-black'>{location}</p>
                        <p className='w-full max-w-[20rem] res_Lpara_width text-xl lg:text-3xl text-black'>{info}</p>
                        <p className='w-full max-w-[27rem] text-xl cursor-pointer lg:text-2xl text-blue-500'>{more}</p>
                    </div>
                </div>
                <img src={img2} alt="images/grid1.png" className='w-full z-10 absolute -top-[0rem] left-0 max-w-[30rem] h-[15rem] lg:w-[63rem] lg:h-[25rem]' />
            </main>
        </div>
    )
}

export default LeftContainer2