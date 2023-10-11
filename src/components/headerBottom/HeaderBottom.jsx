import React, { useState } from 'react';
import "./HeaderBottom.scss"
import { Link } from 'react-router-dom';
import { BsMoon } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { changeLanguage } from 'i18next';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

const HeaderBottom = ({setIsSidebarActive}) => {
  const { t } = useTranslation()
  const [changeLang, setChangeLang] = useState(localStorage.getItem("lang"))
  const { i18n } = useTranslation()
  const changeWebSiteLang = (evt) => {
      i18n.changeLanguage(evt.target.value || "uz")
  }
  localStorage.getItem(("langs"))
  const langs = [
      "uz",
      "ru",
      "en"
  ]
  return (
    <div className='header__bottom'>
        <div className='container'>
            <div className='header__bottom__container'>
                <ul className='header__bottom__list'>
                    <li className='header__bottom__item'>
                        <Link className='header__bottom__link'>{t("local")}</Link>
                    </li>
                    <li className='header__bottom__item'>
                        <Link className='header__bottom__link'>{t("certralAsia")}</Link>
                    </li>
                    <li className='header__bottom__item'>
                        <Link className='header__bottom__link'>{t("world")}</Link>
                    </li>
                    <li className='header__bottom__item'>
                        <Link className='header__bottom__link'>{t("money")}</Link>
                    </li>
                    <li className='header__bottom__item'>
                        <Link className='header__bottom__link'>{t("culture")}</Link>
                    </li>
                    <li className='header__bottom__item'>
                        <Link className='header__bottom__link'>{t("lifestayle")}</Link>
                    </li>
                    <li className='header__bottom__item'>
                        <Link className='header__bottom__link'>{t("sport")}</Link>
                    </li>
                    <li className='header__bottom__item'>
                        <Link className='header__bottom__link'>{t("columnists")}</Link>
                    </li>
                    <li className='header__bottom__item'>
                        <Link className='header__bottom__link'>{t("multimedia")}</Link>
                    </li>
                </ul>

                <ul className='header__bottom__right'>
                   <li className='header__bottom__right__item'>
                      <BsMoon style={{color: "#fff", width: "16px", height: "16px", cursor: "pointer"}}/>
                   </li>
                   <li className='header__bottom__right__item'>
                       <FaSearch style={{color: "#fff", width: "16px", height: "16px", cursor: "pointer"}}/>
                   </li>
                   <li className='header__bottom__right__item'>
                     <select className='header__bottom__right__select' onChange={changeWebSiteLang}>
                        {
                            langs.map(langsItem => 
                                <option key={uuidv4()} selected={localStorage.getItem("lang") === langsItem ? true : false} value={langsItem}>{langsItem}</option>    
                            )
                        }
                    </select>
                   </li>
                   <li className='header__bottom__right__item'>
                       <GiHamburgerMenu onClick={() => setIsSidebarActive(true)} style={{color: "#fff", width: "16px", height: "16px", cursor: "pointer"}}/>
                   </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HeaderBottom