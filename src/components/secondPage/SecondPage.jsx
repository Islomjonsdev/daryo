import React from 'react';
import "./SecondPage.scss";
import secondImgLeft from "../../assets/images/secondImgLeft.jpeg";
import secondPageRight from "../../assets/images/secondPageRight.jpeg";
import secondPageRight2 from "../../assets/images/secondPageRight2.jpeg";
import secondPageRight3 from "../../assets/images/secondPageRight3.jpeg";
import secondPageRight4 from "../../assets/images/secondPageRight4.jpeg";
import secondPageRight5 from "../../assets/images/secondPageRight5.jpeg";
import secondPageRight6 from "../../assets/images/secondPageRight6.jpeg";
import secondPageRight7 from "../../assets/images/secondPageRight7.jpeg";   
import secondPageRight9 from "../../assets/images/secondPageRight9.jpeg";
import secondPageRight10 from "../../assets/images/secondPageRight10.jpeg";
import secondPageRight11 from "../../assets/images/secondPageRight11.jpeg";
import secondPageRight12 from "../../assets/images/secondPageRight12.jpeg";
import secondPageRight13 from "../../assets/images/secondPageRight13.jpeg";
import secondPageRight14 from "../../assets/images/secondPageRight14.jpeg";
import secondPageRight15 from "../../assets/images/secondPageRight15.jpeg";
import secondPageRight16 from "../../assets/images/secondPageRight16.jpeg";
import itemMoneyImg from "../../assets/images/itemmoneyImg.jpeg"
import secondRightjson from "../../api/dummiy-data.secondPageLists.json";
import itemJson from "../../api/dummiy-data.itemList.json"
import { Link } from 'react-router-dom';
import { FiRefreshCw } from "react-icons/fi"
import { v4 as uuidv4 } from 'uuid';
import Cards from '../cards/Cards';

