import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import anime from 'animejs/lib/anime.es.js';

export const Fullpage = () => {

  const onLeave = (origin, destination, direction) => {
    console.log("Leaving section " + origin.index);

    if (0 === origin.index) {
      anime({
        targets: ".scrollDown",
        translateY: "180%",
        duration: 500,
        easing: "easeInOutCubic",
      });
    }

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
    anchors = {["reile", "about", "contact"]}
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
              <div className="title">
                <h2 className="title__text js-letter">Hair Space REILE<br/></h2>
                <div className="border js-letter"><span></span><span className="js-letter"></span></div>
                <p className="title__lead js-letter">website</p>
                <div className="btn-wrap js-letter"><a className="btn" href="./reile.html">Show me more</a></div>
              </div>
              <a className="image image--works" href="/reile.html">
                <div className="image__over">
                  <div className="image__cover"></div>
                  <div className="image__cover"></div>
                </div>
                <div className="page-num">
                  <p>01</p>
                </div>
              </a>
            </div>
          </div>
          <div className="section">
            <div className="fullpage__slide">
              <div className="title">
                <h2 className="title__text js-letter">About Me</h2>
                <div className="border js-letter"><span></span><span className="js-letter"></span></div>
                <p className="title__lead js-letter">I love Design, Technology,<br/>and Story.</p>
                <div className="btn-wrap js-letter"><a className="btn" href="./about.html">Show me more</a></div>
              </div><a className="image image--about" href="./about.html">
                <div className="image__over">
                  <div className="image__cover"></div>
                  <div className="image__cover"></div>
                </div>
                <div className="page-num">
                  <p>02</p>
                </div></a>
            </div>
          </div>
          <div className="section">
            <div className="fullpage__slide">
              <div className="title">
                <h2 className="title__text js-letter">Get In Touch</h2>
                <div className="border js-letter"><span></span><span className="js-letter"></span></div>
                <ul>
                  <li className="js-letter"><a href="mailto:kuon609@gmail.com">kuon609@gmail.com</a></li>
                  <li className="js-letter"><a href="https://www.wantedly.com/users/48483598" target="_blank">Wantedly</a></li>
                  <li className="js-letter"><a href="https://twitter.com/Goldi69s" target="_blank"><i className="fab fa-twitter"></i></a><a href="https://dribbble.com/kuon_yagi" target="_blank"><i className="fab fa-dribbble"></i></a></li>
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
