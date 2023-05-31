import React, { useRef, useEffect } from "react";
import About from "../About/Landing";
import { gsap } from "gsap";
import "./styles.module.scss";

function Navbar() {
  const LinkRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      LinkRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2.6 }
    );
  }, []);

  return (
    <nav className="nav" >
      <ul>
        <li>
          {/* <NavLink
            ref={LinkRef}
            to="/about"
            component={About}
            style={{ textDecoration: "none", color: "#141414" }}
            activeStyle={{ color: "#141414" }}
          >
            About
          </NavLink> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
