import React from 'react';
import "./HeroList.scss"
import { Link } from 'react-router-dom';
import heroBottomImg1 from "../../assets/images/heroBottomImg1.png"
import heroBottomImg2 from "../../assets/images/heroBottomImg2.jpeg"
import heroBottomImg3 from "../../assets/images/heroBottomImg3.jpg"
import heroBottomImg4 from "../../assets/images/heroBottomImg4.jpeg"
import heroBottomImg5 from "../../assets/images/heroBottomImg5.jpeg"

const HeroList = () => {
  return (
    <ul className='hero__bottom__list'>
        <li className='hero__bottom__item'>
            <Link className='hero__bottom__link'>
                <img className='hero__bottom__img' src={heroBottomImg1} alt="" />
                <p className='hero__bottom__text'>AKFA BUILD: Aquaterm ko‘rgazmasida suv...</p>
            </Link>
        </li>
        <li className='hero__bottom__item'>
            <Link className='hero__bottom__link'>
                <img className='hero__bottom__img' src={heroBottomImg2} alt="" />
                <p className='hero__bottom__text'>“Aktrisalikni tashlash haqida ham o‘ylaganman”. 48...</p>
            </Link>
        </li>
        <li className='hero__bottom__item'>
            <Link className='hero__bottom__link'>
                <img className='hero__bottom__img' src={heroBottomImg3} alt="" />
                <p className='hero__bottom__text'>Avstriya Gitlerning sobiq uyini tiklash uchun 20 mln...</p>
            </Link>
        </li>
        <li className='hero__bottom__item'>
            <Link className='hero__bottom__link'>
                <img className='hero__bottom__img' src={heroBottomImg4} alt="" />
                <p className='hero__bottom__text'>Farg‘onada tuman bandlikka ko‘maklashish bo‘li...</p>
            </Link>
        </li>
        <li className='hero__bottom__item'>
            <Link className='hero__bottom__link'>
                <img className='hero__bottom__img' src={heroBottomImg5} alt="" />
                <p className='hero__bottom__text'>Toshkentning ikki tumani hududida issiq suv ta’minoti...</p>
            </Link>
        </li>
    </ul>
  )
}

export default HeroList