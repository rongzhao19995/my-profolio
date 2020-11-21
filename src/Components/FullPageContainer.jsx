import React from "react";
import { Fullpage } from './FullPage';
import { Header } from './Header';


export const FullPageContainer = () => {
  return (
    <div>
      <Header />
      <Fullpage />
      <p className="scrollDown">SCROLLDOWN</p>
      <div className="sky-color"></div>
    </div>
  );
};
