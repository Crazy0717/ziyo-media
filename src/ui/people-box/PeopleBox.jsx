import { LuPhone } from "react-icons/lu"
import "./PeopleBox.scss"
import { HiOutlineEnvelope } from "react-icons/hi2"
import { Link } from "react-router-dom"

const PeopleBox = ({ data }) => {
  return (
    <Link to={"/product/people1"} className="people">
      <div className="people_top">
        <img src={data.imgUrl} alt="" />
        <h3>{data.name}</h3>
        <p>{data.role}</p>
      </div>
      <div className="people_bottom">
        <p>
          <LuPhone id="icon" />
          {data.phoneNumber}
        </p>
        <p>
          <HiOutlineEnvelope id="icon" />
          {data.email}
        </p>
      </div>
    </Link>
  )
}

export default PeopleBox
