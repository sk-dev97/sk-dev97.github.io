import vegkartImage from "../assets/project-vegkart.svg";
import dashboardImage from "../assets/project-dashboard.svg";
import portfolioImage from "../assets/project-portfolio.svg";

export const projects = [
  {
    number: "01",
    name: "VegKart",
    category: "Full stack",
    type: "Full stack · E-commerce",
    description:
      "I built VegKart as a full stack shop for fruits and vegetables. It has product lists, search, categories, and a shopping cart.",
    tech: ["React", "Java", "Spring Boot", "Hibernate","MySQL"],
    image: vegkartImage,
    imageAlt: "VegKart storefront illustration with fresh produce",

    github: "YOUR_VEGKART_GITHUB_URL",
    live: "YOUR_VEGKART_LIVE_URL",
  },

  {
    number: "02",
    name: "Multi-Tool Dashboard",
    category: "Frontend",
    type: "Frontend · Interactive dashboard",
    description:
      "I made a dashboard with a calculator, unit converter, loan EMI calculator, and interest calculator all in one place.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    image: dashboardImage,
    imageAlt: "Dashboard preview with calculator, converter, and loan tools",

    github: "https://github.com/sk-dev97/multitool-website",
    live: "https://sk-dev97.github.io/multitool-website/",
  },

  {
    number: "03",
    name: "Developer Portfolio",
    category: "Frontend",
    type: "Frontend · Portfolio",
    description:
      "I built this portfolio with React and Vite to show my skills and projects. It also has dark and neon themes.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    image: portfolioImage,
    imageAlt: "Dark portfolio page preview with a developer portrait",

    github: "https://github.com/sk-dev97/sk-dev97.github.io",
    live: "https://sk-dev97.github.io/",
  },
];

