import React from "react";

export const SectionThree = () => {
  return (
    <div>
      <div className="fullpage__slide">
        <div className="title">
          <h2 className="title__text js-letter">About Me</h2>
          <p className="title__lead js-letter">
            I love Design, Animation,
            <br />
            and Beauty Things.
          </p>
          <div className="btn-wrap js-letter">
            <a className="btn" href="./about.html">
              Show me more
            </a>
          </div>
        </div>
        <a className="image image--about" href="./about.html">
          <div className="image__over">
            <div className="image__cover"></div>
            <div className="image__cover"></div>
          </div>
          <div className="page-num">
            <p> II </p>
          </div>
        </a>
      </div>
    </div>
  );
};
