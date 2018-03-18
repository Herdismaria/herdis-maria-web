import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  height: ${({ height }) => (height ? height : "9px")};
  width: ${({ width }) => (width ? width : "12px")};
  transform: rotate(${({ rotation }) => (rotation ? rotation : 0)}deg);

  & polygon {
    fill: ${({ fill }) => (fill ? fill : "none")};
    stroke-width: ${({ strokeWidth }) => (strokeWidth ? strokeWidth : 1)};
    stroke: ${({ stroke }) => (stroke ? stroke : "none")};
  }
`;

const Triangle = (
  { fill, strokeWidth, stroke, height, width, rotation },
  props
) => {
  return (
    <Svg
      fill={fill}
      height={height}
      stroke={stroke}
      strokeWidth={strokeWidth}
      viewBox="0 0 12 9"
      width={width}
      rotation={rotation}
    >
      <polygon points="7 1 1 10 13 10" />
      {props.children}
    </Svg>
  );
};

export default Triangle;
