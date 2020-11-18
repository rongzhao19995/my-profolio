import React from "react";
import { Fullpage } from './FullPage';
import { Header } from './Header';


export const FullPageContainer = () => {
  return (
    <div>
      <Header />
      <Fullpage />
      <p class="scrollDown">SCROLLDOWN</p>
      <div class="sky-color"></div>
    </div>
  );
};
