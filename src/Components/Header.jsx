import React, {useEffect, useRef} from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import anime from 'animejs/lib/anime.es.js';

export const Header = () => {

    const elementRef = useRef();

    useEffect(() => {

        anime.timeline
        ({
            targets: ".loader",
            translateY: [0, "-100%"],
            translateZ: 0,
            easing: "easeInOutCubic",
            duration: 800,
            offset: "-=1000",
            complete: function() {
                elementRef.current.classList.add('js-hidden');
            }
        })
        .add({
            targets: ".main-title__text .letter",
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 1200,
            delay: (el, i) => 100 * (i+1)
          })

    }, []);
  
    return (
        <header className="header">
            <div className="left">
                <div className="name"> LANCE LEE </div>
            </div>
            <div className="right">
                <div className="social-media">
                    <div className="wrapper">
                        <a href="https://www.linkedin.com/in/lee-rong-zhao-07033977/" target="_blank" rel="noreferrer">
                        <FaLinkedin size={20} />
                        </a>                        
                    </div>
                    <div className="wrapper">
                        <a href="https://github.com/rongzhao19995" target="_blank" rel="noreferrer">
                            <FaGithub size={20}/>
                        </a>
                    </div>
                    <div className="wrapper">
                        <a  href="mailto:rongzhao195@gmail.com">
                            <GrMail size={20}/>
                        </a>
                    </div>
                </div>
                <div className="wrapper"><GiHamburgerMenu size={40}/></div>
            </div>
            <div className="loader" ref={elementRef}></div>
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