import "./Contact.css";

//Contact form not functional yet

function Contact() {
  return (
    <section id="contact-area">
      <h2>Contact us</h2>
      <div className="contact-container">
        <form action="" className="contact">
          <input
            type="text"
            className="contact__name"
            name="firstname"
            placeholder="Your name firstname"
          />

          <input
            type="text"
            className="contact__name"
            name="lastname"
            placeholder="Your last name.."
          />

          <textarea
            name="subject"
            className="contact__textarea"
            placeholder="Your message for us.."
          ></textarea>

          <input type="submit" className="btn btn--primary" value="Submit" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
