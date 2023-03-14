import './commentUser.scss'
import  StarRating from '../../ui/StarRating'
import SelectImpression from '../selectImpression/SelectImpression'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addComment } from '../../store/comments/actions'
import { selectCard } from '../../store/card/actions'

const CommentUser = () => {
  const [rating, setRating] = useState(0)
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const card = useSelector(store => store.card.name)

  const dispatch = useDispatch()

  const selectRating = value => {
    setRating(value)
  }

  const handleSend = () => {
    if (card === '' || name === '' || comment === '' || rating === 0) {
      return
    }
    let commentObj = {
      name,
      rating,
      comment,
      card
    }
    dispatch(addComment(commentObj))
    setRating(0)
    setComment('')
    setName('')
    dispatch(selectCard({}))
  }

  return (
    <div className="commentUser">
      <h3>Здесь Вы можете поделиться своими впечатлениями</h3>
      <div className="commentUser__box">
        <div className="commentUser__item">
          <p className="commentUser__item-text">Ваша оценка: </p>
          <div className="commentUser__rating">
            <StarRating rating={rating} selectRating={selectRating}/>
          </div>
        </div>
        <div className="commentUser__item">
          <p className="commentUser__item-text">Ваше имя: </p>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        </div>
        <div className="commentUser__item">
          <p className="commentUser__item-text">Название: </p>
          <div className="commentUser__item-select">
            <SelectImpression/>
          </div>
        </div>
        <div className="commentUser__item comment-textarea">
          <p className="commentUser__item-text">Отзыв: </p>
          <textarea
            name="comment"
            id="commentId"
            cols="57"
            rows="10"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
        </div>
      </div>
      <button className="personalData__btn-save" onClick={handleSend}>Отправить</button>
    </div>
  )
}

export default CommentUser