import { Link, useParams } from "react-router-dom"
import "./Categories.scss"
import {
  Checkbox,
  FormControlLabel,
  Pagination,
  Radio,
  RadioGroup,
} from "@mui/material"
import {
  IoCalendarClearOutline,
  IoCloseOutline,
  IoEyeOutline,
} from "react-icons/io5"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { disableSomeThing, enableSomeThing } from "../../redux/slices/states"

const Categories = () => {
  const states = useSelector((state) => state.states)
  const dispatch = useDispatch()
  const { category } = useParams()
  const [data, setData] = useState()

  const openModal = (stateName) => {
    dispatch(enableSomeThing("backgroundState"))
    dispatch(enableSomeThing(stateName))
  }
  const closeModal = (stateName) => {
    dispatch(disableSomeThing("backgroundState"))
    dispatch(disableSomeThing(stateName))
  }

  useEffect(() => {
    switch (category) {
      case "videos":
        setData(videosData)
        break
      case "audios":
        setData(audioData)
        break
      case "photos":
        setData(photoData)
        break
    }
  }, [category])

  useEffect(() => {
    if (states.videoSendState || states.conditionsState) {
      document.body.classList.add("modal-open")
    } else {
      document.body.classList.remove("modal-open")
    }
  }, [states.videoSendState])

  return (
    <div className="categories">
      {/* conditions-modal */}
      <div
        className={
          states.conditionsState
            ? "conditions-modal active"
            : "conditions-modal"
        }
      >
        <div className="top-modal">
          <h5>Lorem ipsum shartlari</h5>
          <button
            onClick={() => {
              closeModal("conditionsState"), openModal("videoSendState")
            }}
            className="close"
          >
            <IoCloseOutline />
          </button>
        </div>
        <div className="conditions">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled itLorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled itLorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled itLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled itLorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled
          itLorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </div>
        <button
          onClick={() => {
            closeModal("conditionsState"), openModal("videoSendState")
          }}
        >
          Yopish
        </button>
      </div>
      {/* videoSend-modal */}
      <div
        className={
          states.videoSendState ? "videoSend-modal active" : "videoSend-modal"
        }
      >
        <div className="top-modal">
          <h5>Bizga video yuboring!</h5>
          <button
            onClick={() => closeModal("videoSendState")}
            className="close"
          >
            <IoCloseOutline />
          </button>
        </div>
        <form>
          <div className="input">
            <label htmlFor="number">Telefon raqamingiz</label>
            <input id="number" type="text" defaultValue="+998" />
          </div>
          <div className="input">
            <label htmlFor="name">Ism va familiya</label>
            <input id="name" type="text" placeholder="Ismingizni kiriting" />
          </div>
          <div className="input">
            <label htmlFor="comment">Video haqida qisqa ma’lumot</label>
            <input id="comment" type="text" placeholder="Izohingiz" />
          </div>
          <div className="fileInput">
            <label htmlFor="file-input">Videoni yuklash</label>
            <input id="file-input" type="file" />
          </div>
          <div className="checkbox">
            <Checkbox />
            <p>
              Men lorem ipsum{" "}
              <span
                onClick={() => {
                  closeModal("videoSendState"), openModal("conditionsState")
                }}
              >
                shartlariga
              </span>{" "}
              roziman{" "}
            </p>
          </div>
          <button type="sumbit">Yuborish</button>
        </form>
      </div>
      <div className="categories_left">
        <ul className="list">
          <li>
            <h3>Kategoriyalar</h3>
          </li>
          {data &&
            data.categoriesList.map((item, i) => (
              <li key={i}>
                <Checkbox id={`${i}`} />
                <label htmlFor={i}>{item.categoryName}</label>
              </li>
            ))}
        </ul>
        <ul className="list">
          <li>
            <h3>Filterlash</h3>
          </li>
          <RadioGroup
            name="radio-buttons-group"
            defaultValue={"Eng yangi qo’shilganlar"}
          >
            <FormControlLabel
              value="Eng yangi qo’shilganlar"
              control={<Radio />}
              label="Eng yangi qo’shilganlar"
            />
            <FormControlLabel
              value="Eng ko’p ko’rilganlar"
              control={<Radio />}
              label="Eng ko’p ko’rilganlar"
            />
            <FormControlLabel
              value="Lorem ipsum"
              control={<Radio />}
              label="Lorem ipsum"
            />
          </RadioGroup>
        </ul>
      </div>
      <div className="categories_content">
        <div className="content_top">
          <div className="top_heading">
            <h1>{data?.title}</h1>
            <button onClick={() => openModal("videoSendState")}>
              Bizga video yuboring!
            </button>
          </div>
          <ul className="list">
            {data &&
              data.categoriesList.map((item) => (
                <li key={item.id2}>
                  <Checkbox id={item.id2} />
                  <label htmlFor={item.id2}>{item.categoryName}</label>
                </li>
              ))}
          </ul>
          <ul className="list">
            <RadioGroup
              name="radio-buttons-group"
              defaultValue={"Eng yangi qo’shilganlar"}
            >
              <FormControlLabel
                value="Eng yangi qo’shilganlar"
                control={<Radio />}
                label="Eng yangi qo’shilganlar"
              />
              <FormControlLabel
                value="Eng ko’p ko’rilganlar"
                control={<Radio />}
                label="Eng ko’p ko’rilganlar"
              />
              <FormControlLabel
                value="Lorem ipsum"
                control={<Radio />}
                label="Lorem ipsum"
              />
            </RadioGroup>
          </ul>
        </div>
        <div className="content_boxes">
          {data &&
            data.boxesData.map((item) => (
              <Link to={`/product/${item.link}`} key={item.id} className="box">
                <div className="box_left">
                  <div
                    style={{ display: item.photo ? "none" : "inline-block" }}
                    className="time"
                  >
                    {item.time}
                  </div>
                  <img src={item.imgUrl} alt="there should be image" />
                </div>
                <div className="box_right">
                  <div className="right_main">
                    <span>{item.spanText}</span>
                    <h6>{item.name}</h6>
                    <p>{item.description}</p>
                  </div>
                  <div className="right_bottom">
                    <div className="stats">
                      <div className="stat">
                        <IoEyeOutline id="icon" />
                        <p>{item.viewsCount}</p>
                      </div>
                      <div className="stat">
                        <IoCalendarClearOutline id="icon" />
                        <p>{item.postedDate}</p>
                      </div>
                    </div>
                    <button>Batafsil</button>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <Pagination count={10} />
      </div>
    </div>
  )
}

export default Categories

const videosData = {
  title: "Videolar",
  categoriesList: [
    {
      id: "1",
      id2: "6",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
    {
      id: "2",
      id2: "7",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
    {
      id: "3",
      id2: "8",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
    {
      id: "4",
      id2: "9",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
    {
      id: "5",
      id2: "10",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
  ],
  boxesData: [
    {
      id: "1",
      time: "3:45",
      link: "video1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
    },
    {
      id: "2",
      time: "3:45",
      link: "video1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
    },
    {
      id: "3",
      time: "3:45",
      link: "video1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
    },
    {
      id: "4",
      time: "3:45",
      link: "video1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
    },
    {
      id: "5",
      time: "3:45",
      link: "video1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
    },
    {
      id: "6",
      time: "3:45",
      link: "video1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
    },
  ],
}
const audioData = {
  title: "Audiolar",
  categoriesList: [
    {
      id: "1",
      id2: "6",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
    {
      id: "2",
      id2: "7",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
    {
      id: "3",
      id2: "8",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
    {
      id: "4",
      id2: "9",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
    {
      id: "5",
      id2: "10",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
  ],
  boxesData: [
    {
      id: "1",
      time: "3:45",
      link: "audio1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
    },
    {
      id: "2",
      time: "3:45",
      link: "audio1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
    },
    {
      id: "3",
      time: "3:45",
      link: "audio1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
    },
    {
      id: "4",
      time: "3:45",
      link: "audio1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
    },
    {
      id: "5",
      time: "3:45",
      link: "audio1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
    },
    {
      id: "6",
      time: "3:45",
      link: "audio1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
    },
  ],
}
const photoData = {
  title: "Fotolavhalar",
  categoriesList: [
    {
      id: "1",
      id2: "6",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
    {
      id: "2",
      id2: "7",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
    {
      id: "3",
      id2: "8",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
    {
      id: "4",
      id2: "9",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
    {
      id: "5",
      id2: "10",
      categoryName: "IMOM Al Buxoriy o’g’itlari",
    },
  ],
  boxesData: [
    {
      id: "1",
      time: "3:45",
      link: "photo1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
      photo: true,
    },
    {
      id: "2",
      time: "3:45",
      link: "photo1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
      photo: true,
    },
    {
      id: "3",
      time: "3:45",
      link: "photo1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
      photo: true,
    },
    {
      id: "4",
      time: "3:45",
      link: "photo1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
      photo: true,
    },
    {
      id: "5",
      time: "3:45",
      link: "photo1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
      photo: true,
    },
    {
      id: "6",
      time: "3:45",
      link: "photo1",
      imgUrl: "/images/Rectangle 12.png",
      spanText: "IMOM Al Buxoriy o’g’itlari",
      name: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of typesetting industry.",
      viewsCount: 1000,
      postedDate: "16.12.2022 1:09",
      photo: true,
    },
  ],
}
