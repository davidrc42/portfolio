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
          <a target="_blank" href="https://github.com/davidrc42">
            <FaGithub />
            <p className="contactText">Github</p>
          </a>
        </div>
        <div className="reddit contactPart">
          <a target="_blank" href="https://www.reddit.com/user/halumetri">
            <FaRedditAlien />
            <p className="contactText">Reddit</p>
          </a>
        </div>
        <div className="mobile contactPart">
          <a href="tel:+40724947664">
            <FaMobileAlt />
            <p className="contactText">Mobile</p>
          </a>
        </div>
        <div className="email contactPart">
          <a href="https://mail.yahoo.com/d/compose/2886292491" target="_blank">
            <FaEnvelope />
            <p className="contactText">Email</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
