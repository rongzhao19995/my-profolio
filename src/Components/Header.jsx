import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import anime from "animejs/lib/anime.es.js";
import {
  Link
} from "react-router-dom";


export const Header = () => {
  const elementRef = useRef();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    anime
      .timeline({
        targets: ".loader",
        translateY: [0, "-100%"],
        translateZ: 0,
        easing: "easeInOutCubic",
        duration: 800,
        offset: "-=1000",
        complete: function () {
          // elementRef.current.classList.add("js-hidden");
        },
      })
      .add({
        targets: ".main-title__text .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1200,
        delay: (el, i) => 100 * (i + 1),
      });
  }, []);

  const closeMenu = () => {
    anime.timeline()
    .add({
      targets: ".global-nav ul li",
      translateY: [0, "-100%"],
      opacity: [1,0],
      easing: "easeInOutQuad",
      duration: 500,
      delay: (el, i) => 100 * (i + 1)
    })
    .add({
      targets: ".global-nav",
      translateY: [0, "-100%"],
      opacity: [1, 0],
      easing: "easeInOutQuad",
      duration: 500,
    })

    setOpen(false);
  }

  const openMenu = () => {

    debugger;
    if(isOpen) {
      closeMenu();
    } else {

      anime.timeline()
      .add({
        targets: ".global-nav",
        translateY: ["-100%", 0],
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 500,
      })
      .add({
        targets: ".global-nav ul li",
        translateY: ["-100%", 0],
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 800,
        delay: (el, i) => 100 * (i + 1)
      }, "-=500");

      setOpen(true);

  }



}

  return (
    <div className="fullpage-header">
      <header className="header">
        <div className="left">
          <div className="name"><Link to="/" > LANCE LEE </Link></div>
        </div>
        <div className="right">
          <div className="social-media">
            <div className="wrapper">
              <a className="gtm__linkedin-btn"
                href="https://www.linkedin.com/in/lee-rong-zhao-07033977/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            <div className="wrapper">
              <a className="gtm__github-btn"
                href="https://github.com/rongzhao19995"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={20} />
              </a>
            </div>
            <div className="wrapper">
              <a className="gtm__email-btn" href="mailto:rongzhao195@gmail.com">
                <GrMail size={20} />
              </a>
            </div>
          </div>
          <div className="wrapper" onClick={openMenu}>
            <GiHamburgerMenu size={40} />
          </div>
        </div>
        <div className="loader" ref={elementRef}></div>
      </header>
      <nav className="global-nav">
        <ul className="global-nav__list">
          <div className="text-container" onClick={closeMenu}><li><Link className="btn gtm__view-home-page-btn" to="/#home">HOME</Link></li></div>
          <div className="text-container" onClick={closeMenu}><li><Link className="btn gtm__view-works-page-btn" to="/#works">WORKS</Link></li></div>
          <div className="text-container" onClick={closeMenu}><li><Link className="btn gtm__view-about-page-btn" to="/#about">ABOUT ME</Link></li></div>
          <div className="text-container" onClick={closeMenu}><li><Link className="btn gtm__view-contact-page-btn" to="/#contact">CONTACT</Link></li></div>
          
          
          
          
        </ul>
      </nav>
    </div>
  );
};

// {/* <header>
// <a className="name" href="./">Kuon Yagi</a>
// <div className="wrap">
// <div className="icons"><a href="https://twitter.com/Goldi69s"><i className="fab fa-twitter"></i></a><a href="https://dribbble.com/kuon_yagi" target="_blank"><i className="fab fa-dribbble"></i></a><a href="https://www.wantedly.com/users/48483598" target="_blank">Wantedly</a></div>
// <div className="menuIcon js-menuBtn"></div>
// </div>
// <nav className="global-nav">
// <ul className="global-nav__list">
// <li><a href="./">HOME</a></li>
// <li><a href="./reile.html">WORKS</a></li>
// <li><a href="./about.html">ABOUT ME</a></li>
// <li><a className="js-contact" href="./#contact">CONTACT</a></li>
// <li className="global-nav__sns"><a href="https://twitter.com/Goldi69s"><i className="fab fa-twitter"></i></a><a href="https://dribbble.com/kuon_yagi" target="_blank"><i className="fab fa-dribbble"></i></a></li>
// </ul>
// </nav>
// <div className="curtain"></div>
// <div className="loader"></div>
// </header> */}
