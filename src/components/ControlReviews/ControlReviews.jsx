import './ControlReviews.scss';
import trash from '../../assets/delete.png'
import horse from '../../assets/horse.png'
import star from '../../assets/star.png'


export default function ControlReviews () {

  return (
    <>
    <p className = 'reviews_bigText'>Управление отзывами</p>
    
    <div className = 'reviews_filter'>Сортировать по: <button className = 'reviews_filter_button'></button><span className = 'reviews_filter_smallText'>дате</span>
    <div className = 'reviews_navBar'>
      <div className = 'reviews_navBar_buttton'>Управление заявками</div>
      <div className = 'reviews_navBar_buttton'>Управление отзывами</div>
      <div className = 'reviews_navBar_buttton'>Управление подписками</div>
      <div className = 'reviews_navBar_smallButton'>Выход</div>
    </div>
    </div>
    <div className = 'reviews_container'>
      <div className = 'reviews_card'>
        <div className = 'reviews_card_img'><img src={horse} alt="horse" /></div>
        <div className = 'reviews_card_container'>
        <div className = 'reviews_card_data'>20.02.2023</div>
        <div className = 'reviews_card_text'>Кристина</div>
        <div className = 'reviews_card_starContainer'>
          <div><img src={star} alt="star" /></div>
          <div><img src={star} alt="star" /></div>
          <div><img src={star} alt="star" /></div>
          <div><img src={star} alt="star" /></div>
          <div><img src={star} alt="star" /></div>
        </div>
        <div className = 'reviews_card_smallText'>Получила от друзей в подарок. И когда я узнала, что внутри - я обалдела. Давно хотела сделать что-то безумное!  
          Я пригласила своего молодого человека. Мы круто провели время вместе и получили замечательные эмоции. Это полный восторг!</div>
        </div>
        <div className = 'reviews_card_trash'><img src={trash} alt="trash" /></div>
      </div>
      <div className = 'reviews_card'>
        <div className = 'reviews_card_img'><img src={horse} alt="horse" /></div>
        <div className = 'reviews_card_container'>
        <div className = 'reviews_card_data'>20.02.2023</div>
        <div className = 'reviews_card_text'>Кристина</div>
        <div className = 'reviews_card_starContainer'>
          <div><img src={star} alt="star" /></div>
          <div><img src={star} alt="star" /></div>
          <div><img src={star} alt="star" /></div>
          <div><img src={star} alt="star" /></div>
          <div><img src={star} alt="star" /></div>
        </div>
        <div className = 'reviews_card_smallText'>Получила от друзей в подарок. И когда я узнала, что внутри - я обалдела. Давно хотела сделать что-то безумное!  
          Я пригласила своего молодого человека. Мы круто провели время вместе и получили замечательные эмоции. Это полный восторг!</div>
        </div>
        <div className = 'reviews_card_trash'><img src={trash} alt="trash" /></div>
      </div>
    </div>
    </>
  )
}