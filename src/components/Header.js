import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = ["about", "skills", "projects", "contact"];

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      let current = sections[0];

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPos >= top && scrollPos < bottom) {
            current = sections[i];
            break;
          }
        }
      }

      if (current !== active) {
        setActive(current);
      }
    };

    window.addEventListener("scroll", onScroll);

    // Run once on mount to set initial active tab
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  const handleClick = (section) => {
    setActive(section);
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          {["about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={active === section ? "active" : ""}
                onClick={() => handleClick(section)} // immediate highlight on click
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
