import React, { useState, useEffect } from 'react';
import './Reviews.scss'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import axios from 'axios'



const Review = ({review}) => {

   const [cardModal, setCardModal] = useState('')
  
   useEffect(() => {
    getCardId()
   },[])
  
    async function getCardId() {
        const cards = await axios.get('https://kaori318.github.io/site/cards.json')
        const card = review.card
        const index = cards.data.findIndex(el => el.name == card);
        setCardModal(cards.data[index])
    }

    return (       
        <div className='review'>
            <div className='review__body'>
                <div className="review__card">
                    <img
                        src={cardModal.img}
                        alt={cardModal.title} />
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