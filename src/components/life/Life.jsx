import React from 'react';
import { Link } from 'react-router-dom';
import "./Life.scss";
import { v4 as uuidv4 } from 'uuid';
import garryImg from "../../assets/images/garry.jpeg";
import garryImg1 from "../../assets/images/garry2.jpeg";
import lifeJson from "../../api/dummiy-data.life.json";
import lifejson2 from "../../api/dummiy-data.life2.json";
import readJson from "../../api/dummiy-data.read.json"

const Life = () => {
  return (
    <div className='life'>
        <div className='container'>
            <div className='life__container'>
                <div className='life__left__side'>
                    <h2 className='life__left__heading'>Lifestyle</h2>
                    <span className='life__left__span'></span>

                    <div className='life__left__wrapper'>
                        <div className='life__left__wrapper__info'>
                            <Link className='life__left__wrapper__info__link'>
                                <img className='life__left__wrapper__info__img' src={garryImg} alt="" />
                            </Link>

                            <ul className='life__left__wrapper__list'>
                                {
                                    lifeJson.map(life => 
                                        <li className='life__left__wrapper__item' key={uuidv4()}>
                                            <Link>
                                                <img className='life__left__wrapper__item__img' src={life.lifeImg} alt="" />
                                            </Link>

                                            <div>
                                                <Link className='life__left__wrapper__item__title'>{life.lifeTitle}</Link>
                                                <p className='life__left__wrapper__item__data'>{life.lifeData}</p>
                                            </div>
                                        </li>    
                                    )
                                }
                            </ul>
                        </div>

                        <div className='life__right__wrapper__info'>
                            <Link className='life__right__wrapper__info__link'>
                                <img className='life__right__wrapper__info__img' src={garryImg1} alt="" />
                            </Link>
                            <ul className='life__right__wrapper__list'>
                                {
                                    lifejson2.map(life2 => 
                                        <li className='life__right__wrapper__item' key={uuidv4()}>
                                            <Link>
                                                <img className='life__right__wrapper__item__img' src={life2.lifeImage} alt="" />
                                            </Link>

                                            <div>
                                                <Link className='life__right__wrapper__item__title'>{life2.lifeText}</Link>
                                                <p className='life__right__wrapper__item__data'>{life2.lifeDate}</p>
                                            </div>
                                        </li>    
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                    <Link className='life__left__wrapper__link__bottom'>LAYFSTAYL – ENG SO‘NGGI XABARLARI</Link>
                </div>

                <div className='life__right__side'>
                    <h1 className='life__right__side__heading'>Ko‘p o‘qilganlar</h1>
                    <span className='life__right__side__span'></span>

                    <ul className='life__right__side__list'>
                        {
                            readJson.map(read => 
                                <li className='life__right__side__item'>
                                    <span className='life__right__side__item__span'></span>
                                   <div>
                                     <Link className='life__right__side__item__link'>{read.readTitle}</Link>
                                        <p className='life__right__side__item__data'>{read.readData}</p>
                                   </div>
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

export default Life