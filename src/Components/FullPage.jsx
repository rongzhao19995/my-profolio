import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import anime from 'animejs/lib/anime.es.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export const Fullpage = () => {

  const onLeave = (origin, destination, direction) => {
    console.log("Leaving section " + origin.index);

    // If Leave From First Page , Then Show Header
    if (0 === origin.index) {

      anime.timeline
      ({
        targets: ".header .name",
        translateX: [-50, 0],
        easing: "easeOutExpo",
        opacity: [0, 1],
      })
      .add({
        targets: ".header .wrapper",
        translateY: [-50, 0],
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i,
        opacity: [0, 1],
      })
      .add({
        targets: ".main-title__text .letter",
        opacity: [1, 0],
        easing: "easeInOutQuad",
        duration: 1200,
        delay: (el, i) => 100 * (i+1)
      }, '-=600')
      .add({
        targets: "#fp-nav",
        translateY: [-300, -50],
        easing: "easeOutExpo",
        duration: 500,
        opacity: [0, 1],
      }, '-=2000');

    }

    // If Leave From Any Page And Back to First Page, Then Hide Header
    if (0 === destination.index) {
      
      anime.timeline
      ({
        targets: ".header .name",
        translateX: [0, -200],
        easing: "easeOutExpo",
        opacity: [1, 0],
      })
      .add({
        targets: ".header .wrapper",
        translateY: [0, -50],
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i,
        opacity: [1, 0],
      })
      .add({
        targets: ".main-title__text .letter",
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 1200,
        delay: (el, i) => 100 * (i+1)
      }, '-=600')
      .add({
        targets: "#fp-nav",
        translateY: [-50, -300],
        easing: "easeOutExpo",
        duration: 500,
        opacity: [1, 0],
      }, '-=2500');
      
    }
  
    // If Leave From First Page , Then Hide ScrollDown 
    if (0 === origin.index) {
      anime({
        targets: ".scrollDown",
        translateY: "180%",
        duration: 500,
        easing: "easeInOutCubic",
      });
    }

    // If Leave From Any Page And Back to First Page, Then Show ScrollDown
    if (0 === destination.index) {
      anime({
        targets: ".scrollDown",
        translateY: ["180%", 0],
        duration: 500,
        easing: "easeInOutCubic",
      });
    }
  };

  const afterLoad = (origin, destination, direction) => {
    console.log("After load: " + destination.index);

  }


  return (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    anchors = {["home", "reile", "about", "contact"]}
    easingcss3 = {'cubic-bezier(0.645, 0.045, 0.355, 1)'}
    navigation = {'!0'}
    navigationPosition = {'left'}
    onLeave={onLeave}
    afterLoad={afterLoad}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="fullpage__slide">
              <div className="main-title">
                <h1 class="main-title__text">
                  <span class="letter">FRONT</span>{" "}
                  <span class="letter">END</span>{" "}
                  <span class="letter">DEVELOPER</span> <br />
                  <span class="letter">BORN</span>{" "}
                  <span class="letter">IN</span>{" "}
                  <span class="letter">MALAYSIA</span> <br />{" "}
                  <span class="letter">LIVING</span>{" "}
                  <span class="letter">IN</span>{" "}
                  <span class="letter">KUALA</span>{" "}
                  <span class="letter">LUMPUR</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="fullpage__slide">
              <div className="title">
                <h2 className="title__text js-letter">My Work</h2>
                <div className="border js-letter">
                  <span></span>
                  <span className="js-letter"></span>
                </div>
                <p className="title__lead js-letter">website</p>
                <div className="btn-wrap js-letter">
                  <Link className="btn" to="/work">
                    Show me more
                  </Link>
                </div>
              </div>
              <Link className="image image--works" to="/work">
                <div className="image__over">
                  <div className="image__cover"></div>
                  <div className="image__cover"></div>
                </div>
                <div className="page-num">
                  <p>01</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="section">
            <div className="fullpage__slide">
              <div className="title">
                <h2 className="title__text js-letter">About Me</h2>
                <div className="border js-letter">
                  <span></span>
                  <span className="js-letter"></span>
                </div>
                <p className="title__lead js-letter">
                  I love Design, Technology,
                  <br />
                  and Story.
                </p>
                <div className="btn-wrap js-letter">
                  <Link className="btn" to="/about">
                    Show me more
                  </Link>
                </div>
              </div>
              <Link className="image image--about" to="/about">
                <div className="image__over">
                  <div className="image__cover"></div>
                  <div className="image__cover"></div>
                </div>
                <div className="page-num">
                  <p>02</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="section">
            <div className="fullpage__slide">
              <div className="title">
                <h2 className="title__text js-letter">Get In Touch</h2>
                <div className="border js-letter">
                  <span></span>
                  <span className="js-letter"></span>
                </div>
                <ul>
                  <li className="js-letter">
                    <a href="mailto:kuon609@gmail.com">kuon609@gmail.com</a>
                  </li>
                  <li className="js-letter">
                    <a
                      href="https://www.wantedly.com/users/48483598"
                      target="_blank"
                    >
                      Wantedly
                    </a>
                  </li>
                  <li className="js-letter">
                    <a href="https://twitter.com/Goldi69s" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://dribbble.com/kuon_yagi" target="_blank">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="image image--contact">
                <div className="image__over">
                  <div className="image__cover"></div>
                  <div className="image__cover"></div>
                </div>
                <div className="page-num">
                  <p>03</p>
                </div>
              </div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
)
};
