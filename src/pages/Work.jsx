import React, { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import anime from "animejs/lib/anime.es.js";

import { BackButton } from "../Components/BackButton";

import ImgOne from "../assets/img/work-1.webp";
import ImgTwo from "../assets/img/work-2.webp";
import ImgThree from "../assets/img/work-3.webp";
import ImgFour from "../assets/img/work-4.webp";
import ImgFive from "../assets/img/work-5.webp";
import ImgSix from "../assets/img/work-6.webp";
import { Loader } from "../Components/Loader";



const SectionOne = () => {
  return (
    <div className="work-section">
      <a
        className="image-container"
        href="https://econnect-my.greateasternlife.com/econnect-new/#/login"
        target="_blank"
        rel="noreferrer"
      >
        <img src={ImgOne} alt="img two" />
      </a>
      <div className="text-wrapper">
        <div className="text-container">
          <h1 className="sh-text lg-header js-text">
            Great Eastern <br /> Insurance
          </h1>
        </div>
        <div className="text-container">
          <p className="text md-description js-text">
            e-Connect. It's a one-stop self-service portal for our Great Eastern
            customers. Here, you can manage all things related to your
            portfolio.
          </p>
        </div>
        <ul className="tech-stack-detail">
          <li className="text js-fade">HTML (HTML5)</li>
          <li className="text js-fade">CSS (Boostrap)</li>
          <li className="text js-fade">Javascript (AngularJs)</li>
        </ul>
        <div className="batch-wrapper">
          <div className="batch">ENTERPRISE WORK</div>
        </div>
      </div>
    </div>
  );
};

const SectionTwo = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  // Animation for fading in
  const fadeIn = (element) => {
    anime
      .timeline()
      .add({
        targets: ".two .image-container img",
        translateX: ["-100%", 0],
        translateZ: 0,
        easing: "easeInOutCubic",
        duration: 800,
      })
      .add(
        {
          targets: ".two .js-text",
          translateX: ["-100%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 1000,
          delay: (el, i) => 100 * (i + 2),
        },
        "-=1200"
      )
      .add(
        {
          targets: ".two .tech-stack-detail .js-fade",
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 1000,
          delay: (el, i) => 50 * (i + 2),
        },
        "-=500"
      );
  };

  // Animation for fading out
  const fadeOut = (element) => {};

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio > 0.1 ? fadeIn() : fadeOut();

  return (
    <div className="work-section two" ref={sectionRef}>
      <a
        className="image-container"
        href="https://www.tgv.com.my/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={ImgTwo} alt="img two" />
      </a>
      <div className="text-wrapper">
        <div className="text-container">
          <h1 className="sh-text lg-header js-text">
            TGV <br />
            Cinema
          </h1>
        </div>
        <div className="text-container">
          <p className="text md-description js-text">
            TGV Cinema is a online booking application that allows potential
            guests to self-book and pay through your website, and other
            channels.
          </p>
        </div>
        <ul className="tech-stack-detail">
          <li className="text js-fade">HTML (HTML5)</li>
          <li className="text js-fade">CSS (SCSS, Boostrap)</li>
          <li className="text js-fade">JavaScript/ TypeScript (AngularJs)</li>
        </ul>
        <div className="batch-wrapper">
            <div className="batch">ENTERPRISE WORK</div>
        </div>
      </div>
    </div>
  );
};

const SectionThree = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  // Animation for fading in
  const fadeIn = (element) => {
    anime
      .timeline()
      .add({
        targets: ".three .image-container img",
        translateX: ["-100%", 0],
        translateZ: 0,
        easing: "easeInOutCubic",
        duration: 800,
      })
      .add(
        {
          targets: ".three .js-text",
          translateX: ["-100%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 1000,
          delay: (el, i) => 100 * (i + 2),
        },
        "-=1200"
      )
      .add(
        {
          targets: ".three .tech-stack-detail .js-fade",
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 1000,
          delay: (el, i) => 50 * (i + 2),
        },
        "-=500"
      );
  };

  // Animation for fading out
  const fadeOut = (element) => {};

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio > 0.1 ? fadeIn() : fadeOut();

  return (
    <div className="work-section three" ref={sectionRef}>
      <div className="image-container">
        <img src={ImgThree} alt="img two" />
      </div>
      <div className="text-wrapper">
        <div className="text-container">
          <h1 className="sh-text lg-header js-text">
            AIA <br />
            Insurance
          </h1>
        </div>
        <div className="text-container">
          <p className="text md-description js-text">
            A Channel that allow existing policy holder to choose to upgrade
            their plan and pay their premium amount all in one.
          </p>
        </div>
        <ul className="tech-stack-detail">
          <li className="text js-fade">HTML (HTML5)</li>
          <li className="text js-fade">CSS (SCSS, Boostrap)</li>
          <li className="text js-fade">JavaScript/ TypeScript (AngularJs)</li>
        </ul>
        <div className="batch-wrapper">
            <div className="batch">ENTERPRISE WORK</div>
        </div>
      </div>
    </div>
  );
};

const SectionFour = () => {
    const sectionRef = useRef(null);
  
    const intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });
  
    // Animation for fading in
    const fadeIn = (element) => {
      anime
        .timeline()
        .add({
          targets: ".four .image-container img",
          translateX: ["-100%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 800,
        })
        .add(
          {
            targets: ".four .js-text",
            translateX: ["-100%", 0],
            translateZ: 0,
            easing: "easeInOutCubic",
            duration: 1000,
            delay: (el, i) => 100 * (i + 2),
          },
          "-=1200"
        )
        .add(
          {
            targets: ".four .tech-stack-detail .js-fade",
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeInOutCubic",
            duration: 1000,
            delay: (el, i) => 50 * (i + 2),
          },
          "-=500"
        );
    };
  
    // Animation for fading out
    const fadeOut = (element) => {};
  
    // checking to see when the vieport is visible to the user
    intersection && intersection.intersectionRatio > 0.1 ? fadeIn() : fadeOut();
  
    return (
      <div className="work-section four" ref={sectionRef}>
        <a className="image-container"
            href="http://gsap-react-animation.herokuapp.com/"
            target="_blank"
            rel="noreferrer">
          <img src={ImgFour} alt="img two" />
        </a>
        <div className="text-wrapper">
          <div className="text-container">
            <h1 className="sh-text lg-header js-text">
              GSAP <br />
              Landing Page
            </h1>
          </div>
          <div className="text-container">
            <p className="text md-description js-text">
            </p>
          </div>
          <ul className="tech-stack-detail">
            <li className="text js-fade">HTML (HTML5)</li>
            <li className="text js-fade">CSS (SCSS, Boostrap, Grid, Flexbox)</li>
            <li className="text js-fade">JavaScript/ TypeScript (ReactJs)</li>
            <li className="text js-fade">JavaScript Libaries (Gsap, AnimeJs)</li>
          </ul>
          <div className="batch-wrapper">
              <div className="batch">SIDE PROJECT</div>
          </div>
        </div>
      </div>
    );
};

