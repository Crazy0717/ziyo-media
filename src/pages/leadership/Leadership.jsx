import { PeopleBox } from "../../ui"
import "./Leadership.scss"

const Leadership = () => {
  return (
    <div className="leadership">
      <div className="leadership_top">
        <h1>Rahbariyat</h1>
      </div>
      <div className="leadership_boxes">
        {mockData &&
          mockData.map((item, i) => <PeopleBox data={item} key={i} />)}
      </div>
    </div>
  )
}

export default Leadership

const mockData = [
  {
    imgUrl: "/images/circle.png",
    name: "Nosirjonov Anvarjon",
    role: "Bosh direktor",
    phoneNumber: "+998 97 628 28 82",
    email: "Faksa.the@gmail.com",
  },
  {
    imgUrl: "/images/circle.png",
    name: "Nosirjonov Anvarjon",
    role: "Bosh direktor",
    phoneNumber: "+998 97 628 28 82",
    email: "Faksa.the@gmail.com",
  },
  {
    imgUrl: "/images/circle.png",
    name: "Nosirjonov Anvarjon",
    role: "Bosh direktor",
    phoneNumber: "+998 97 628 28 82",
    email: "Faksa.the@gmail.com",
  },
  {
    imgUrl: "/images/circle.png",
    name: "Nosirjonov Anvarjon",
    role: "Bosh direktor",
    phoneNumber: "+998 97 628 28 82",
    email: "Faksa.the@gmail.com",
  },
  {
    imgUrl: "/images/circle.png",
    name: "Nosirjonov Anvarjon",
    role: "Bosh direktor",
    phoneNumber: "+998 97 628 28 82",
    email: "Faksa.the@gmail.com",
  },
  {
    imgUrl: "/images/circle.png",
    name: "Nosirjonov Anvarjon",
    role: "Bosh direktor",
    phoneNumber: "+998 97 628 28 82",
    email: "Faksa.the@gmail.com",
  },
  {
    imgUrl: "/images/circle.png",
    name: "Nosirjonov Anvarjon",
    role: "Bosh direktor",
    phoneNumber: "+998 97 628 28 82",
    email: "Faksa.the@gmail.com",
  },
  {
    imgUrl: "/images/circle.png",
    name: "Nosirjonov Anvarjon",
    role: "Bosh direktor",
    phoneNumber: "+998 97 628 28 82",
    email: "Faksa.the@gmail.com",
  },
  {
    imgUrl: "/images/circle.png",
    name: "Nosirjonov Anvarjon",
    role: "Bosh direktor",
    phoneNumber: "+998 97 628 28 82",
    email: "Faksa.the@gmail.com",
  },
  {
    imgUrl: "/images/circle.png",
    name: "Nosirjonov Anvarjon",
    role: "Bosh direktor",
    phoneNumber: "+998 97 628 28 82",
    email: "Faksa.the@gmail.com",
  },
  {
    imgUrl: "/images/circle.png",
    name: "Nosirjonov Anvarjon",
    role: "Bosh direktor",
    phoneNumber: "+998 97 628 28 82",
    email: "Faksa.the@gmail.com",
  },
  {
    imgUrl: "/images/circle.png",
    name: "Nosirjonov Anvarjon",
    role: "Bosh direktor",
    phoneNumber: "+998 97 628 28 82",
    email: "Faksa.the@gmail.com",
  },
]
