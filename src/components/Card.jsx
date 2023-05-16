import RatingIcon from '../assets/icons/star.svg';

const Card = (props) => {
  const getLocalePrice = (price) => price.toLocaleString('ru');

  return (
    <div className={`product ${props.className}`}>
      <a href="#" className='product__content'>
        <div className='product__image'>
          <img src={props.data.img} alt="" />
        </div>
        <div className='product__row'>
          <span className='product__name'>{props.data.title}</span>
          <div className='product__price'>
            <span className='product__price-value'>{`${getLocalePrice(props.data.price)} \u20BD`}</span>
            {props.data.pricePromo && <span className='product__price-value--old'>{`${getLocalePrice(props.data.pricePromo)} \u20BD`}</span>}
          </div>
        </div>
      </a>
      <div className='product__row'>
        <p className='product__rating'><img src={RatingIcon} alt="" /><span className='product__rating-value'>{props.data.rate}</span></p>
        <button className='product__button' type='button' onClick={props.handleClick}>Купить</button>
      </div>
    </div>
  );
};

export default Card;
