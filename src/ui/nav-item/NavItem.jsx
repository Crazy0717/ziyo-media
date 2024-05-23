import "./NavItem.scss"
import { NavLink } from "react-router-dom"

const NavItem = ({ urlPath, icon, name }) => {
  return (
    <NavLink to={urlPath} className="navItem">
      <div className="icon">{icon}</div>
      <p>{name}</p>
      <div className="step"></div>
    </NavLink>
  )
}

export default NavItem
