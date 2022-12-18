import React from 'react';
import css from './Testimonials.module.css';
import Hero from '../../assets/testimonialHero.png'
import {Swiper , SwiperSlide} from 'swiper/react';
import { TestimonialsData } from '../../data/testimonials'
const Testimonials = () => {
    return (
        <div className={css.testimonials}>
            {/* Wrapper start */}
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>Seedily say has suitable disposal and boy . Exercise joy man children rejoiced</span>
                </div>

                <img src={Hero} alt="" />

                <div className={css.container}>
                    <span>100k</span>
                    <span>Happy customers with us</span>
                </div>
            </div>

            {/* Wrapper end */}

            <div className={css.review}>Reviews</div>

            {/* Testimonials */}
            <div className={css.carousel}>
                <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}
                className={css.tCarousel}
                breakpoints={{
                    856:{
                        slidesPerView:3
                    },
                    640:{
                        slidesPerView:2
                    },
                    0:{
                        slidesPerView:1
                    }
                }}
                >
                    {
                        TestimonialsData.map((testimonial , i) => (
                            <SwiperSlide>
                                <div className={css.testimonial}>
                                    <img src={testimonial.image} alt="" />
                                    <span>{testimonial.comment}</span>
                                    <hr />
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            {/* Testimonials end */}
        </div>
    );
};

export default Testimonials;