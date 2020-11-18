import React from "react";

export const SectionTwo = () => {
  return (
    <div>
      <div className="fullpage__slide">
        <div className="title">
          <h2 className="title__text js-letter">My Work</h2>
          <p className="title__lead js-letter">website</p>
          <div className="btn-wrap js-letter">
            <a className="btn" href="./reile.html">
              Show me more
            </a>
          </div>
        </div>
        <a className="image image--works" href="/reile.html">
          <div className="image__over">
            <div className="image__cover"></div>
            <div className="image__cover"></div>
          </div>
          <div className="page-num">
            <p> I </p>
          </div>
        </a>
      </div>
    </div>
  );
};
