import React, { useState, useEffect } from 'react';
import './Reviews.scss'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const Review = ({ review, cards}) => {

    const [cardIndex, setCardIndex] = useState('')
    //const [reviewImg, setReviewsImg] = useState(cardIndex.img)
    
 //console.log(reviewImg)

    useEffect(() => {
        getIndex()
      },[review.card])
      

    function getIndex() {
        const card = review.card
        const index = cards.findIndex(el => el.name === card);
        setCardIndex(cards[index])
    }

    console.log(cardIndex)
    return (       
        <div className='review'>
            <div className='review__body'>
                <div className="review__card">
                    {/* <img
                        src={cardIndex}
                        alt={review.card}
                    /> */}
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