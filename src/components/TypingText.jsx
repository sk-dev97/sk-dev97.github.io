import { useState, useEffect } from "react";
import "../styles/TypingText.css";

const roles = [
  " Java Full Stack Developer...",
  " Java Backend Developer...",
  " React Frontend Developer....",
  " Junior Software Developer.....",
];

// Cycles through the job titles so the intro has a little movement.
function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          setDeleting(true);
        }
      } else if (text.length > 0) {
        setText(currentRole.slice(0, text.length - 1));
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, text === currentRole ? 1500 : deleting ? 50 : 80);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <p className="typing-text">
      {text}<span className="typing-cursor">|</span>
    </p>
  );
}

export default TypingText;
