import React from "react"
import html from "../images/html.jpg"
import css from "../images/css.png"
import javascript from "../images/js.png"
import react from "../images/react.png"
import sass from "../images/sass.png"
import responsive from "../images/responsiveCert.png"
import jscert from "../images/jsCert.png"

const Skills = () => {
  return (
    <div className="skillsPage">
      <div className="skills" id="skills">
        <h1 className="skillsHeader skillsHeader">Technologies I use</h1>
        <section className="skillsGrid">
          <div className="skillCell html">
            <img className="skillImage " src={html} alt="html5" />
            <p>Html 5</p>
          </div>
          <div className="skillCell css">
            <img className="skillImage" src={css} alt="css3" />
            <p>Css 3</p>
          </div>
          <div className="skillCell js">
            <img className="skillImage" src={javascript} alt="javascript" />
            <p>Javascript</p>
          </div>
          <div className="skillCell react">
            <img className="skillImage" src={react} alt="react" />
            <p>React js</p>
          </div>
          <div className="skillCell sass">
            <img className="skillImage" src={sass} alt="sass" />
            <p>Sass</p>
          </div>
        </section>
      </div>
      <div className="accomplishments">
        <h1 className="skillsHeader accomplishmentsHeader">Accomplishments</h1>
        <section className="accGrid">
          <div className="skillCell">
            <a
              target="_blank"
              href="https://www.freecodecamp.org/certification/chadray/responsive-web-design">
              <img
                className="skillImage"
                src={responsive}
                alt="responsive vertification"
              />
            </a>
            <p>FCC certificate</p>
          </div>
          <div className="skillCell">
            <img
              className="skillImage"
              src={jscert}
              alt="javascrit data structures ann"
            />
            <p>FCC certificate</p>
          </div>
        </section>
      </div>
      <div className="skillsHeader projects">
        <section className="projectsGrid">
          <h1 className="projectsHeader">Projects</h1>
          <div className="skillCell">
            <a
              target="_blank"
              href="https://www.freecodecamp.org/certification/chadray/responsive-web-design">
              <img
                className="skillImage"
                src={responsive}
                alt="responsive vertification"
              />
            </a>
            <p>Nothing for now</p>
          </div>
        </section>
      </div>
    </div>
  )
}
export default Skills
