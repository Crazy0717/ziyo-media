import { FaFacebook, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footer.scss"
import { NavLink } from "react-router-dom"
import { RiInstagramFill } from "react-icons/ri"
import { BsYoutube } from "react-icons/bs"
import { ImTelegram } from "react-icons/im"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer>
      <div className="footer_left">
        <div className="logo">
          <img src="/images/ziyo logo.svg" alt="logo" />
          <div className="logo_name">
            <h2>ZIYO</h2>
            <p>{t("mediaCenter")}</p>
          </div>
        </div>
        <div className="left_contacts">
          <div className="floor">
            <p>{t("contact")}:</p>
            <h6>
              <FaPhone id="icon" />
              +998 88 330 06 66
            </h6>
          </div>
          <div className="floor">
            <p>{t("registerdAddress")}:</p>
            <h6>Toshkent shahri, Yunusobot tumani Ahmad Donish 11-mavze, 60</h6>
          </div>
          <div className="floor">
            <p>{t("forComplaints")}:</p>
            <h6>+998 99 342 10 09</h6>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2022 Full fill Inc. All rights reserved.
        </div>
      </div>
      <div className="footer_right">
        <ul>
          <h1>{t("videos")}</h1>
          <li>
            <NavLink to="/product/video1">Imom al buxoriy saboqlari</NavLink>
          </li>
          <li>
            <NavLink to="/product/video1">Imom al buxoriy saboqlari</NavLink>
          </li>
          <li>
            <NavLink to="/product/video1">Imom al buxoriy saboqlari</NavLink>
          </li>
          <li>
            <NavLink to="/product/video1">Imom al buxoriy saboqlari</NavLink>
          </li>
          <li>
            <NavLink to="/product/video1">Imom al buxoriy saboqlari</NavLink>
          </li>
          <li>
            <NavLink to="/product/video1">Imom al buxoriy saboqlari</NavLink>
          </li>
        </ul>
        <ul>
          <h1>{t("audios")}</h1>
          <li>
            <NavLink to="/product/audio1">Lorem ipsum</NavLink>
          </li>
          <li>
            <NavLink to="/product/audio1">Lorem ipsum</NavLink>
          </li>
          <li>
            <NavLink to="/product/audio1">Lorem ipsum</NavLink>
          </li>
          <li>
            <NavLink to="/product/audio1">Lorem ipsum</NavLink>
          </li>
          <li>
            <NavLink to="/product/audio1">Lorem ipsum</NavLink>
          </li>
          <li>
            <NavLink to="/product/audio1">Lorem ipsum</NavLink>
          </li>
          <li>
            <NavLink to="/product/audio1">Lorem ipsum</NavLink>
          </li>
        </ul>
        <ul>
          <h1>{t("others")}</h1>
          <li>
            <NavLink to={"/photos"}>{t("navPhoto")}</NavLink>
          </li>
          <li>
            <NavLink to={"/messages"}>{t("news")}</NavLink>
          </li>
          <li>
            <NavLink to={"/product/about-ziyo"}>{t("navAboutZiyo")}</NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>{t("contacts")}</NavLink>
          </li>
          <li>
            <NavLink to={"/product/policy"}>{t("termsOfUse")}</NavLink>
          </li>
          <li>
            <NavLink to={"/product/policy"}>{t("privacyPolicy")}</NavLink>
          </li>
        </ul>
        <ul className="socialLinks">
          <h1>{t("socialMedias")}</h1>
          <li>
            <NavLink to="https://www.instagram.com/">
              <RiInstagramFill />
              Instagram
            </NavLink>
          </li>
          <li>
            <NavLink to="https://web.telegram.org/a/">
              <ImTelegram />
              Telegram
            </NavLink>
          </li>
          <li>
            <NavLink to="https://www.youtube.com/">
              <BsYoutube />
              Youtube
            </NavLink>
          </li>
          <li>
            <NavLink to="https://www.facebook.com/?locale=ru_RU">
              <FaFacebook />
              Facebook
            </NavLink>
          </li>
          <li>
            <NavLink to="https://x.com/">
              <FaTwitter />
              Twitter
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
