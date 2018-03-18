import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  cursor: pointer;
  height: 80px;
  margin: 5px;
  width: 100px;

  & path {
    fill: none;
    stroke: #414141;
    stroke-width: 2px;
    stroke-dasharray: ${({ show }) => (show ? 350 : "0 350")};
    stroke-dashoffset: ${({ show }) => (show ? 0 : -350)};
    transition: all 2s;
  }

  & text {
    font-family: AvenirNext-Regular, Avenir Next;
    font-size: 13px;
    font-weight: normal;
    fill: #414141;
    opacity: ${({ show }) => (show ? 1 : 0)};
    transition: opacity 1s;
  }
`;

const ButtonText = styled.span`
  color: #000;
  display: block;
  padding: 10px;
  position: absolute;
  text-align: center;
`;

const WobblyButton = ({ handleClick, text, show }) => {
  return (
    <Svg id="button" viewBox="0 0 100 60" onClick={handleClick} show={show}>
      <path id="straight" d="M 1 1 L 99 1 L 99 59 L 1 59 L 1 1" />
      <text>
        <tspan x="24" y="34">
          {text}
        </tspan>
      </text>
    </Svg>
  );
};

export default WobblyButton;
