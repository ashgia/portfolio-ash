import React from 'react'
import PropTypes from 'prop-types'
import './Main.css'
import branchcut from '../images/branchcut.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import DevIcon1 from '../images/DevIcons-01.svg'
import DevIcon2 from '../images/DevIcons-02.svg'
import DevIcon3 from '../images/DevIcons-03.svg'
import DevIcon4 from '../images/DevIcons-04.svg'
import DevIcon5 from '../images/DevIcons-05.svg'
import DevIcon6 from '../images/DevIcons-06.svg'
import DevIcon7 from '../images/DevIcons-07.svg'
import DevIcon8 from '../images/DevIcons-08.svg'
import DevIcon9 from '../images/DevIcons-09.svg'
import DevIcon10 from '../images/DevIcons-10.svg'
import DevIcon11 from '../images/DevIcons-11.svg'
import DevIcon12 from '../images/DevIcons-12.svg'
import DevIcon13 from '../images/DevIcons-13.svg'
import DevIcon14 from '../images/DevIcons-14.svg'
import DevIcon15 from '../images/DevIcons-15.svg'
import bootstrap1 from '../images/bootstrap1.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={branchcut} alt="" />
          </span>
          <p>hi my name ashwey and my friend's name is tulu.</p>
          <p>
            tulu tulu tulu tulu tulu more stuff on tulu tulu tulu tulu tulu tulu
            more stuff on tulu tulu tulu tulu tulu tulu more stuff on tulu tulu
            tulu tulu tulu tulu more stuff on tulu tulu tulu tulu tulu tulu more
            stuff on tulu
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
            {/* <h3 className="major">Tulu's Friends</h3> */}
          </span>
          <p>
            tulu tulu tulu tulu tulu more stuff on tulu tulu tulu tulu tulu tulu
            more stuff on tulu tulu tulu tulu tulu tulu more stuff on tulu tulu
            tulu tulu tulu tulu more stuff on tulu tulu tulu tulu tulu tulu more
            stuff on tulu
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Tech + Skills</h2>
          {/* <span className="image main"> */}
          <div className="skills-set">
            <div className="skills-icon">
              <p id="skills-title">React</p>
              <img
                src={DevIcon1}
                alt="react-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">Redux</p>
              <img
                src={DevIcon14}
                alt="redux-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">ES6+</p>
              <img
                src={DevIcon3}
                alt="js-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
            </div>
            {/* <img src={DevIcon2} alt="react-icon" style={{
              width: 90,
              height: 90,
            }} /> */}
            <div className="skills-icon">
              <p id="skills-title">Express</p>
              <img
                src={DevIcon4}
                alt="express-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
            </div>
            {/* <img src={DevIcon5} alt="vue-icon" style={{
              width: 90,
              height: 90,
            }} /> */}
            <div className="skills-icon">
              <p id="skills-title">Git + Github</p>
              <img
                src={DevIcon6}
                alt="github-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">Socket.io</p>
              <img
                src={DevIcon7}
                alt="socket-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">PostgreSQL</p>
              <img
                src={DevIcon8}
                alt="postgresql-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">Node.js</p>
              <img
                src={DevIcon9}
                alt="node.js-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">NPM</p>
              <img
                src={DevIcon10}
                alt="npm-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
            </div>
            {/* <img src={DevIcon11} alt="sass-icon" style={{
              width: 90,
              height: 90,
            }} /> */}
            <div className="skills-icon">
              <p id="skills-title">Firebase</p>
              <img
                src={DevIcon12}
                alt="firebase-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">CSS3</p>
              <img
                src={DevIcon13}
                alt="css3-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
            </div>
            {/* <div className="skills-icon">
              <p id="skills-title">Bootstrap</p>
              <img
                src={bootstrap1}
                alt="bootstrap-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
            </div> */}
            <div className="skills-icon">
              <p id="skills-title">HTML5</p>
              <img
                src={DevIcon15}
                alt="html5-icon"
                style={{
                  width: 90,
                  height: 90,
                }}
              />
            </div>
          </div>

          {/* </span> */}
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p> */}
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ashleygia/"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ashgia"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
