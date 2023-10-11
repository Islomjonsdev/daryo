import React from 'react';
import "./FooterBottom.scss";
import { GiSmartphone } from "react-icons/gi"
import { Link } from 'react-router-dom';

const FooterBottom = () => {
  return (
    <div className='footer__bottom'>
        <div className='container'>
            <div className='footer__botton__container'>
                <ul className="footer__bottom__left">
                    <li className='footer__bottom__left__item'>
                        <p className='footer__bottom__left__text'>© «Simple Networking Solutions» MChJ, 2013–2023</p>
                    </li>
                    <li className='footer__bottom__left__item'>
                        <p className='footer__bottom__left__item__num'>18+</p>
                        <p className='footer__bottom__left__text'>Yosh bo‘yicha cheklov</p>
                    </li>
                    <li className='footer__bottom__left__item'>
                        <GiSmartphone style={{color: "#bbbbbb"}}/>
                        <p className='footer__bottom__left__text'>Xato topdingizmi? Ctrl+Enter’ni bosing</p>
                    </li>
                </ul>

                <ul className='footer__bottom__right'>
                    <li className='footer__bottom__right__item'>
                        <Link className='footer__bottom__right__text'> Foydalanish shartlari</Link>
                    </li>
                    <li className='footer__bottom__right__item'>
                        <Link className='footer__bottom__right__text'> Maxfiylik siyosati</Link>
                    </li>
                    <li className='footer__bottom__right__item'>
                        <Link className='footer__bottom__right__text'>Reklama</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FooterBottom