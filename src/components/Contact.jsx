import { useState } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { profile } from "../data/profile.js";
import Reveal from "./Reveal.jsx";

// Lets visitors email me using the email app on their device.
export default function Contact() {
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = formData.get("subject") || "Portfolio contact";
    const message = formData.get("message");
    const name = formData.get("name");
    const email = formData.get("email");
    const body = `From: ${name} (${email})\n\n${message}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormMessage("Your email app should open with the message ready to send.");
  }

  return (
    <section id="contact" className="section" data-nav-section>
      <div className="container">
        <Reveal>
        <div className="heading">
          <div className="eyebrow-index">05 / Contact</div>
          <h2>Let’s build something together</h2>
          <p>
            I’m looking for an opportunity to begin my software development career.
            Have a role, project, or question? I’d love to hear from you.
          </p>
        </div>
        </Reveal>

        <Reveal className="contact-grid">
          <div className="contact-info">
            <h3>Talk to me</h3>
            <div className="contact-item">
              <Mail size={20} />
              <div><b>Email</b><a className="contact-value" href={`mailto:${profile.email}`}>Send me an email</a></div>
            </div>
            <div className="contact-item">
              <i className="ri-whatsapp-line contact-icon" aria-hidden="true" />
              <div><b>WhatsApp</b><a className="contact-value" href={`https://wa.me/${profile.phone.replace("+", "")}`} target="_blank" rel="noreferrer">Send me a message</a></div>
            </div>
            <div className="contact-item">
              <MapPin size={20} />
              <div><b>Location</b><span>{profile.location}</span></div>
            </div>
            <div className="contact-item">
              <MessageCircle size={20} />
              <div><b>Availability</b><span>{profile.availability}</span></div>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" placeholder="Your email" required />
            </div>
            <div className="field full">
              <label htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" name="subject" placeholder="Project or question" />
            </div>
            <div className="field full">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" placeholder="Tell me a little about it" required />
            </div>
            <button className="button" type="submit">
              Send message <i className="ri-send-plane-line" />
            </button>
            <p className="form-status" role="status">{formMessage}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
