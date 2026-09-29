import { profile } from "../data/profile.js";

// My name, quick links, and contact links at the bottom of the page.
const links = [
  ["About", "#about"],
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div>
            <div className="footer-name">{profile.name}</div>
            <div className="footer-sub">{profile.role}</div>
          </div>
          <div className="footer-links">
            {links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          </div>
          <div className="footer-social">
            <a href={"mailto:" + profile.email} aria-label="Email"><i className="ri-mail-line" /></a>
            <a href={`https://wa.me/${profile.phone.replace("+", "")}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="ri-whatsapp-line" /></a>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}

