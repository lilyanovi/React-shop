
const StarRating = ({ rating, selectRating }) => {
  const numbers = [1, 2, 3, 4, 5]

  const handleClick = value => {
    selectRating(value)
  }

  return (
    <div>
      {
        numbers.map(star => (
          <i
            className={star <= rating ? 'fas fa-star stars stars-active' : 'fas fa-star stars'}
            key={star}
            data-num={star}
            onClick={() => handleClick(star)}
          ></i>
        ))
      }
    </div>
  );
}

export default StarRating
