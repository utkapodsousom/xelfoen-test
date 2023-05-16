import { Link } from 'react-router-dom';

import cart from '../assets/icons/cart.svg';
import fav from '../assets/icons/fav.svg';

const Header = (props) => {
  return (
    <header className='header'>
      <Link to='/' className="header__logo">QPICK</Link>
      <div className="header__user-area">
        <button type='button' className='user-action'>
          <img src={fav} alt="" className='user-action__icon' />
          <span className='user-action__number'>2</span>
        </button>
        <Link to='/cart' type='button' className='user-action'>
          <img src={cart} alt="" className='user-action__icon' />
          {props.quantity ? <span className='user-action__number'>{props.quantity}</span>: ''}
        </Link>
      </div>
    </header>
  );
};

export default Header;
