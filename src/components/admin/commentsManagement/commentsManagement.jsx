import { useState, useEffect } from 'react';
import {getCommitsList} from '../../../services/firebase'
import Comment from './Comment';
import axios from 'axios';
import './commetnsManagement.scss'
import {editUserCommentAdmin} from '../../../services/firebase'
  

const CommentsManagementAdmin = () => {

  const [commentsId, setCommentsId] = useState([''])
  const [comments, setComments] = useState([''])
  const [cards, setCards] = useState([])

  useEffect(() => { getCommitsList()
    .then((data) => {
        const dataList = data
        setComments(Object.values(dataList))
        setCommentsId(Object.keys(dataList))
    })
    .catch((error) => {
        console.error(error)
    })
    fetchCards()
  },[])

  const deleteComment = (idComment) => {
  editUserCommentAdmin(idComment)
  }

  async function fetchCards() {
    const cards = await axios.get('https://kaori318.github.io/site/cards.json')
    setCards(cards.data)
}

  console.log(comments, cards)
    return (
      <div className="comments__container">
        <div className="comments__sort"><p>Сортировать по:</p></div>
        <div className='comments__list'>
          {comments.length>0 && cards.length>0
            ? comments.map((com, i) =>
              <div className='comment' key={i}> 
                <Comment comment={com} id={commentsId[i]} cardsComments={cards} card={com.card} idComment={deleteComment}/>
              </div>)
            : <h1 style={{textAlign:'center'}}>Загрузка...</h1>
          }  
        </div>
      </div>
    )
  }

  export default CommentsManagementAdmin