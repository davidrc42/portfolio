import React from "react"
import {
  FaEnvelope,
  FaGithub,
  FaMobile,
  FaMobileAlt,
  FaPhone,
  FaReddit,
  FaRedditAlien,
} from "react-icons/fa"

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <p className="contactHeader">
        Let's
        <p className="fancyWord"> talk</p>
      </p>
      <div className="contactMedias">
        <div className="github contactPart">
          <FaGithub />
          <p className="contactText">Github</p>
        </div>
        <div className="reddit contactPart">
          <FaRedditAlien />
          <p className="contactText">Reddit</p>
        </div>
        <div className="mobile contactPart">
          <FaMobileAlt />
          <p className="contactText">Mobile</p>
        </div>
        <div className="email contactPart">
          <FaEnvelope />
          <p className="contactText">Email</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