const SecondPage = () => {
  return (
    <div className='second__page'>
        <div className='container'>
            <div className='second__page__container'>
                <div className='second__page__left__side'>
                    <div style={{display: "flex", gap: "20px", alignItems: "center", marginBottom: "30px"}}>
                       <span className='second__page__left__span'></span>
                        <h1 className='second__page__left__heading'>SO‘NGGI YANGILIKLAR</h1>
                    </div>

                    <div className='second__page__left__side__wrapper'>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondImgLeft} alt="" />
                                <p className='second__page__left__side__title'>Toshkentdagi issiqlik qozonxonalari qishga qanchalik tayyor?</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 21:20</p>
                            <p className='second__page__left__side__text'>4-oktyabr kuni Toshkent issiqlik taʼminoti operatori (issiq suv va isitish) Veolia Energy Tashkent kompaniyasi binosida isitish mavsumiga tayyorgarlik</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight} alt="" />
                                <p className='second__page__left__side__title'>Qatar O‘zbekiston fuqarolari uchun 30 kunlik vizasiz rejim joriy qildi</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 13:42</p>
                            <p className='second__page__left__side__text'>Qatarga vizasiz kirishning bir qancha shartlari bor</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight2} alt="" />
                                <p className='second__page__left__side__title'>Tramp o‘zini Vakillar palatasi spikeri lavozimiga nomzod qilib ko‘rsatdi</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 14:02</p>
                            <p className='second__page__left__side__text'>Sobiq prezidentning aytishicha, buni undan “Kongressdagi do‘stlari” so‘ragan</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight3} alt="" />
                                <p className='second__page__left__side__title'>Qashqadaryoda g‘aznachilar kattasi paxta uchun 1 mln so‘mdan yig‘ayotgani aytilgan xabar rad etildi</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 13:40</p>
                            <p className='second__page__left__side__text'>“Ushbu yolg‘on ma’lumotni tarqatgan shaxs dastlabki o‘rganishda aniqlandi va asosli hujjatlar prokuraturaga taqdim etildi”, — deydi Ahror Sodiqov</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight4} alt="" />
                                <p className='second__page__left__side__title'>Xanchjou—2022. Akbar Jo‘rayev kumush, Ruslan Nuriddinov bronza medalini qo‘lga kiritdi</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 13:38</p>
                            <p className='second__page__left__side__text'>Og‘ir atletika bo‘yicha O‘zbekiston terma jamoasi a’zolari Osiyo o‘yinlarining sovrindoriga aylandi</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight5} alt="" />
                                <p className='second__page__left__side__title'>Siz o‘ylaganingizdek foydali emas: limonli choyning siz bilmagan zararli jihatlari</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 13:31</p>
                            <p className='second__page__left__side__text'>Och qoringa limonli choy ichish ham tavsiya etilmaydi</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight6} alt="" />
                                <p className='second__page__left__side__title'>Namanganda bitta ohak sexi 7 mlrd so‘mlik gazdan noqonuniy foydalangani aniqlandi</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 13:26</p>
                            <p className='second__page__left__side__text'>Ushbu hajmdagi tabiiy gaz hozirgi kunda 23 ming 520 ta xonadonning bir oylik isteʼmoliga teng</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight7} alt="" />
                                <p className='second__page__left__side__title'>Jahon banki O‘zbekistonning YIM o‘sishi bo‘yicha prognozlarini yaxshiladi</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 13:15</p>
                            <p className='second__page__left__side__text'>Rossiyadan pul o‘tkazmalari kamayishi tufayli isteʼmol darajasi o‘sishi sekinlashadi</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight9} alt="" />
                                <p className='second__page__left__side__title'>O‘zbekiston klublaridan 2 nafar futbolchi OChL 2-tur ramziy terma jamoasiga kiritildi</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 13:12</p>
                            <p className='second__page__left__side__text'>Osiyo Chempionlar Ligasining 2-tur ramziy terma jamoasi e’lon qilindi</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight10} alt="" />
                                <p className='second__page__left__side__title'>Caviar meteorit parchasi bilan bezatilgan yangi iPhone’ni taqdim etdi (foto)</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 12:58</p>
                            <p className='second__page__left__side__text'>Ushbu smartfonlarning orqa tomoni 24 karatli tilla bilan qoplangan</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight11} alt="" />
                                <p className='second__page__left__side__title'>Toshkentda uch kishini AQSHga yuborish uchun 46 ming dollar olgan shaxs ushlandi </p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 12:36</p>
                            <p className='second__page__left__side__text'>U fuqarolarga yuqori lavozimda ishlovchi tanishlari yordamida Turkiya orqali yuborishni va’da qilgan</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight12} alt="" />
                                <p className='second__page__left__side__title'>Rossiya Xarkov va Odessaga hujum qildi. 10 yoshli bola halok bo‘ldi (foto, video)</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 12:20</p>
                            <p className='second__page__left__side__text'>Hujum oqibatida o‘nlab odamlar yaralandi, ko‘p qavatli uylar va mashinalar yonib ketdi</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight13} alt="" />
                                <p className='second__page__left__side__title'>O‘zbekistonda dam olish kunlari havo harorati yana ko‘tarilishni boshlaydi</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 12:15</p>
                            <p className='second__page__left__side__text'>Respublika bo‘yicha yana yog‘ingarchiliksiz ob-havo kuzatiladi</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight14} alt="" />
                                <p className='second__page__left__side__title'>“Kichkina ajdarho”dan tortib “Kung-fu tulpor”gacha: Jeki Chan ishtirokidagi eng yaxshi filmlar</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 12:14</p>
                            <p className='second__page__left__side__text'>Filmda Jeki karkidon minadigan sahna bo‘lishi kerak edi. Bu epizod rostan ham suratga olingan, biroq operator xatosi tufayli kadr buzilgan. Aktyorning...</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight15} alt="" />
                                <p className='second__page__left__side__title'>Putin Rossiyadan O‘zbekistonga gaz yetkazib berish qachon boshlanishini ma’lum qildi (video)</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 11:48</p>
                            <p className='second__page__left__side__text'>Rossiya prezidenti gaz eksporti Markaziy Osiyo mamlakatlari iqtisodiyoti uchun katta ahamiyatga ega ekanini ta’kidladi</p>
                        </div>
                        <div className='second__page__left__side__info'>
                            <Link style={{textDecoration: "none"}}>
                                <img className='second__page__left__side__img' src={secondPageRight16} alt="" />
                                <p className='second__page__left__side__title'>O‘zbekistonda chang bo‘ronlariga sabab bo‘luvchi omillar maʼlum qilindi</p>
                            </Link>
                            <p className='second__page__left__side__data'>BUGUN, 11:34</p>
                            <p className='second__page__left__side__text'>Omillar qatorida qurilish maydonlari sonining ortishi va ulardan chang va qum zarrachalarining havoga ko‘tarilishi ham keltirilgan</p>
                        </div>
                    </div>

                    <Link className='second__page__bottom__link'>
                        <FiRefreshCw style={{width: "20px", height: "20px"}}/>
                        KO‘PROQ YANGILIKLARNI YUKLASH
                    </Link>
                </div>

                <div className='second__page__right__side__wrapper'>
                    <ul className='second__page__right__side'>
                        {
                            secondRightjson.map(secondPage => 
                                <li className='second__page__right__side__item' key={uuidv4()}>
                                    <div>
                                        <Link className='second__page__right__side__link'>{secondPage.secondTitle}</Link>
                                        <p className='second__page__right__side__data'>{secondPage.secondData}</p>
                                    </div>
                                    <Link>
                                        <img className='second__page__right__side__img' src={secondPage.secondImg} alt="" />
                                    </Link>
                                </li>    
                            )
                        }
                    </ul>

                    <div className='second__page__right__side__info'>
                        <h3 className='second__page__right__side__info__heading'><h4 class="heading">Tavsiya etamiz</h4></h3>
                        <span className='second__page__right__side__info__span'></span>

                        <ul className='item__list'>
                            {
                                itemJson.map(item => 
                                    <li className='item__li' key={uuidv4()}>
                                        <Link>
                                            <img className='item__img' src={item.itemImg} alt="" />
                                        </Link>

                                        <div>
                                            <Link className='item__link'>{item.itemTitle}</Link>
                                            <p className='item__data'>{item.itemData}</p>
                                        </div>
                                    </li>    
                                )
                            }
                        </ul>
                    </div>

                    <div className='second__page__right__side__bottom'>
                        <h3 className='second__page__right__side__bottom__heading'>MOLIYA</h3>
                        <span className='second__page__right__side__bottom__span'></span>

                        <ul className='list__money'>
                            <li className='item__money'>
                                <Link style={{textDecoration: "none"}}>
                                    <img className='item__money__img' src={itemMoneyImg} alt="" />
                                    <p className='item__money__text'>O‘zbekiston ilk bor 4,25 trln so‘mlik yashil suveren xalqaro obligatsiyalarni London fond birjasida joylashtirdi</p>
                                </Link>
                                <p className='item__money__data'>10:00 / 06.10.2023</p>
                            </li>
                        </ul>
                        
                        <Cards />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondPage