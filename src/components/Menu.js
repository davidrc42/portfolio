import React, { useState } from "react"
import { Link } from "react-scroll"
import { FaCode, FaEnvelope, FaHome } from "react-icons/fa"

const Menu = () => {
  return (
    <div className="menu">
      <Link
        className="menuItem"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={500}>
        <FaHome className="menuIcon" />
        <p className="menuText">Home</p>
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
        <p className="menuText">Skills</p>
      </Link>
      <Link
        className="menuItem"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}>
        <FaEnvelope className="menuIcon" />
        <p className="menuText">Contact</p>
      </Link>
    </div>
  )
}
export default Menu
