import React from 'react'
import { footer } from '../Data'

const Footer = () => {
  return (
    <div>
        <div className="">
            {footer?.map((item, index) => (
                <div key={index} className='p-5'>
                    <h1 className='text-black absolute right-[5rem] font-bold text-5xl'>{item?.title}<span className='text-blue-500 text-4xl font-bold'>.</span></h1>
                    <div className="grid grid-cols-5 res_footer_lists gap-3 w-full max-w-[67rem]">
                        {item?.services?.map((service, index) => (
                            <a href={service?.url} className='' key={index}>
                                <p className='text-black hover:text-blue-500 text-lg w-[15rem] mr-2'>{service?.title}</p>
                            </a>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-3 w-full mt-4 max-w-[60rem]">
                        {item?.content?.map((contents, index) => (
                            <a href={contents?.url} className='' key={index}>
                                <span className='text-black font-semibold hover:text-blue-500 text-sm'>{contents?.title}</span>
                                {contents?.icon ? <span className='text-blue-400 res_icon text-2xl'>{contents?.icon}</span>: contents?.title === "" && <img src={contents?.img} alt="images/footer_icon.png" className='w-[1.8rem] res_iconImg' /> }
                            </a>
                        ))}
                    </div>
                    <div className="mt-[2rem] flex justify-between">
                    <p className='text-blue-400 text-lg cursor-pointer w-full res_footer_para max-w-[54rem]'>{item?.info}</p>
                    <div className="flex justify-around items-center w-[30rem]">
                        {item?.privacy?.map((privicies, index) => (
                            <a href={privicies?.url} className='' key={index}>
                                <span className='text-black underline text-sm mr-2'>{privicies?.title}</span>
                            </a>
                        ))}
                    </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Footer