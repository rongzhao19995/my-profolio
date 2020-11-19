import React, { useEffect } from 'react'
import ImgOne from '../assets/img/me-1.jpg';
import ImgTwo from '../assets/img/me-2.jpg';
import ImgThree from '../assets/img/me-3.jpg';
import ImgFour from '../assets/img/me-4.jpg';
import anime from "animejs/lib/anime.es.js";

export const AboutMe = () => {

    useEffect(() => {
        
        anime.timeline()
        .add({
          targets: ".loader",
          translateY: [0, "-100%"],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 800
        })
        .add({
            targets: ".whoami-section .js-text",
            translateY: ["200%", 0],
            translateZ: 0,
            easing: "easeInOutCubic",
            // delay: 200,
            duration: 1000,
            delay: (el, i) => 100 * (i + 2),
          }, "-=1000")
        .add({
            targets: ".wave",
            translateY: [0, "-100%"],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeInOutCubic",
            duration: 1500,
        }, '-=500')

        return () => {
            // cleanup
        }
    }, [])

    return (
        
        <div className="about-page">
            <div className="loader"></div>
              <div class="container">
                <div class="header">...</div>
                <div class="left-content">...</div>
                <div class="main-content">
                    <div className="whoami-section">
                        <div className="text-container">
                            <p className="sh-text sm-header js-text">Hi, My Name is</p>
                        </div>
                        <div className="text-container">
                            <h1 className="sh-text lg-header js-text">Lance Lee <span class="wave">👋</span></h1>
                        </div>
                        <div className="text-container">
                            <h1 className="sh-text lg-header js-text">I build things for the web.</h1>
                        </div>
                        <div className="text-container">
                            <p className="text md-description js-text">I'm a Front End Developer based in Kuala Lumpur, Malaysia specializing in building (and occasionally designing) exceptional websites, applications ...</p>
                        </div>
                        
                    </div>
                    <div className="ep-1-section">
                        <h1 className="numbered-heading sh-text">About Me. </h1>
                        <div className="about-me-detail">
                            <div className="left">
                                <p className="text">Hello! I'm Lance Lee, a Front End Developer based in Kuala Lumpur, Malaysia. </p>
                                <p className="text">I enjoy creating things that live on the internet, whether that be websites, applications, or anything that interactive with an eye on animated content.</p>
                                <p className="text">In my spare time I like to take pictures with my Sony A6300. </p>
                                <p className="text">I am always experimenting, always learning, and never bored. </p>
                            </div>
                            <div className="right">
                                <div className="image-wrapper">
                                    <div class="inner-box">
                                        <img src={ImgOne} alt=""/>
                                        <img src={ImgTwo} alt=""/>
                                        <img src={ImgThree} alt=""/>
                                        <img src={ImgFour} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tech-stack-section">
                        <h1 className="numbered-heading sh-text">Place I Worked.</h1>
                        <div className="about-job-detail">
                                <div className="job-exp">
                                    <h1 className="duration sh-text">July 2020 - Present</h1>
                                    <div className="company sh-text">GrowthOps, Malaysia <span className="job-title sh-text">Front End Developer</span> </div>
                                    <p className="text"> </p>
                                    <p className="text">Communicate with B/C regarding the New Change requirement is durable in F/E framework </p>
                                    <p className="text">Guide new joiner about the F/E framework and their daily task. </p>
                                    <p className="text">Code Reviewing, Merging of F/E teammates. - Best practices - Business Logic </p>
                                </div>
                                <div className="job-exp">
                                    <h1 className="duration sh-text">Nov 2017 - July 2020</h1>
                                    <h1 className="company sh-text">Hitachi Hokenso, Malaysia <span className="job-title">Mobile Developer</span></h1>
                                    <ul>
                                        <li className="text">Support/ Troubleshooting issues and Consitent Develop New Features Across 3 Region Great Eastern Insurance Singapore/ Malaysia and Takaful. </li>
                                        <li className="front-line text">Communicate with B/C regarding the New Change Cequirement is Durable in F/E Framework </li>
                                    <li className="front-line text">Guide New joiner about the F/E Framework and their Daily Task. </li>
                                    <li className="front-line text">Code Reviewing/ Merging of F/E teammates. - Best Practices - Business Logic </li>
                                    </ul>
                                    
                                </div>
                        </div>
                    </div>
                </div>
                <div class="right-content">...</div>
                <div class="footer">...</div>
            </div>

        </div>
    )
}
