import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      {' '}
      <div className="text-center">
        <h3>Unsere Kunden sagen</h3>
      </div>
      <div className="container">
        {' '}
        <div className="swiper-container">
          <div className="swiper-prev">
            <img src="img/icons/prev.svg" alt="prev" />
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            navigation={{
              nextEl: '.swiper-next',
              prevEl: '.swiper-prev',
            }}
          >
            {props.data
              ? props.data.map((d, i) => (
                  <SwiperSlide key={i}>
                    <div className="review-card">
                      <div className="review-logo">
                        <img src={d.img} alt="companyLogo" />
                      </div>
                      <h6 className="review-company">{d.company}</h6>{' '}
                      <img
                        className="quote-top"
                        src="img/icons/quote.svg"
                        alt="quoteIcon"
                      />
                      <p className="review-text">{d.text}</p>{' '}
                      <h6 className="review-position">{d.name}</h6>{' '}
                    </div>
                  </SwiperSlide>
                ))
              : 'Loading...'}{' '}
          </Swiper>
          <div className="swiper-next">
            <img src="img/icons/next.svg" alt="next" />
          </div>
        </div>
      </div>
    </div>
  );
};
