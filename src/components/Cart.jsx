import TrashIcon  from '../assets/icons/bin.svg';

const Cart = (props) => {
  const totalPrice = props.cartItems.reduce((acc, { price, qty }) => acc += price * qty, 0);

  const isCartEmpty = () => props.cartItems.length === 0;

  return (
    <>
      <div className='cart'>
        {isCartEmpty() ? <p className='cart__text'>В корзине нет товаров</p> : props.cartItems.map((item) => {
          return (
            <div className='cart__item item card' key={item.id}>
              <button type="button" className='item__delete' onClick={() => props.removeAllById(item.id)}><img src={TrashIcon} alt="" /></button>
              <div className='item__inner'>
                <div className='item__product'>
                  <div className='item__image'>
                    <img src={item.img} alt="" />
                  </div>
                  <div className='item__info'>
                    <p className='item__name'>{item.title}</p>
                    <p className='item__price'>{`${item.price.toLocaleString('ru')} \u20BD`}</p>
                  </div>
                </div>
                <div className='item__row'>
                  <div className='item__qty-ctrl'>
                    <button type="button" className='item__qty-btn' onClick={() => props.removeFromCart(item.id)}>-</button>
                    <span className='item__qty'>{item.qty}</span>
                    <button type="button" className='item__qty-btn' onClick={() => props.addToCart(item)}>+</button>
                  </div>
                  <span className='item__total'>{`${(item.price * item.qty).toLocaleString('ru')} \u20BD`}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='checkout card'>
        <div className='checkout__inner'>
          <div className='checkout__row'>
            <span className='checkout__text'>ИТОГО</span>
            <span className='checkout__total'>{`${totalPrice.toLocaleString('ru')} \u20BD`}</span>
          </div>
          <button type="button" className='checkout__button' disabled={isCartEmpty()}>Перейти к оформлению</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
