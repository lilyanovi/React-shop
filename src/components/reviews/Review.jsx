import React, { useState, useEffect } from 'react';
import './Reviews.scss'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const Review = ({ review, cardsReview, cardReview}) => {

    const [cardIndex, setCardIndex] = useState('')
    const [rating, setRating] = useState(review.rating)
    const [cards, setCards] = useState(cardsReview)

    useEffect(() => {
       getIndex()
      },[cardsReview])
      
    function getIndex() {
        const card = cardReview
        const index = cards.findIndex(el => el.name === card);
        setCardIndex(cards[index])
    }

    return (       
        <div className='review'>
            <div className='review__body'>
                <div className="review__card">
                    <img
                        src={cardIndex.img}
                        alt={review.card}
                    />
                </div>
                <div className='review__text'>
                    <h2>
                        {review.name}
                    </h2>
                    <Box sx={{ '& > legend': { mt: 2 }, }}>
                        <Rating name="read-only" value={review.rating} readOnly /> 
                    </Box>
                    <p>{review.comment}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;