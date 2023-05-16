import { Link } from 'react-router-dom';

import LangIcon from '../assets/icons/lang.svg';
import VKIcon from '../assets/icons/vk.svg';
import TelegaIcon from '../assets/icons/telega.svg';
import WAIcon from '../assets/icons/wa.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <div className='footer__col'>
          <Link to='/' className="header__logo">QPICK</Link>
        </div>
        <div className='footer__col footer__col--2'>
          <menu className='footer__menu menu'>
            <li className='menu__item'>
              <a href="#" className='menu__link'>Избранное</a>
            </li>
            <li className='menu__item'>
              <a href="#" className='menu__link'>Корзина</a>
            </li>
            <li className='menu__item'>
              <a href="#" className='menu__link'>Контакты</a>
            </li>
            <li className='menu__item'>
              <a href="#" className='menu__link'>Условия сервиса</a>
            </li>
            <li className='footer__lang-switch menu__item menu__item--last'>
              <img src={LangIcon} alt="" />
              <button type="button" data-lang='kz' className='menu__button'>Каз</button>
              <button type="button" data-lang='ru' className='menu__button menu__button--current'>Рус</button>
              <button type="button" data-lang='en' className='menu__button'>Eng</button>
            </li>
          </menu>
        </div>
        <div className='footer__col'>
          <ul className='footer__socials socials'>
            <li className='socials__item'><a href="#" className='socials__link'><img src={VKIcon} alt="" /></a></li>
            <li className='socials__item'><a href="#" className='socials__link'><img src={TelegaIcon} alt="" /></a></li>
            <li className='socials__item'><a href="#" className='socials__link'><img src={WAIcon} alt="" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
