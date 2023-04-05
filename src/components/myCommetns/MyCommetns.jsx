import { editUserCommentAccount } from '../../services/firebase'
import { useAuth } from '../../hooks/use-auth'
import deleteImg from '../../assets/delete_1.png'
import './myComments.scss'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux'
import { deleteAuthComment } from '../../store/auth/action'

const MyCommetns = () => {
  const { id, comments } = useAuth()
  const dispatch = useDispatch()

  const handleDeleteComment = key => {
    editUserCommentAccount(id, key)
    dispatch(deleteAuthComment(key))
  }

  return (
    <div className="myComments">
      <h3>Мои отзывы</h3>
      { (Object.keys(comments).length !== 0) ?  
        <div className="myComments__list">
          {
            Object.keys(comments).map(key => (
              <div className="myComments__item" key={key}>

                <div className="myComments__desc">
                  <div className="myComments__desc_info">
                    <div className="myComments__img">
                      <img 
                        src={comments[key].card?.img} 
                        alt={comments[key].card?.name}/>
                    </div>
                    <div className="myComments__desc_info__text">
                      <p className="myComments__desc-date">{comments[key].date}</p>
                      <p className="myComments__desc-name">{comments[key].name}</p>
                      <div className="myComments__desc-rating">
                        <Box className='comment__rating-box' sx={{ '& > legend': { mt: 2 }, }}>
                          <Rating className='comment__rating' name="read-only" value={comments[key].rating} readOnly />
                        </Box>
                      </div>
                    </div>
                  </div> 
                  <p className="myComments__desc-text">{comments[key].comment}</p>
                </div>
                <button className="myComments__delete" onClick={() => handleDeleteComment(key)}>
                  <img src={deleteImg} alt="delete img" height="30"/>
                </button>
              </div>
            ))
          }
        </div>
      : 
      <div className="myComments__no" >
        <p className="myComments__no__title" >У&nbsp;вас ещё нет отзывов(</p>
        <p className="myComments__no__text" >Оставьте свой первый отзыв!</p> 
      </div>}
    </div>
  )
}

export default MyCommetns