import "./Nav.scss"
import { GoHome } from "react-icons/go"
import { NavItem } from "../../ui"
import { HiBars3, HiOutlinePlay } from "react-icons/hi2"
import { PiImageLight, PiMusicNote } from "react-icons/pi"
import { TbNews } from "react-icons/tb"
import { IoDocumentTextOutline } from "react-icons/io5"
import { RiUserLine } from "react-icons/ri"
import { LuUserSquare } from "react-icons/lu"
import { LiaHandshake } from "react-icons/lia"
import { TiGlobeOutline } from "react-icons/ti"
import { RxMagnifyingGlass } from "react-icons/rx"
import { useDispatch } from "react-redux"
import { enableSomeThing } from "../../redux/slices/states"
import { BarsBlock, SearchBar } from ".."
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

const Nav = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const [currentLng, setCurrentLng] = useState(i18n.language)

  const active = (stateName) => {
    dispatch(enableSomeThing("backgroundState"))
    dispatch(enableSomeThing(stateName))
  }

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }
  useEffect(() => {
    const handleLanguageChanged = () => {
      setCurrentLng(i18n.language)
    }

    i18n.on("languageChanged", handleLanguageChanged)
    return () => {
      i18n.off("languageChanged", handleLanguageChanged)
    }
  }, [i18n])

  return (
    <nav className="navbar">
      <BarsBlock />
      <SearchBar />
      <div className="left">
        <div onClick={() => active("barsState")} className="bars">
          <HiBars3 />
        </div>
        <Link to="/">
          <div className="logo">
            <img src="/images/ziyo logo.svg" alt="logo" />
            <div className="logo_name">
              <h2>ZIYO</h2>
              <p>{t("mediaCenter")}</p>
            </div>
          </div>
        </Link>

        <ul>
          <NavItem urlPath={"/"} name={t("navHome")} icon={<GoHome />} />
          <NavItem
            urlPath={"/categories/videos"}
            name={t("navVideo")}
            icon={<HiOutlinePlay />}
          />
          <NavItem
            urlPath={"/photos"}
            name={t("navPhoto")}
            icon={<PiImageLight />}
          />
          <NavItem urlPath={"/audios"} name={"Audio"} icon={<PiMusicNote />} />
          <NavItem urlPath={"/messages"} name={"Xabarlar"} icon={<TbNews />} />
          <NavItem
            urlPath={"/articles"}
            name={t("navArticles")}
            icon={<IoDocumentTextOutline />}
          />
          <NavItem
            urlPath={"/product/about-ziyo"}
            name={t("navAboutZiyo")}
            icon={<img src="/svg/navitem logo.svg" alt="" />}
          />
          <NavItem
            urlPath={"/leadership"}
            name={t("navManagement")}
            icon={<RiUserLine />}
          />
          <NavItem
            urlPath={"/contacts"}
            name={t("navContacts")}
            icon={<LuUserSquare />}
          />
          <NavItem
            urlPath={"/product/us-purchases"}
            name={t("navPurchases")}
            icon={<LiaHandshake />}
          />
        </ul>
      </div>
      <div className="right">
        <div className="language">
          <TiGlobeOutline />
          <div>
            <p
              className={currentLng === "uz" ? "active" : ""}
              onClick={() => changeLanguage("uz")}
            >
              UZ
            </p>
            <p
              className={currentLng === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
            >
              ENG
            </p>
            <p
              className={currentLng === "ru" ? "active" : ""}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </p>
          </div>
        </div>
        <div onClick={() => active("searchState")} className="search">
          <RxMagnifyingGlass />
          <p>{t("search")}</p>
        </div>
      </div>
    </nav>
  )
}

export default Nav
