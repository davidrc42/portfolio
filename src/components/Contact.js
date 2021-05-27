import React from "react"
import {
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
        <div className="contactPart">
          <FaGithub />
          <p className="contactText">Github</p>
        </div>
        <div className="contactPart">
          <FaRedditAlien />
          <p className="contactText">Reddit</p>
        </div>
        <div className="contactPart">
          <FaMobileAlt />
          <p className="contactText">Direct Message</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
