import React from 'react'
import Header from '../Component/Header'
import { cost_management } from '../Data'
import RightContainer2 from '../Component/RightContainer2'
import LeftContainer2 from '../Component/LeftContainer2'
import power_house from '../assets/power_house.png'
import Footer from '../Component/Footer'

const CostManagement = () => {
  return (
    <>
      <div className="bg-[#fff] overflow-x-hidden">
        {cost_management?.map((item, index) => (
          <div key={index} className='relative'>
            <Header />
            <img src={item?.image} alt={item?.title} className='w-full h-full' />
            <div className="absolute left-[5rem] top-[40rem] w-[3rem]">
              <p className='text-white lg:text-[6rem] text-[3rem]'>Building</p>
              <p className='text-white lg:text-[6rem] -mt-[3rem] text-[3rem]'>Surveying</p>
            </div>
            <div className="">
              <div className="p-[10rem] relative">
                <p className='text-blue-500 pb-2 w-full max-w-[100rem] font-light text-4xl lg:text-6xl'>{item?.info}</p>
                <p className='text-black pb-2 w-full max-w-[90rem] mt-[2rem] font-light text-4xl lg:text-6xl'>{item?.para}</p>
              </div>
              <div className="flex  -ml-[20rem] justify-center items-center">
                <div className="flex roles_res">
                  <div className="w-[30rem] h-[25rem] lg:w-[50rem] lg:h-[30rem] ml-[42rem] z-30 overflow-hidden">
                    <img
                      src={item?.img2}
                      alt="images/editorium.png"
                      className="w-full h-full kenburns-bottom"
                    />
                  </div>
                  <div className="relative ml-[5rem] mt-[5rem]">
                    <div className="w-[.2rem] h-[30rem] bg-blue-500 mx-auto">
                      <div className="w-5 h-5 bg-blue-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                      <div className="w-5 h-5 bg-blue-500 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>
                  <div className="ml-[2rem] mt-[5rem]">
                    {item?.role?.map((roles) => (<>
                      <p className='text-black lg:text-3xl pb-8 font-semibold text-2xl'>{roles?.label}</p>
                    </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#d2ecf88a] ">
                <div className="flex -mt-[12rem] p-4 ml-[10rem]">
                  <div className="w-[40rem] roles_res h-[30rem] lg:w-[60rem] lg:h-[50rem] z-20 overflow-hidden">
                    <img src={power_house} alt="" className='w-full h-full kenburns-bottom' />
                  </div>
                  <div className="ml-[15rem] mt-[18rem]">
                    <p className='w-full max-w-[30rem] res_Lpara_width text-xl lg:text-3xl text-blue-600'>
                    From setting the budget to the agreement on the final account, our team has a reputation for understanding client needs and delivering economic project outcomes.
                    </p> <br />
                    <span className='text-blue-600 cursor-pointer text-xl font-semibold mt-[2rem] lg:text-3xl'>Talk to the Cost Management team ...</span>
                  </div>

                </div>
              </div>
              <div className="bg-[#c2e5f58a] p-[4rem]">
                <main className='container  relative'>
                  {item?.content?.map((contents, index) => (
                    <div key={index} className=''>
                      {contents?.position === "right" ? <RightContainer2 prtitle={contents?.prtitle} location={contents?.location} id={contents?.id} info={contents?.info} more={contents?.more} img1={contents?.img1} img2={contents?.img2} />
                        : <LeftContainer2 prtitle={contents?.prtitle} info={contents?.info} location={contents?.location} more={contents?.more} img1={contents?.img1} img2={contents?.img2} />}
                    </div>
                  ))}
                </main>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center items-center">
          <footer className='mt-[3rem] border-t-2 border-blue-500 m-5 w-full'>
            <Footer />
          </footer>
        </div>      </div>
    </>
  )
}


export default CostManagement