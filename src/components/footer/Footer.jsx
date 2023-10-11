import React from 'react';
import "./Footer.scss";
import footerLogo from "../../assets/images/footerLogo.png"
import { Link } from 'react-router-dom';
import { LiaTelegram } from "react-icons/lia";
import { SlSocialYoutube } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='footer__container'>
                <Link to="/">
                    <img className='footer__logo' src={footerLogo} alt="" />
                </Link>
                <p className='footer__text'>“Daryo” internet-nashrining (O‘zbekiston matbuot va axborot agentligi (O‘zMAA, hozirgi O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi) tomonidan 13.03.2015 yil sanasida 0944-sonli guvohnoma bilan ommaviy axborot vositasi sifatida ro‘yxatga olingan. Matnli materiallarni to‘liq ko‘chirish yoki qisman iqtibos keltirishga, shuningdek, fotografik, grafik, audio va/yoki videomateriallaridan foydalanishga “daryo.uz” saytiga giperhavola mavjud bo‘lgan va/yoki “Daryo” internet-nashrining muallifligini ko‘rsatuvchi yozuv ilova qilingan taqdirda yo‘l qo‘yiladi. Chop etiladigan ba’zi ma’lumotlar 18 yoshga to‘lmagan foydalanuvchilarga mo‘ljallanmagan bo‘lishi mumkin. Info@daryo.uz</p>

                <ul className='footer__list'>
                    <li className='footer__item'>
                        <a href="/" style={{display: "flex", alignItems: "center"}}>
                            <LiaTelegram className='footer__icon'/>
                        </a>
                    </li>
                    <li className='footer__item'>
                        <a href="/" style={{display: "flex", alignItems: "center"}}>
                            <SlSocialYoutube className='footer__icon'/>
                        </a>
                    </li>
                    <li className='footer__item'>
                        <a href="/" style={{display: "flex", alignItems: "center"}}>
                            <CiFacebook className='footer__icon'/>
                        </a>
                    </li>
                    <li className='footer__item'>
                        <a href="/" style={{display: "flex", alignItems: "center"}}>
                            <FaInstagram className='footer__icon'/>
                        </a>
                    </li>
                    <li className='footer__item'>
                        <a href="/" style={{display: "flex", alignItems: "center"}}>
                            <LuTwitter className='footer__icon'/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer