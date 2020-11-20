import React from "react";
import {
  Link
} from "react-router-dom";

export const SectionTwo = () => {
  return (
    <div>
      <div className="fullpage__slide">
        <div className="title">
          <h2 className="title__text js-letter">My Work</h2>
          <p className="title__lead js-letter">Web Application, <br/>Landing Page, UI Clone</p>
          <div className="btn-wrap js-letter">
            <Link className="btn" to="/work">Show me more</Link>
          </div>
        </div>
        <Link className="image image--works" to="/work">
        <div className="image__over">
            <div className="image__cover"></div>
            <div className="image__cover"></div>
          </div>
          <div className="page-num">
            <p> I </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
