import React from 'react';
import "./World.scss";
import image1 from "../../assets/images/image1.jpeg"
import { Link } from 'react-router-dom';
import rasm1 from "../../assets/images/rasm1.jpeg";
import rasm2 from "../../assets/images/rasm2.jpeg";
import rasm3 from "../../assets/images/rasm3.jpeg";
import rasm4 from "../../assets/images/rasm4.jpeg";
import cardsImg1 from "../../assets/images/cardsImg1.jpeg"
import cardsImg2 from "../../assets/images/cardsImg2.jpeg"
import cardsImg3 from "../../assets/images/cardsImg3.jpeg"
import cardsImg4 from "../../assets/images/cardsImg4.jpeg"

const World = () => {
  return (
    <div className='world'>
        <div className='container'>
            <div className='world__container'>
                <div className='world__left__side'>
                    <h3 className='world__left__heading'>Dunyo</h3>
                    <span className='world__left__span'></span>

                    <div className='world__inside__left'>
                        <div className='world__inside__left__wrapper'>
                            <Link className='world__inside__left__link'>
                                <img className='world__inside__left__img' src={image1} alt="" />
                                <p className='world__inside__left__text'>Firibgarlikda ayblanayotgan Tramp, drenajdan chiqqan o‘lik delfinlar, bozordagi ulkan sakkizoyoq — 3-oktyabr suratlari</p>
                            </Link>
                            <p className='world__inside__left__data'>23:00 / 03.10.2023</p>
                            <p className='world__inside__left__text1'>Yaman poytaxti Sana shahrida Xalqaro qahva kuni nishonlandi</p>
                        </div>

                        <ul className='world__inside__right__wrapper'>
                            <li className='world__inside__right__item'>
                                <div className='world__inside__right__info'>
                                <Link>
                                    <img className='world__inside__right__img' src={rasm1} alt="" />
                                </Link> 
                                <div className='world__inside__right__item__wrapper'>
                                    <p className='world__inside__right__text'>Nepalda kuchli zilzila sodir bo‘ldi. Jarohatlanganlar bor (video)</p>
                                    <p className='world__inside__right__data'>23:00 / 03.10.2023</p>
                                  </div>  
                                </div> 
                            </li> 
                            <li className='world__inside__right__item'>
                                <div className='world__inside__right__info'>
                                <Link>
                                    <img className='world__inside__right__img' src={rasm2} alt="" />
                                </Link> 
                                <div className='world__inside__right__item__wrapper'>
                                    <p className='world__inside__right__text'>Tan olinmagan Tog‘li Qorabog‘ Respublikasi sobiq prezidentlari hibsga olindi</p>
                                    <p className='world__inside__right__data'>22:00 / 03.10.2023</p>
                                  </div>  
                                </div> 
                            </li> 
                            <li className='world__inside__right__item'>
                                <div className='world__inside__right__info'>
                                <Link>
                                    <img className='world__inside__right__img' src={rasm3} alt="" />
                                </Link> 
                                <Link className='world__inside__right__item__wrapper' style={{textDecoration: "none"}}>
                                    <p className='world__inside__right__text'>Britaniya hukumati xorijdagi qamoqxonalarni ijaraga olishga qaror qildi</p>
                                    <p className='world__inside__right__data'>21:00 / 03.10.2023</p>
                                  </Link>  
                                </div> 
                            </li> 
                            <li className='world__inside__right__item'>
                                <div className='world__inside__right__info'>
                                <Link>
                                    <img className='world__inside__right__img' src={rasm4} alt="" />
                                </Link> 
                                <div className='world__inside__right__item__wrapper'>
                                    <p className='world__inside__right__text'>Nepalda kuchli zilzila sodir bo‘ldi. Jarohatlanganlar bor (video)</p>
                                    <p className='world__inside__right__data'>23:00 / 03.10.2023</p>
                                  </div>  
                                </div> 
                            </li> 
                        </ul>
                    </div>
                    <Link className='world__left__bottom__link'>DUNYO – ENG SO‘NGGI XABARLARI</Link>
                </div>

                <div className='world__right__side'>
                    <h3 className='world__right__heading'>Tavsiya etamiz</h3>
                    <span className='world__right__span'></span>

                    <ul className='world__right__list'>
                        <li className='world__right__item'>
                            <Link>
                                <img className='world__right__img' src={cardsImg1} alt="" />
                            </Link>

                            <Link className='world__right__list__wrapper' style={{textDecoration: "none"}}>
                                <p className='world__right__list__text'>Firibgarlikda ayblanayotgan Tramp, drenajdan chiqqan o‘lik delfinlar, bozordagi ulkan sakkizoyoq — 3...</p>
                                <p className='world__right__list__data'>23:00 / 03.10.2023</p>
                            </Link>
                        </li>
                        <li className='world__right__item'>
                            <Link>
                                <img className='world__right__img' src={cardsImg2} alt="" />
                            </Link>

                            <Link className='world__right__list__wrapper' style={{textDecoration: "none"}}>
                                <p className='world__right__list__text'>“Oyiga 80-100 mln so‘mlik dorilar sotilib, o‘zaro taqsimlab kelingan”. “Dok-1 Maks” sudida..</p>
                                <p className='world__right__list__data'>217:00 / 03.10.2023</p>
                            </Link>
                        </li>
                        <li className='world__right__item'>
                            <Link>
                                <img className='world__right__img' src={cardsImg3} alt="" />
                            </Link>

                            <Link className='world__right__list__wrapper' style={{textDecoration: "none"}}>
                                <p className='world__right__list__text'>Farg‘onada tuman bandlikka ko‘maklashish bo‘limi boshlig‘i YTHga uchrab, shifoxonaga...</p>
                                <p className='world__right__list__data'>213:00 / 03.10.2023</p>
                            </Link>
                        </li>
                        <li className='world__right__item'>
                            <Link>
                                <img className='world__right__img' src={cardsImg4} alt="" />
                            </Link>

                            <Link className='world__right__list__wrapper' style={{textDecoration: "none"}}>
                                <p className='world__right__list__text'>Tug‘ilgan kunida yonib ketgan yigit, Quddusdagi Yig‘i devori, bir daqiqalik sukut saqlayotgan...</p>
                                <p className='world__right__list__data'>222:00 / 02.10.2023</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default World