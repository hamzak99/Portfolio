import React from "react";
import "./Contact.css";
// import { MdOutlineEmail } from "react-icons/md";
// import { BsWhatsapp } from "react-icons/bs";
import { sendEmail } from "../../helper/Contact";
const Contact = () => {
  const form = React.useRef();

  return (
    <section id="contact">
      <div className="section_wrapper contact_container">
        <div className="section_header">
          <h2 className="primary_title">Contact me</h2>
          <p className="text_muted description">
            Ready to take your digital presence to the next level? wheter you're
            looking to launch a new website, revamp an existing one, revamp an
            existing one, or need exper advice on the best technologies,I'm here
            to help. Reach out to discuss your project questions, or just to say
            hi!
          </p>
        </div>
        <div className="contact_group">
          <div className="contact_options">
            <article className="contact_option">
              {/* <MdOutlineEmail className="contact_icon" /> */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="contact_icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
              </svg>
              <h3>Email</h3>
              <h5 style={{ wordWrap: "break-word" }}>
                kasbaouihamza99@gmail.com
              </h5>
              <a
                href="mailto:kasbaouihamza99@gmail.com"
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className="contact_option">
              {/* <BsWhatsapp className="contact_icon" /> */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="contact_icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
              </svg>
              <h3>WhatsApp</h3>
              <h5>+212 636071430</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+212636071430"
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
          </div>
          <form
            ref={form}
            onSubmit={(e) => {
              sendEmail(e, form);
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Your message"
            ></textarea>
            <button type="submit" className="btn btn_primary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
