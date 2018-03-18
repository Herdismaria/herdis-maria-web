import React from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";

const springConfig = {
  stiffness: 200,
  damping: 23
};

const Hider = styled.div`
  height: 100%;
  width: 100%;
  background: #414141;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transform-origin: 0% 50%;
  z-index: 1000;
`;

const Slider = ({ show }) => {
  return (
    <Motion
      style={{
        scale: show ? spring(1, springConfig) : spring(0, springConfig)
      }}
    >
      {({ scale }) => (
        <Hider style={{ transform: `translateY(-50%) scaleX(${scale})` }} />
      )}
    </Motion>
  );
};

export default Slider;
