import { FaFacebook, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footer.scss"
import { NavLink } from "react-router-dom"
import { RiInstagramFill } from "react-icons/ri"
import { BsYoutube } from "react-icons/bs"
import { ImTelegram } from "react-icons/im"

const Footer = () => {
  return (
    <footer>
      <div className="footer_left">
        <div className="logo">
          <img src="/images/ziyo logo.svg" alt="logo" />
          <div className="logo_name">
            <h2>ZIYO</h2>
            <p>MEDIAMARKAZI</p>
          </div>
        </div>
        <div className="left_contacts">
          <div className="floor">
            <p>Aloqa:</p>
            <h6>
              <FaPhone id="icon" />
              +998 88 330 06 66
            </h6>
          </div>
          <div className="floor">
            <p>Ro’yxatdan o’tgan manzil:</p>
            <h6>Toshkent shahri, Yunusobot tumani Ahmad Donish 11-mavze, 60</h6>
          </div>
          <div className="floor">
            <p>Shikoyatlar uchun:</p>
            <h6>+998 99 342 10 09</h6>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2022 Full fill Inc. All rights reserved.
        </div>
      </div>
      <div className="footer_right">
        <ul>
          <h1>Videolavhalar</h1>
          <li>Imom al buxoriy saboqlari</li>
          <li>Imom al buxoriy saboqlari</li>
          <li>Imom al buxoriy saboqlari</li>
          <li>Imom al buxoriy saboqlari</li>
          <li>Imom al buxoriy saboqlari</li>
          <li>Imom al buxoriy saboqlari</li>
          <li>Imom al buxoriy saboqlari</li>
          <li>Imom al buxoriy saboqlari</li>
        </ul>
        <ul>
          <h1>Audiolavhalar</h1>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
        <ul>
          <h1>Boshqalar</h1>
          <li>
            <NavLink to={"/photos"}>Fotolavhalar</NavLink>
          </li>
          <li>
            <NavLink to={"/messages"}>Xabarlar</NavLink>
          </li>
          <li>
            <NavLink to={"/product/about-ziyo"}>Ziyo haqida</NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>Kontaktlar</NavLink>
          </li>
          <li>
            <NavLink to={"/product/policy"}>Foydalanish shartlari</NavLink>
          </li>
          <li>
            <NavLink to={"/product/policy"}>Maxfiylik siyosati</NavLink>
          </li>
        </ul>
        <ul className="socialLinks">
          <h1>Ijtimoiy tarmoqlar</h1>
          <li>
            <NavLink to="/">
              <RiInstagramFill />
              Instagram
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <ImTelegram />
              Telegram
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <BsYoutube />
              Youtube
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaFacebook />
              Facebook
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
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
