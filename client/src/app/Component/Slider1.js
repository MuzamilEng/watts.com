import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        pauseOnHover: false,
    };

    const infoItems = [
        {
            text: 'Project Management',
            bgColor: 'bg-black',
            textColor: 'text-white',
            top: '7rem',
            left: '4rem',
        },
        {
            text: 'Building Surveying',
            bgColor: 'bg-white',
            textColor: 'text-black',
            top: '17rem',
            left: '50rem',
        },
        {
            text: 'Cost Management',
            bgColor: 'bg-blue-400',
            textColor: 'text-black',
            top: '6rem',
            left: '3rem',
        },
        {
            text: 'Independent Monitoring',
            bgColor: 'bg-black',
            textColor: 'text-white',
            bottom: '4rem',
            right: '3rem',
        },
        {
            text: 'Public Sector',
            bgColor: 'bg-blue-400',
            textColor: 'text-white',
            bottom: '-4rem',
            right: '22rem',
        },
        {
            text: 'Public Management',
            bgColor: 'bg-white',
            textColor: 'text-black',
            bottom: '-6rem',
            left: '13rem',
        },
    ];

    const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentInfoIndex((prevIndex) => (prevIndex + 1) % infoItems.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative'>
            <Slider {...settings}>
                <img src="images/main_bg.png" alt="Image 1" className="w-screen lg:h-[45rem] h-[24rem]" />
                <img src="images/main_bg.png" alt="Image 2" className="w-screen lg:h-[45rem] h-[24rem]" />
                <img src="images/main_bg.png" alt="Image 3" className="w-screen lg:h-[45rem] h-[24rem]" />
            </Slider>

            {infoItems.map((item, index) => (
                <div
                    key={index}
                    className={`absolute lg:w-[26rem] w-[12rem] h-[12rem] scale-in-center flex justify-center items-center ${item.bgColor} p-5 lg:h-[26rem] rounded-full`}
                    style={{
                        top: item.top,
                        left: item.left,
                        bottom: item.bottom,
                        right: item.right,
                        display: currentInfoIndex === index ? 'block' : 'none',
                    }}
                >
                    <h1 className={`lg:text-5xl text-lg font-semibold text-center mt-[2rem] lg:mt-[9rem] ${item.textColor}`}>
                        {item.text}
                    </h1>
                </div>
            ))}
        </div>
    );
}

export default Slider1;
