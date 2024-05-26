import "./ContactUs.scss"

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="contactUs_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.5806263622314!2d71.78182009999999!3d40.383118599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a4e74c1d51%3A0x74f191ca540db19!2siTeach%20Academy!5e0!3m2!1sru!2s!4v1716724516263!5m2!1sru!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form className="contactUs_form">
        <h3>Biz bilan aloqa</h3>
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
  )
}

export default ContactUs
