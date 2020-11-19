import React from "react";
import {
  Link
} from "react-router-dom";

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
          <Link className="btn" to="/about">Show me more</Link>
          </div>
        </div>
        <Link className="image image--about" to="/about-me">
          <div className="image__over">
              <div className="image__cover"></div>
              <div className="image__cover"></div>
            </div>
            <div className="page-num">
              <p> II </p>
            </div>
        </Link>
      </div>
    </div>
  );
};
