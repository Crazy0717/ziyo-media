import "./Contacts.scss"
import { FaCheck, FaPhone } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { disableSomeThing, enableSomeThing } from "../../redux/slices/states"
import { useEffect } from "react"

const Contacts = () => {
  const states = useSelector((state) => state.states)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(enableSomeThing("backgroundState"))
    dispatch(enableSomeThing("appealState"))
  }
  const closeModal = () => {
    dispatch(disableSomeThing("backgroundState"))
    dispatch(disableSomeThing("appealState"))
  }
  useEffect(() => {
    if (states.appealState) {
      document.body.classList.add("modal-open")
    } else {
      document.body.classList.remove("modal-open")
    }
  }, [states.appealState])

  return (
    <div className="contacts">
      <div
        className={
          states.appealState ? "contacts_modal active" : "contacts_modal"
        }
      >
        <div className="circle">
          <FaCheck />
        </div>
        <p>Murojaatingiz muvaffaqiyatli yuborildi!</p>
        <button onClick={closeModal}>Tushunarli</button>
      </div>
      <div className="contacts_top">
        <div className="top_left">
          <div className="left_heading">
            <p>Biz bilan aloqa</p>
            <h1>
              Savol yoki takliflar bo’yicha bizga yozishingiz yoki telefon
              qilishingiz mumkin!
            </h1>
          </div>
          <div className="left_contacts">
            <div className="floor">
              <p>Bizga qo’ng’iroq qiling!</p>
              <h6>
                <FaPhone id="icon" />
                +998 88 330 06 66
              </h6>
            </div>
            <div className="floor">
              <p>Ro’yxatdan o’tgan manzil:</p>
              <h6>
                Toshkent shahri, Yunusobot tumani Ahmad Donish 11-mavze, 60
              </h6>
            </div>
            <div className="floor">
              <p>Shikoyatlar uchun:</p>
              <h6>+998 99 342 10 09</h6>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="top_form">
          <h3>Murojaat uchun</h3>
          <div className="input">
            <label htmlFor="number">Telefon raqamingiz</label>
            <input id="number" type="text" defaultValue="+998" />
          </div>
          <div className="input">
            <label htmlFor="name">Ism va familiya</label>
            <input id="name" type="text" placeholder="Ismingizni kiriting" />
          </div>
          <div className="input">
            <label htmlFor="comment">Izoh (ixtiyoriy)</label>
            <input id="comment" type="text" placeholder="Izohingiz" />
          </div>
          <button type="submit">Yuborish</button>
        </form>
      </div>
      <div className="contacts_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.5806263622314!2d71.78182009999999!3d40.383118599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a4e74c1d51%3A0x74f191ca540db19!2siTeach%20Academy!5e0!3m2!1sru!2s!4v1716724516263!5m2!1sru!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Contacts