const SectionFive = () => {
    const sectionRef = useRef(null);
  
    const intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });
  
    // Animation for fading in
    const fadeIn = (element) => {
      anime
        .timeline()
        .add({
          targets: ".five .image-container img",
          translateX: ["-100%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 800,
        })
        .add(
          {
            targets: ".five .js-text",
            translateX: ["-100%", 0],
            translateZ: 0,
            easing: "easeInOutCubic",
            duration: 1000,
            delay: (el, i) => 100 * (i + 2),
          },
          "-=1200"
        )
        .add(
          {
            targets: ".five .tech-stack-detail .js-fade",
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeInOutCubic",
            duration: 1000,
            delay: (el, i) => 50 * (i + 2),
          },
          "-=500"
        );
    };
  
    // Animation for fading out
    const fadeOut = (element) => {};
  
    // checking to see when the vieport is visible to the user
    intersection && intersection.intersectionRatio > 0.1 ? fadeIn() : fadeOut();
  
    return (
      <div className="work-section five" ref={sectionRef}>
        <a className="image-container"
            href="https://github.com/rongzhao19995/facebook-ui-clone-siriluk-kruepat"
            target="_blank"
            rel="noreferrer">
          <img src={ImgFive} alt={ImgFive} />
        </a>
        <div className="text-wrapper">
          <div className="text-container">
            <h1 className="sh-text lg-header js-text">
              Facebook <br />
              UI Clone
            </h1>
          </div>
          <div className="text-container">
            <p className="text md-description js-text">
            </p>
          </div>
          <ul className="tech-stack-detail">
            <li className="text js-fade">HTML (HTML5)</li>
            <li className="text js-fade">CSS (SCSS, Boostrap, Grid, Flexbox)</li>
            <li className="text js-fade">JavaScript (ReactJs)</li>
            <li className="text js-fade">JavaScript Libaries (Gsap, AnimeJs)</li>
          </ul>
          <div className="batch-wrapper">
              <div className="batch">SIDE PROJECT</div>
          </div>
        </div>
      </div>
    );
};

