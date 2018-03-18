import React from "react";
import styled from "styled-components";
import { spring, AnimatedSwitch } from "react-router-transition";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";

const Hider = styled.div`
  height: 75%;
  width: 100%;
  background: #414141;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transform-origin: 0% 50%;
  z-index: 1000;
`;

const sliderTransition = {
  atEnter: {
    scale: 0
  },
  atLeave: {
    scale: spring(0)
  },
  atActive: {
    scale: spring(1)
  }
};

const mapStyles = styles => ({ transform: `scale(${styles.scale})` });

export default () => (
  <AnimatedSwitch
    mapStyles={mapStyles}
    atEnter={sliderTransition.atEnter}
    atLeave={sliderTransition.atLeave}
    atActive={sliderTransition.atActive}
  >
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </AnimatedSwitch>
);
