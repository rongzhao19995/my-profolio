import React, { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import anime from "animejs/lib/anime.es.js";

import ImgOne from "../assets/img/me-1.jpg";
import ImgTwo from "../assets/img/me-2.jpg";
import ImgThree from "../assets/img/me-3.jpg";
import ImgFour from "../assets/img/me-4.jpg";

const SectionOne = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  // Animation for fading in
  const fadeIn = (element) => {
    anime.timeline().add({
      targets: ".ep-1-section",
      //   translateY: ["50%", 0],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeInOutCubic",
      duration: 800,
    });
  };

  // Animation for fading out
  const fadeOut = (element) => {
    // anime.timeline()
    // .add({
    //   targets: ".ep-1-section",
    // //   translateY: ["50%", 0],
    //   opacity: [1, 0],
    //   translateZ: 0,
    //   easing: "easeInOutCubic",
    //   duration: 800
    // })
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio > 0.1 ? fadeIn() : fadeOut();

  return (
    <div className="ep-1-section" ref={sectionRef}>
      <h1 className="numbered-heading left sh-text" data-before-content="I. ">
        About Me.{" "}
      </h1>
      <div className="about-me-detail">
        <div className="left">
          <p className="text">
            Hello! I'm Lance Lee, a Front End Developer based in Kuala Lumpur,
            Malaysia.{" "}
          </p>
          <p className="text">
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything that interactive with an eye on
            animated content.
          </p>
          <p className="text">
            In my spare time I like to take pictures with my Sony A6300.{" "}
          </p>
          <p className="text">
            I am always experimenting, always learning, and never bored.{" "}
          </p>
        </div>
        <div className="right">
          <div className="image-wrapper">
            <div class="inner-box">
              <img src={ImgOne} alt="" />
              <img src={ImgTwo} alt="" />
              <img src={ImgThree} alt="" />
              <img src={ImgFour} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionTwo = () => {
  const sectionRef1 = useRef(null);

  const intersection1 = useIntersection(sectionRef1, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  // Animation for fading in
  const fadeIn1 = (element) => {
    anime.timeline().add({
      targets: ".job-exp-section",
      //   translateY: ["50%", 0],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeInOutCubic",
      duration: 800,
    });
  };

  // Animation for fading out
  const fadeOut = (element) => {
    // anime.timeline()
    // .add({
    //   targets: ".ep-1-section",
    // //   translateY: ["50%", 0],
    //   opacity: [1, 0],
    //   translateZ: 0,
    //   easing: "easeInOutCubic",
    //   duration: 800
    // })
  };

  // checking to see when the vieport is visible to the user
  intersection1 && intersection1.intersectionRatio > 0.1
    ? fadeIn1()
    : fadeOut();

  return (
    <div className="job-exp-section" ref={sectionRef1}>
      <h1 className="numbered-heading left sh-text" data-before-content="II. ">
        Place I Worked.
      </h1>
      <div className="about-job-detail">
        <div className="job-exp">
          <h1 className="duration sh-text">July 2020 - Present</h1>
          <div className="company sh-text">
            GrowthOps, Malaysia{" "}
            <span className="job-title sh-text">Front End Developer</span>{" "}
          </div>
          <ul>
            <li className="text">
              Develop New Feature for Movie Ticket Application, TGV Cinema
              Malaysia.{" "}
            </li>
            <li className="text">
              Involve In Migrate Old AngularJs Javascript To Typescript.{" "}
            </li>
            <li className="text">
              Develop Online Campaign Form for Insurance Application, AIA
              Singapore.{" "}
            </li>
          </ul>
        </div>
        <div className="job-exp">
          <h1 className="duration sh-text">Nov 2017 - July 2020</h1>
          <h1 className="company sh-text">
            Hitachi Hokenso, Malaysia{" "}
            <span className="job-title">Mobile Developer</span>
          </h1>
          <ul>
            <li className="text">
              Support/ Troubleshooting issues and Consitent Develop New Features
              Across 3 Region Great Eastern Insurance Singapore/ Malaysia and
              Takaful.{" "}
            </li>
            <li className="text">
              Communicate with B/C regarding the New Change Cequirement is
              Durable in F/E Framework{" "}
            </li>
            <li className="text">
              Guide New joiner about the F/E Framework and their Daily Task.{" "}
            </li>
            <li className="text">
              Code Reviewing/ Merging of F/E teammates. - Best Practices -
              Business Logic{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const SectionThree = () => {
  const sectionRef2 = useRef(null);

  const intersection2 = useIntersection(sectionRef2, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  // Animation for fading in
  const fadeIn2 = (element) => {
    anime.timeline().add({
      targets: ".study-exp-section",
      //   translateY: ["50%", 0],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeInOutCubic",
      duration: 800,
    });
  };

  // Animation for fading out
  const fadeOut = (element) => {
    // anime.timeline()
    // .add({
    //   targets: ".ep-1-section",
    // //   translateY: ["50%", 0],
    //   opacity: [1, 0],
    //   translateZ: 0,
    //   easing: "easeInOutCubic",
    //   duration: 800
    // })
  };

  // checking to see when the vieport is visible to the user
  intersection2 && intersection2.intersectionRatio > 0.1
    ? fadeIn2()
    : fadeOut();

  return (
    <div className="study-exp-section" ref={sectionRef2}>
      <h1 className="numbered-heading left sh-text" data-before-content="III. ">
        Place I Studied.
      </h1>
      <div className="about-study-detail">
        <div className="study-exp">
          <h1 className="duration sh-text">Nov 2015 - Nov 2017</h1>
          <div className="school text">
            Staffshire University, UK{" "}
            <span className="study-title text">
              Bachelor of Software Engineer
            </span>{" "}
          </div>
        </div>
        <div className="study-exp">
          <h1 className="duration sh-text">Nov 2015 - Nov 2017</h1>
          <div className="school text">
            Asia Pacific University, Malaysia{" "}
            <span className="study-title text">
              Bachelor of Software Engineer
            </span>{" "}
          </div>
        </div>
        <div className="study-exp">
          <h1 className="duration sh-text">Nov 2013 - Nov 2015</h1>
          <div className="school text">
            Asia Pacific University, Malaysia{" "}
            <span className="study-title text">Diploma, Software Engineer</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export const AboutMe = () => {
  useEffect(() => {
    anime
      .timeline()
      .add({
        targets: ".loader",
        translateY: [0, "-100%"],
        translateZ: 0,
        easing: "easeInOutCubic",
        duration: 800,
      })
      .add(
        {
          targets: ".whoami-section .js-text",
          translateY: ["200%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          // delay: 200,
          duration: 1000,
          delay: (el, i) => 100 * (i + 2),
        },
        "-=1000"
      )
      .add(
        {
          targets: ".wave",
          translateY: [0, "-100%"],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 1500,
        },
        "-=500"
      )
      .add(
        {
          targets: ".scrollDown",
          translateY: ["500%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 500,
        },
        "-=1700"
      );

    return () => {
      // cleanup
    };
  }, []);

  return (
    <div className="about-page">
      <div className="loader"></div>
      <div class="container">
        <div class="header"></div>
        <div class="left-content"></div>
        <div class="main-content">
          <div className="whoami-section">
            <div className="text-container">
              <p className="sh-text sm-header js-text">Hi, My Name is</p>
            </div>
            <div className="text-container">
              <h1 className="sh-text lg-header js-text">
                Lance Lee <span class="wave">👋</span>
              </h1>
            </div>
            <div className="text-container">
              <h1 className="sh-text lg-header js-text">
                I build things for the web.
              </h1>
            </div>
            <div className="text-container">
              <p className="text md-description js-text">
                I'm a Front End Developer based in Kuala Lumpur, Malaysia
                specializing in building (and occasionally designing)
                exceptional websites, applications ...
              </p>
            </div>
          </div>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>
        <div class="right-content">
          <p class="scrollDown">SCROLLDOWN</p>
        </div>
        <div class="footer"></div>
      </div>
    </div>
  );
};
