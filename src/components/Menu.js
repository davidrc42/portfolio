import React, { useState } from "react"
import { Link } from "react-scroll"
import { FaCode, FaEnvelope, FaHome } from "react-icons/fa"

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
        <FaHome className="menuIcon" />
      </Link>
      <Link
        className="menuItem "
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
        <FaCode className="menuIcon" />
      </Link>
      <Link
        className="menuItem"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}>
        <FaEnvelope className="menuIcon" />
      </Link>
    </div>
  )
}
export default Menu
