// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// import { thumb } from '../assets/prothumb';

// import './swipe.css'

// function Swiper() {
//     return (
//         <>

//             <div className="container">
               
//                 <Swiper
//                     effect={'coverflow'}
//                     grabCursor={true}
//                     centeredSlides={true}
//                     loop={true}
//                     slidesPerView={'auto'}
//                     coverflowEffect={{
//                         rotate: 0,
//                         stretch: 0,
//                         depth: 100,
//                         modifier: 2.5,
//                     }}
//                     pagination={{ el: '.swiper-pagination', clickable: true }}
//                     navigation={{
//                         nextEl: '.swiper-button-next',
//                         prevEl: '.swiper-button-prev',
//                         clickable: true,
//                     }}
//                     modules={[EffectCoverflow, Pagination, Navigation]}
//                     className="swiper_container"
//                 >
//                     <SwiperSlide>
//                         <img src={thumb.ecart} alt="slide_image" />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={thumb.imagify} alt="slide_image" />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={thumb.lady} alt="slide_image" />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={thumb.login} alt="slide_image" />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={thumb.profair} alt="slide_image" />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={thumb.travel} alt="slide_image" />
//                     </SwiperSlide>
//                     {/* <SwiperSlide>
//                         <img src={thumb.ecart} alt="slide_image" />
//                     </SwiperSlide> */}

//                     <div className="slider-controler">
//                         <div className="swiper-button-prev slider-arrow">
//                             <i class='bx bx-chevron-left' ></i>
//                         </div>
//                         <div className="swiper-button-next slider-arrow">
//                             <i class='bx bx-chevron-right'></i>
//                         </div>
//                         <div className="swiper-pagination"></div>
//                     </div>
//                 </Swiper>
//             </div>


//         </>
//     )
// }

// export default Swiper

