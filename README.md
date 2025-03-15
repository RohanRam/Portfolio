:root {
    --primary: grey;
    --white: #ffffff;
    --bg: #f5f5f5;
}


body {
    /* font-size: 1.6rem; */
    background: var(--bg);
}

.container {
    max-width: 124rem;
    padding: rem 1rem;
}

/* Swiper Container */
.swiper_container {
    height: 30rem;
    padding: 2rem 0;
    position: relative;
}

/* Individual Slide */
.swiper-slide {
    width: 15rem;
    height: 20rem;
    position: relative;
}


.swiper-slide img {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    object-fit: cover;
}

/* Remove default Swiper shadows */
.swiper-slide-shadow-left,
.swiper-slide-shadow-right {
    display: none;
}

/* Pagination (dot indicators) */
.swiper-pagination {
    position: relative;
    width: 20rem;
    bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .2rem;
}

.swiper-pagination-bullet {
    width: 1rem;
    height: 1rem;
    background: #a29999;
    border-radius: 50%;
    cursor: pointer;
}

.swiper-pagination-bullet-active {
    background: var(--primary);
}

/* Slider Controller - Bottom Centered */
.slider-controler {
    position: relative;
    bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Arrow Buttons */

.slider-arrow {
    background: var(--white);
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}


.sws:not(:hover):not(.swiper-slide-active) {
    filter: grayscale(0.6);
}
