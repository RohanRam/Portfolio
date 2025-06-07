import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination } from 'swiper/modules'; // No Navigation here
import { thumb } from '../assets/prothumb';

import './swipe.css';

function Card() {
    const swiperRef = useRef(null);

    const goNext = () => swiperRef.current.swiper.slideNext();
    const goPrev = () => swiperRef.current.swiper.slidePrev();

    return (
        <div className="container">
            <Swiper
                ref={swiperRef}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="swiper_container"
            >
                {/* <SwiperSlide className='sws'><a target="_blank" href="https://e-cart-seven-mu.vercel.app/"><img src={thumb.ecart} alt="slide_image" /></a></SwiperSlide> */}
                <SwiperSlide className='sws'><a target="_blank" href="https://imagify-front-end.vercel.app/"><img src={thumb.imagify} alt="slide_image" /></a></SwiperSlide>
                <SwiperSlide className='sws'><a target="_blank" href="https://ladyloafella.netlify.app/"><img src={thumb.lady} alt="slide_image" /></a></SwiperSlide>
                <SwiperSlide className='sws'><a target="_blank" href="https://login-page-gamma-lime.vercel.app/"><img src={thumb.login} alt="slide_image" /></a></SwiperSlide>
                <SwiperSlide className='sws'><a target="_blank" href="https://project-fair-lac-three.vercel.app/"><img src={thumb.profair} alt="slide_image" /></a></SwiperSlide>
                <SwiperSlide className='sws'><a target="_blank" href="https://rohanram.github.io/Quest_Travels/"><img src={thumb.travel} alt="slide_image" /></a></SwiperSlide>
                <SwiperSlide className='sws'><a target="_blank" href="https://web-gl-i-phone.vercel.app/"><img src={thumb.iphone} alt="slide_image" /></a></SwiperSlide>



            </Swiper>

            {/* Custom Arrows Outside Swiper */}
            {/* <div className="slider-controler">
                <div className="slider-arrow" onClick={goPrev}>
                    <i className='bx bx-chevron-left'></i>
                </div>
                <div className="slider-arrow " onClick={goNext}>
                    <i className='bx bx-chevron-right'></i>
                </div>
            </div> */}
        </div>
    );
}

export default Card;
