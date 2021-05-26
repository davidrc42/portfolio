import React, { useState } from "react"
import { Link } from "react-scroll"

const Menu = () => {
  return (
    <div className="menu">
      <Link
        className="menuItem"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={500}>
        About
      </Link>
      <Link
        className="menuItem "
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
        Skills
      </Link>
      <Link
        className="menuItem"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}>
        Contact
      </Link>
    </div>
  )
}
export default Menu
