import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import anime from "animejs/lib/anime.es.js";
import { SectionOne } from "../pages/SectionOne";
import { SectionTwo } from "../pages/SectionTwo";
import { SectionThree } from "../pages/SectionThree";
import { SectionFour } from "../pages/SectionFour";

export const Fullpage = () => {
  const onLeave = (origin, destination, direction) => {
    console.log("Leaving section " + origin.index);

    // If Leave From First Page , Then Show Header
    if (0 === origin.index) {
      anime
        .timeline()
        .add({
          targets: ".header .name",
          translateX: [-50, 0],
          easing: "easeOutExpo",
          opacity: [0, 1],
        })
        .add(
          {
            targets: ".header .wrapper",
            translateY: [-50, 0],
            easing: "easeOutExpo",
            delay: (el, i) => 50 * i,
            opacity: [0, 1],
          },
          "-=500"
        )
        .add(
          {
            targets: ".main-title__text .letter",
            opacity: [1, 0],
            easing: "easeInOutQuad",
            duration: 1200,
            delay: (el, i) => 100 * (i + 1),
          },
          "-=600"
        )
        .add(
          {
            targets: "#fp-nav",
            translateY: ["-300", "-70"],
            easing: "easeOutExpo",
            duration: 500,
            opacity: [0, 1],
          },
          "-=2000"
        );
    }

    // If Leave From Any Page And Back to First Page, Then Hide Header
    if (0 === destination.index) {
      anime
        .timeline({
          targets: ".header .name",
          translateX: [0, -50],
          easing: "easeOutExpo",
          opacity: [1, 0],
        })
        .add(
          {
            targets: ".header .wrapper",
            translateY: [0, -50],
            easing: "easeOutExpo",
            delay: (el, i) => 50 * i,
            opacity: [1, 0],
          },
          "-=500"
        )
        .add(
          {
            targets: ".main-title__text .letter",
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1200,
            delay: (el, i) => 100 * (i + 1),
          },
          "-=600"
        )
        .add(
          {
            targets: "#fp-nav",
            translateY: ["-70", "-300"],
            easing: "easeOutExpo",
            duration: 500,
            opacity: [1, 0],
          },
          "-=2500"
        );
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
        duration: 100,
        easing: "easeInOutCubic",
      });
    }

    var currentClass = ".fp-section-" + (origin.index + 1);
    var nextClass = ".fp-section-" + (destination.index + 1);

    anime({
      targets: currentClass + " .fp-tableCell",
      opacity: [1, 0.25],
      delay: 800,
      duration: 500,
    });
    anime({
      targets: nextClass + " .image",
      scale: [0.85, 1],
      translateX: ["10%", 0],
      translateZ: 0,
      easing: "easeOutCubic",
      duration: 1000,
    });
    anime({
      targets: nextClass + " .image__cover",
      translateX: [0, "110%"],
      translateZ: 0,
      delay: 250,
      easing: "easeInOutQuart",
      duration: function (el, i) {
        return 1200 - 200 * i;
      },
    });
    anime({
      targets: nextClass + " .page-num p",
      translateX: ["-200%", 0],
      translateZ: 0,
      easing: "easeInOutCubic",
      delay: 200,
      duration: 1000,
    });
    anime({
      targets: nextClass + " .js-letter",
      // translateX: ["-105%", 0],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeInOutCubic",
      duration: 2000,
      delay: function (el, i) {
        return 50 * i;
      },
    });
  };

  const afterLoad = (origin, destination, direction) => {
    console.log("After load: " + origin.index);
    console.log(".fp-section-" + origin.index);

    var currentClass = ".fp-section-" + (origin.index + 1);

    anime.timeline().add({
      targets: currentClass + " .fp-tableCell",
      opacity: [0.25, 1.0],
    });
  };

  const afterRender = (origin, detination, direction) => {
    var myNodelist = document.querySelectorAll(".section");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var num = i + 1;
      myNodelist[i].classList.add("fp-section-" + num);
    }
  };

  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      anchors={["home", "reile", "about", "contact"]}
      easingcss3={"cubic-bezier(0.645, 0.045, 0.355, 1)"}
      navigation={"!0"}
      navigationPosition={"left"}
      onLeave={onLeave}
      afterLoad={afterLoad}
      afterRender={afterRender}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <SectionOne />
            </div>
            <div className="section">
              <SectionTwo />
            </div>
            <div className="section">
              <SectionThree />
            </div>
            <div className="section">
              <SectionFour />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
