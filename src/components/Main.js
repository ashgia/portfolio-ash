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
// import TFHomeCompress from '../images/TFHomeCompress.jpg'
// import TF2 from '../images/TF2.png'
// import TF3 from '../images/TF3.png'
// import TF4 from '../images/TF4.png'
// import TF5 from '../images/TF5.png'
// import TF6 from '../images/TF6.png'
// import TF7 from '../images/TF7.png'
// import TF8 from '../images/TF8.png'
// import TF9 from '../images/TF9.png'
// import TF10 from '../images/TF10.png'
import KEHome from '../images/KEHome.png'
// import KE2 from '../images/KE2.png'
// import KE3 from '../images/KE3.png'
// import KE4 from '../images/KE4.png'
// import KE5 from '../images/KE5.png'
// import KE6 from '../images/KE6.png'
// import KE7 from '../images/KE7.png'
// import KE8 from '../images/KE8.png'
// import KE9 from '../images/KE9.png'
// import KE10 from '../images/KE10.png'
// import KE11 from '../images/KE11.png'

import screening from '../images/screening.jpg'
import works from '../images/works.jpg'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

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

          <p>
            I am a full stack web developer with a background in biotechnology.
            After realizing I wasn't going to make it as a great competitive
            food-eater, I spent time thinking of my other dream role of being a
            developer. I am in love with creating and designing memorable user
            experiences, bringing aesthetic pleasure and functionality together.
            I believe the best part about being a developer is being able to
            bring your vision to life. I am eager to learn and take on new
            challenges to become a better developer.
          </p>
          <p>
            When I'm not writing code, you can expect to find me spending time
            with my Cocker Spaniel puppy, Tulu, who loves to make messes more
            than being a good boy. I am an ultimate plant mom, animal lover,
            amateur food conoisseur, and tech enthusiast.
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
            {/* <div className="carousel">
              <Carousel
                showArrows={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={false}
                showStatus={false}
                id="carousel"
              >
                <div>
                  <img src={TFHomeCompress} />
                </div>
                <div>
                  <img src={TF2} />
                </div>
                <div>
                  <img src={TF3} />
                </div>
                <div>
                  <img src={TF4} />
                </div>
                <div>
                  <img src={TF5} />
                </div>
                <div>
                  <img src={TF6} />
                </div>
                <div>
                  <img src={TF7} />
                </div>
                <div>
                  <img src={TF8} />
                </div>
                <div>
                  <img src={TF9} />
                </div>
                <div>
                  <img src={TF10} />
                </div>
              </Carousel>
            </div> */}

            {/* <h3 className="major">Tulu's Friends</h3> */}
          </span>
          <div className="title-github">
            <h3>Tulu's Friends</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ashgia/pet-adoption"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </div>
          <p>
            As an animal lover, I am passionate about helping pets spend less
            time in an animal shelter and encourage pet adoption. Tulu’s Friends
            is a place for those interested in adopting a pet, where you can
            browse local shelters and directly match with pets by simply
            creating a profile. Local shelters can view your pet interest on
            your profile and directly contact you.
          </p>
          <br />
          <span className="image main">
            {/* <div className="image main">
              <div className="carousel">
                <Carousel
                  showArrows={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={false}
                  showStatus={false}
                  // centerSlidePercentage={100}
                  // width={800}
                  id="carousel"
                >
                  <div>
                    <img src={KEHome} />
                  </div>
                  <div>
                    <img src={KE2} />
                  </div>
                  <div>
                    <img src={KE3} />
                  </div>
                  <div>
                    <img src={KE4} />
                  </div>
                  <div>
                    <img src={KE5} />
                  </div>
                  <div>
                    <img src={KE6} />
                  </div>
                  <div>
                    <img src={KE7} />
                  </div>
                  <div>
                    <img src={KE8} />
                  </div>
                  <div>
                    <img src={KE9} />
                  </div>
                  <div>
                    <img src={KE10} />
                  </div>
                  <div>
                    <img src={KE11} />
                  </div>
                </Carousel>
              </div>
            </div> */}
            <img src={KEHome} alt="" />
          </span>
          <div className="title-github">
            <h3>Kitney Exchange</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Kitney-Exchange/kitney-exchange"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </div>

          <p>
            The Kitney Exchange addresses the lack of kidney transplants both
            the U.S and the world are facing. There are enough donor/recipient
            pairs in the country that can be matched and created into a donor
            chain, ultimately benefiting all participants. Kitney Exchange is a
            platform for recipient and donor pairs that would like to be matched
            with other incompatible pairs in their local area. We developed a
            system where multiple pairs can be matched in a chain.
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
