import React from 'react';
import "./Locally.scss";
import cardsJson from "../../api/dummiy-data.cards.json";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import images1 from "../../assets/images/imges1.jpeg"
import metanImg from "../../assets/images/metan.jpeg"
import locallyJson from "../../api/dummiy-data.locally.json"

const Locally = () => {
  return (
    <div className='locally'>
        <div className='container'>
            <div className='locally__container'>
                <div className='locally__left__side'>
                    <h3 className='locally__left__heading'>Mahalliy</h3>
                    <span className='locally__left__span'></span>

                    <div style={{display: "flex", gap: "40px"}}>
                        <ul className='locally__left__list'>
                            {
                                cardsJson.map(cards => 
                                    <li className='locally__left__item' key={uuidv4()}>
                                        <Link style={{textDecoration: "none"}}>
                                            <img className='locally__left__item__img' src={cards.cardsImg} alt="" />
                                        </Link>
                                        <div className='locally__left__item__wrapper'>
                                            <p className='locally__left__item__text'>{cards.cardsTitle}</p>
                                            <p className='locally__left__item__data'>{cards.cardsData}</p>
                                        </div>
                                    </li>    
                                )
                            }
                        </ul>

                        <div className='locally__right__wrapper'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='locally__right__wrapper__img' src={images1} alt="" />
                                <p className='locally__right__wrapper__title'>O‘zbekistonda 5-oktyabr kuni havo harorati 34 darajagacha ko‘tariladi</p>
                            </Link>
                            <p className='locally__right__wrapper__date'>10:00 / 04.10.2023</p>
                            <p className='locally__right__wrapper__text'>Respublikaning ayrim hududlarida yomg‘ir yog‘ishi mumkin </p>
                        </div>
                    </div>

                    <Link className='locally__left__bottom__span'>DUNYO – ENG SO‘NGGI XABARLARI</Link>
                </div>

                <div className='locally__right__side'>
                    <h3 className='locally__right__side__heading'>MOLIYA</h3>
                    <span className='locally__right__side__span'></span>

                    <div className='locally__right__side__info'>
                        <Link style={{textDecoration: "none"}}>
                            <img className='locally__right__side__info__img' src={metanImg} alt="" />
                            <p className='locally__right__side__info__text'>Zapravkalarda metan va Ai-92 benzini narxi oshgani aytilmoqda</p>
                        </Link>
                        <p className='locally__right__side__info__data'>20:00 / 01.10.2023</p>
                    </div>

                    <ul className='locally__right__side__list'>
                        {
                            locallyJson.map(locallyCards => 
                                <li className='locally__right__side__item' key={uuidv4()}>
                                    <div>
                                        <Link className='locally__right__side__item__link' style={{textDecoration: "none"}}>{locallyCards.title}</Link>
                                        <p className='locally__right__side__item__data'>{locallyCards.data}</p>
                                    </div>
                                    <Link>
                                        <img className='locally__right__side__item__image' src={locallyCards.image} alt="" />
                                    </Link>
                                </li>    
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Locally