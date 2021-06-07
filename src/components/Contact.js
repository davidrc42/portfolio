import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMobile,
  FaMobileAlt,
  FaPhone,
  FaReddit,
  FaRedditAlien,
} from "react-icons/fa";

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
        <div className="linkedIn contactPart">
          <a
            href="https://www.linkedin.com/in/ioana-david-48b994213/"
            target="_blank"
          >
            <FaLinkedin />
            <p className="contactText">LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