const SectionSix = () => {
    const sectionRef = useRef(null);
  
    const intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });
  
    // Animation for fading in
    const fadeIn = (element) => {
      anime
        .timeline()
        .add({
          targets: ".six .image-container img",
          translateX: ["-100%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 800,
        })
        .add(
          {
            targets: ".six .js-text",
            translateX: ["-100%", 0],
            translateZ: 0,
            easing: "easeInOutCubic",
            duration: 1000,
            delay: (el, i) => 100 * (i + 2),
          },
          "-=1200"
        )
        .add(
          {
            targets: ".six .tech-stack-detail .js-fade",
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeInOutCubic",
            duration: 1000,
            delay: (el, i) => 50 * (i + 2),
          },
          "-=500"
        );
    };
  
    // Animation for fading out
    const fadeOut = (element) => {};
  
    // checking to see when the vieport is visible to the user
    intersection && intersection.intersectionRatio > 0.1 ? fadeIn() : fadeOut();
  
    return (
      <div className="work-section six" ref={sectionRef}>
        <a className="image-container"
            href="https://github.com/rongzhao19995/beauty-blog-react"
            target="_blank"
            rel="noreferrer">
          <img src={ImgSix} alt="img two" />
        </a>
        <div className="text-wrapper">
          <div className="text-container">
            <h1 className="sh-text lg-header js-text">
              Beauty <br />
              Landing Page
            </h1>
          </div>
          <div className="text-container">
            <p className="text md-description js-text">
            </p>
          </div>
          <ul className="tech-stack-detail">
            <li className="text js-fade">HTML (HTML5)</li>
            <li className="text js-fade">CSS (SCSS, Boostrap, Grid, Flexbox, Parallax)</li>
            <li className="text js-fade">JavaScript/ TypeScript (ReactJs)</li>
            <li className="text js-fade">JavaScript Libaries (Gsap, AnimeJs)</li>
          </ul>
          <div className="batch-wrapper">
              <div className="batch">SIDE PROJECT</div>
          </div>
        </div>
      </div>
    );
};


export const Work = () => {
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
          targets: ".image-container img",
          translateX: ["-100%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 800,
        },
        "-=500"
      )
      .add(
        {
          targets: ".work-section .js-text",
          translateX: ["-100%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          // delay: 200,
          duration: 1000,
          delay: (el, i) => 100 * (i + 2),
        },
        "-=1200"
      )
      .add(
        {
          targets: ".work-section .js-fade",
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeInOutCubic",
          // delay: 200,
          duration: 1000,
          delay: (el, i) => 100 * (i + 2),
        },
        "-=1300"
      )
      .add(
        {
          targets: ".back-wrapper",
          opacity: [0,1],
          // translateZ: 0,
          easing: "easeInOutCubic",
          duration: 500,
        },
        "-=3000"
      )
      .add(
        {
          targets: ".scrollDown",
          translateY: ["500%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 500,
        },
        "-=3500"
      );

    return () => {
      // cleanup
    };
  }, []);

  return (
    <div className="work-page">
      <Loader/>
      <BackButton backPage="works"/>
      <div class="container">
        {/* <div class="header">
        </div> */}
        <div class="left-content"></div>
        <div class="main-content">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour/>
          <SectionFive />
          <SectionSix />
        </div>
        <div class="right-content">
          <p class="scrollDown">SCROLLDOWN</p>
        </div>
        <div class="footer"></div>
      </div>
    </div>
  );
};
