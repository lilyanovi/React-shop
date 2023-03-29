import { getCommitsUserList, editUserCommentAccount } from '../../services/firebase'
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/use-auth'
import deleteImg from '../../assets/delete_1.png'
import './myComments.scss'


import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const MyCommetns = () => {
  const [comments, setComments] = useState({})
  const { id } = useAuth()

  useEffect(() => {
    getCommitsUserList(id)
      .then(data => {
        setComments(data)
      })
  }, [])

  console.log(comments)

  const handleDeleteComment = key => {
    editUserCommentAccount(id, key)
  }

  return (
    <div className="myComments">
      <h3>Мои отзывы</h3>
      { comments ?  
        <div className="myComments__list">
          {
            Object.keys(comments).map(key => (
              <div className="myComments__item" key={key}>
                <div className="myComments__img">Photo</div>
                <div className="myComments__desc">
                  <p className="myComments__desc-name">{comments[key].name}</p>
                  <p className="myComments__desc-text">{comments[key].comment}</p>
                </div>
                <button className="myComments__delete" onClick={() => handleDeleteComment(key)}>
                  <img src={deleteImg} alt="delete img" height="30"/>
                </button>
              </div>
            ))
          }
        </div>
      : 'Нет отзывов' }
    </div>
  )
}

export default MyCommetns