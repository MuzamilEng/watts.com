import React, { useEffect, useState } from 'react'
import { home_data, my_slider } from '../Data'
import RightContainer from '../Component/RightContainer'
import LeftContainer from '../Component/LeftContainer'
import Footer from '../Component/Footer'
import SliderComponent from '../Component/Slider'
import Info from '../Component/Info'
import Slider1 from '../Component/Slider1'

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navBackgroundColor, setNavBackgroundColor] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
        setNavBackgroundColor('bg-white');
      } else {
        setScrolled(false);
        setNavBackgroundColor('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, navBackgroundColor]);

  return (
    <>
      <div className='bg-[#fff] overflow-x-hidden'>
        {home_data?.map((item, index) => (
          <div key={index} className=''>
            <header className="relative ">
              <nav
                className={`fixed w-full transition-all h-[8rem] z-50 duration-300 ${navBackgroundColor}`}
              >
                <a href="/">
                  <p className={`${scrolled ? 'text-black' : 'text-white'} slide-in-elliptic-top-fwd cursor-pointer absolute top-8 left-6 text-6xl font-bold`}>
                    {item?.title}
                    <span className="text-blue-500 text-4xl font-bold">.</span>
                  </p>
                </a>
                <span className="absolute text-blue-500 top-8 right-[3rem] cursor-pointer text-5xl">
                  {item?.icon}
                </span>
                {/* <Info /> */}
              </nav>
            <div className="overflow-hidden">
            <Slider1 />
            </div>

            </header>
            <article className='container mt-[4rem]'>
              <div className="ml-[10rem]">
                <p className='text-blue-400 pb-2 text-4xl lg:text-5xl'>{item?.info}</p>
                <p className='text-black w-fll max-w-[42rem] text-4xl lg:text-5xl lg:max-w-[58rem]'>{item?.para}</p>
                <div className="flex justify-evenly -ml-[6rem] mt-[5rem] relative">
                  {item?.services?.map((service, index) => (
                    <nav className='flex relative mt-[2rem]' key={index}>
                      <a href={service?.url}>
                        <span className='text-black res_services text-lg lg:text-xl font-bold mr-2'>{service?.title}</span>
                        {service?.title !== "Public Sector" && <span className='text-blue-400 absolute top-3 left-27 border-b-[1.5px] w-12 res_border_width border-blue-400'> </span>}
                      </a>
                    </nav>
                  ))}
                  <div className='absolute res_service left-1 transform rotate-90'>
                    <a href="/services" className='relative'>
                      <span className='text-blue-400 absolute top-3 -left-12 border-b-[1px] w-10 border-blue-400'> </span>
                      <span className='text-blue-400 text-sm font-bold ml-1 lg:text-base'>Service teams</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
            {/* <main className='container mt-[7rem] relative'>
                          {my_slider?.map((item, index) => (
                            <div key={index}>
                              <SliderComponent {...item} />
                            </div>
                          ))}
                        </main> */}
            <main className='container mt-[7rem] relative' key={index}>
              {item?.content?.map((contents, index) => (
                <div key={index} className=''>
                  {contents?.position === "right" ? <RightContainer title={contents?.title} id={contents?.id} info={contents?.info} more={contents?.more} img1={contents?.img1} img2={contents?.img2} />
                    : <LeftContainer title={contents?.title} info={contents?.info} more={contents?.more} img1={contents?.img1} img2={contents?.img2} />}
                </div>
              ))}
            </main>
          </div>
        ))}
        <div className="flex justify-center items-center">
          <footer className='mt-[3rem] border-t-2 border-blue-500 m-5 w-full'>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  )
}

export default Home