import React from 'react';
import "./Reviews.scss"
import { useState, useEffect } from 'react';
import Review from './Review';
import {getCommitsList} from '../../services/firebase'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";


const Reviews = () => {

    const [reviews, setReviews] = useState([''])


    useEffect(() => { getCommitsList()
        .then((data) => {
            const dataList = data
            setReviews(Object.values(dataList))
        })
        .catch((error) => {
            console.error(error)
        })
    }, [])

    return (
        <div className="reviews container">
            <h1 className="reviews__header">ОТЗЫВЫ</h1>
    <Swiper
    modules={[Navigation, Autoplay]}
    navigation={true}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop="true"
      className="mySwiper"
    >
        {reviews.map((review, i) =>
            <SwiperSlide key={i}>
                <Review review={review}/>
            </SwiperSlide>)
        }
    </Swiper>
        </div>
    );
};

export default Reviews;