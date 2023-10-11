import React from 'react';
import { Link } from 'react-router-dom';
import HeroList from '../heroList/HeroList';
import "./Hero.scss";
import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpeg";
import img4 from "../../assets/images/img4.jpeg";
import img5 from "../../assets/images/img5.jpeg";
import img6 from "../../assets/images/img6.jpeg";
import img7 from "../../assets/images/img7.jpeg";
import img8 from "../../assets/images/img8.jpeg";
import img9 from "../../assets/images/img9.jpeg";
import img10 from "../../assets/images/img10.jpeg";

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            <div className='hero__container'>
                <div className='hero__left__side'>
                    <span className='hero__left__side__span'>
                        <div className='hero__left__wrapper'>
                            <a className='hero__left__link' href="/">MAXALLIY</a>
                            <Link className='hero__left__text'>O‘zbekistonda mahalliy yo‘nalishdagi poyezd chiptalari narxi 50 foizga, “Afrosiyob”niki esa 100 foizga oshiriladi</Link>
                        </div>
                    </span>
                    <HeroList />
                </div>

                <div className='hero__right__side'> 
                    <div className='hero__right__wrapper'>
                        <Link className='hero__right__link' to="/secondpage">So‘nggi yangiliklarga o‘tish</Link>
                    </div>
                    <span className='hero__right__span'></span>

                    <ul className='hero__right__list'>
                        <li className='hero__right__item'>
                            <div className='hero__right__item__link__wrapper'>
                                <Link className='hero__right__item__link'>Toshkentda Qatar amiri taʼsis etgan korrupsiyaga qarshi kurashda erishilgan yutuqlar...</Link>
                                <p className='hero__right__item__date'>KECHA, 23:15</p>
                            </div>
                            <Link className='hero__right__item__wrapper'>
                                <img className='hero__right__item__img' src={img1} alt="" />
                            </Link>
                        </li>
                        <li className='hero__right__item'>
                            <div className='hero__right__item__link__wrapper'>
                                <Link className='hero__right__item__link'>Firibgarlikda ayblanayotgan Tramp, drenajdan chiqqan o‘lik delfinlar, bozordagi ulkan...</Link>
                                <p className='hero__right__item__date'>KECHA, 23:10</p>
                            </div>
                            <Link className='hero__right__item__wrapper'>
                                <img className='hero__right__item__img' src={img2} alt="" />
                            </Link>
                        </li>
                        <li className='hero__right__item'>
                            <div className='hero__right__item__link__wrapper'>
                                <Link className='hero__right__item__link'>Nepalda kuchli zilzila sodir bo‘ldi. Jarohatlanganlar bor (video)...</Link>
                                <p className='hero__right__item__date'>KECHA, 23:05</p>
                            </div>
                            <Link className='hero__right__item__wrapper'>
                                <img className='hero__right__item__img' src={img3} alt="" />
                            </Link>
                        </li>
                        <li className='hero__right__item'>
                            <div className='hero__right__item__link__wrapper'>
                                <Link className='hero__right__item__link'>Prezidentning xorijiy tashriflaridan asosiy maqsad nimalar ekani aytildi..</Link>
                                <p className='hero__right__item__date'>KECHA, 22:57</p>
                            </div>
                            <Link className='hero__right__item__wrapper'>
                                <img className='hero__right__item__img' src={img4} alt="" />
                            </Link>
                        </li>
                        <li className='hero__right__item'>
                            <div className='hero__right__item__link__wrapper'>
                                <Link className='hero__right__item__link'>OCHL. “Al-Fayha” “Paxtakor” ustidan ishonchli hisobda g‘alaba qozondi...</Link>
                                <p className='hero__right__item__date'>KECHA, 22:55</p>
                            </div>
                            <Link className='hero__right__item__wrapper'>
                                <img className='hero__right__item__img' src={img5} alt="" />
                            </Link>
                        </li>
                        <li className='hero__right__item'>
                            <div className='hero__right__item__link__wrapper'>
                                <Link className='hero__right__item__link'>Instagram: Dilshodbek Kattabekov uylandi, Munisa Rizayeva onasining tug‘ilgan...</Link>
                                <p className='hero__right__item__date'>KECHA, 23:15</p>
                            </div>
                            <Link className='hero__right__item__wrapper'>
                                <img className='hero__right__item__img' src={img6} alt="" />
                            </Link>
                        </li>
                        <li className='hero__right__item'>
                            <div className='hero__right__item__link__wrapper'>
                                <Link className='hero__right__item__link'>Qozog‘istonda ko‘mir eksportiga qo‘yilgan taqiq uzaytirildi...</Link>
                                <p className='hero__right__item__date'>KECHA, 22:35</p>
                            </div>
                            <Link className='hero__right__item__wrapper'>
                                <img className='hero__right__item__img' src={img7} alt="" />
                            </Link>
                        </li>
                        <li className='hero__right__item'>
                            <div className='hero__right__item__link__wrapper'>
                                <Link className='hero__right__item__link'>Tan olinmagan Tog‘li Qorabog‘ Respublikasi sobiq prezidentlari hibsga olindi...</Link>
                                <p className='hero__right__item__date'>KECHA, 22:25</p>
                            </div>
                            <Link className='hero__right__item__wrapper'>
                                <img className='hero__right__item__img' src={img8} alt="" />
                            </Link>
                        </li>
                        <li className='hero__right__item'>
                            <div className='hero__right__item__link__wrapper'>
                                <Link className='hero__right__item__link'>Rossiyada urushdan qaytgan “vagnerchi” uyga o‘t qo‘yib, ayollarni yoqib yubordi...</Link>
                                <p className='hero__right__item__date'>KECHA, 22:10</p>
                            </div>
                            <Link className='hero__right__item__wrapper'>
                                <img className='hero__right__item__img' src={img9} alt="" />
                            </Link>
                        </li>
                        <li className='hero__right__item'>
                            <div className='hero__right__item__link__wrapper'>
                                <Link className='hero__right__item__link'>Britaniya hukumati xorijdagi qamoqxonalarni ijaraga olishga qaror qildi...</Link>
                                <p className='hero__right__item__date'>KECHA, 21:50</p>
                            </div>
                            <Link className='hero__right__item__wrapper'>
                                <img className='hero__right__item__img' src={img10} alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero