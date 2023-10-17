import React from 'react';
import { home_data } from '../Data';
import RightContainer from '../Component/RightContainer';
import LeftContainer from '../Component/LeftContainer';
import Footer from '../Component/Footer';
import Slider1 from '../Component/Slider1';
import Header from '../Component/Header';
import { useGlobalContext } from '../UserContext/UserContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { posts } = useGlobalContext();

  return (
    <>
      <div className='bg-[#fff] overflow-x-hidden'>
        {home_data?.map((item, index) => (
          <div key={index} className=''>
            <header className="relative">
              <Header />
              <div className="overflow-hidden">
                <Slider1 />
              </div>
            </header>
            <article className='container mt-[4rem]'>
              <div className="ml-[10rem]">
                <p className='text-blue-400 pb-2 text-[13vw] lg:text-5xl'>{item?.info}</p>
                <p className='text-black w-full max-w-[42rem] text-4xl lg:text-5xl lg:max-w-[58rem]'>{item?.para}</p>
                <div className="flex justify-evenly -ml-[6rem] mt-[5rem] relative">
                  {item?.services?.map((service, index) => (
                    <nav className='flex relative mt-[2rem]' key={index}>
                      <Link to={service?.url}>
                        <span className='text-black res_services text-lg lg:text-xl font-bold mr-2'>{service?.title}</span>
                        {service?.title !== "Public Sector" && <span className='text-blue-400 absolute top-3 left-27 border-b-[1.5px] w-12 res_border_width border-blue-400'> </span>}
                      </Link>
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
            <main className='container mt-[7rem] relative' key={index}>
              {posts?.map((contents, index) => (
                <>
                {index % 2 === 0 ? <RightContainer image={contents?.image} title={contents?.title} info={contents?.description} more={contents?.more} /> : <LeftContainer image={ contents?.image} title={contents?.title} info={contents?.description} more={contents?.more} />}
                </>
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
  );
};

export default Home;
    