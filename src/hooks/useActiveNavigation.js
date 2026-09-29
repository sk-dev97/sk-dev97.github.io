import { useEffect } from "react";

export default function useActiveNavigation() {
  useEffect(() => {
    const sections = document.querySelectorAll("main [data-nav-section]");
    const links = document.querySelectorAll(".nav-link");
    const topButton = document.querySelector(".top");
    const updateTopButton = () => {
      if (topButton) topButton.classList.toggle("show", window.scrollY > 450);
    };
    window.addEventListener("scroll", updateTopButton, { passive: true });
    updateTopButton();
    if (!("IntersectionObserver" in window)) {
      return () => window.removeEventListener("scroll", updateTopButton);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px" });

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateTopButton);
    };
  }, []);
}
