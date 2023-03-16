import React, { useState, useEffect } from 'react';
import './Reviews.scss'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import axios from 'axios'



const Review = ({review}) => {

   const [cards, setCards] = useState([])
  
   useEffect(() => {
    fethCards()
   },[])
  
    async function fethCards() {
        const cards = await axios.get('https://kaori318.github.io/site/cards.json')
        const card = review.card
        const index = cards.data.findIndex(el => el.name === card);
        setCards(cards.data[index].img)
    }

    // console.log(cards)

    return (       
        <div className='review'>
            <div className='review__body'>
                <div className="review__card">
                    <img
                        src={cards}
                        alt={review.card}/>
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