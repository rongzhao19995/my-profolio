import React, {useEffect} from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import anime from 'animejs/lib/anime.es.js';

export const Header = () => {

    useEffect(() => {

        anime.timeline()
        .add({
            targets:".header .name",
            translateZ: 0,
            opacity:[0,1],
            easing: "linear",
            duration: 1000,
        }).add({
            targets: ".header .wrapper",
            opacity:[0,1],
            easing: "easeInOutCubic",
            duration: 1000,
            offset: "-=20000000",
            delay: function(el, i) {
                return 100 * i
            },
          })

    }, []);
  
    return (
        <header className="header">
            <div className="left">
                <div className="name"> LANCE LEE </div>
            </div>
            <div className="right">
                <div className="social-media">
                    <div className="wrapper"><FaLinkedin size={20} /></div>
                    <div className="wrapper"><FaGithub size={20}/></div>
                    <div className="wrapper"><GrMail size={20}/></div>
                </div>
                <div className="wrapper"><GiHamburgerMenu size={40}/></div>
            </div>
        </header>
    )
}



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