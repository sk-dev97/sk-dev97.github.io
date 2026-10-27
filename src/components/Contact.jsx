import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  BriefcaseBusiness,
  ArrowUpRight,
  LoaderCircle,
} from "lucide-react";

import { profile } from "../data/profile.js";
import Reveal from "./Reveal.jsx";
import "./Contact.css";


const EMAILJS_SERVICE_ID = "service_cmdftck";
const EMAILJS_TEMPLATE_ID = "template_y58srcd";
const EMAILJS_PUBLIC_KEY = "vVWkRPszxDUzGWT8w";

export default function Contact() {
  const [formMessage, setFormMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSending) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      name: formData.get("name")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      subject:
        formData.get("subject")?.toString().trim() ||
        "Portfolio contact",
      message: formData.get("message")?.toString().trim() || "",
    };

    setIsSending(true);
    setFormMessage("Sending your message...");
    setMessageType("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setFormMessage(
        "Your message was sent successfully! Thank you for contacting me."
      );
      setMessageType("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS sending error:", error);

      setFormMessage(
        "Sorry, your message could not be sent. Please try again or email me directly."
      );
      setMessageType("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="section" data-nav-section>
      <div className="container">
        <Reveal>
          <div className="heading">
            <div className="eyebrow-index">05 / Contact</div>
            <h2>Let’s build something together</h2>
            <p>
              I’m looking for an opportunity to begin my software
              development career. Have a role, project, or question?
              I’d love to hear from you.
            </p>
          </div>
        </Reveal>

        <Reveal className="contact-grid">
          <div className="contact-info">
            <span className="contact-eyebrow">
              <BriefcaseBusiness size={16} />
              GET IN TOUCH
            </span>

            <h3>Let’s start a conversation.</h3>

            <p className="contact-intro">
              Whether you have a job opportunity, a project idea, or
              simply want to connect, feel free to send me a message.
            </p>

            <div className="contact-item">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div>
                <b>Email</b>
                <a
                  className="contact-value"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <MessageCircle size={20} />
              </div>
              <div>
                <b>WhatsApp</b>
                <a
                  className="contact-value"
                  href={`https://wa.me/${String(
                    profile.phone || ""
                  ).replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Send me a message
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <MapPin size={20} />
              </div>
              <div>
                <b>Location</b>
                <span className="contact-value">
                  {profile.location}
                </span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <BriefcaseBusiness size={20} />
              </div>
              <div>
                <b>Availability</b>
                <span className="contact-value">
                  {profile.availability}
                </span>
              </div>
            </div>
          </div>

          <form className="form contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <span className="about-label">SEND A MESSAGE</span>
              <h3>I'd love to hear from you.</h3>
              <p>Fill in the details below and I'll get your message.</p>
            </div>

            <div className="field">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                maxLength={100}
                required
                disabled={isSending}
              />
            </div>

            <div className="field">
              <label htmlFor="contact-email">Your email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={254}
                required
                disabled={isSending}
              />
            </div>

            <div className="field full">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Job opportunity, project, or question"
                maxLength={150}
                disabled={isSending}
              />
            </div>

            <div className="field full">
              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message here..."
                rows={5}
                maxLength={5000}
                required
                disabled={isSending}
              />
            </div>

            <button
              className="button contact-submit"
              type="submit"
              disabled={isSending}
            >
              {isSending ? (
                <>
                  <LoaderCircle size={18} className="contact-spinner" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={17} />
                </>
              )}
            </button>

            <p
              className={`form-status ${
                messageType ? `form-status-${messageType}` : ""
              }`}
              role="status"
              aria-live="polite"
            >
              {formMessage}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}