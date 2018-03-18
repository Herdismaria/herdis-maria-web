import React, { Component } from "react";
import styled from "styled-components";
import Snap from "snapsvg-cjs";

const A = styled.a`
  width: 40%;
  max-width: 500px;
  float: left;

  & figure {
    border-radius: 10px;
    background: #333;
    margin: 5px;
    overflow: hidden;
    position: relative;

    & img {
      display: block;
      opacity: 0.7;
      position: relative;
      transition: opacity 0.3s;
      width: 100%;
    }

    & figcaption {
      backface-visibility: hidden;
      height: 100%;
      padding: 10px;
      position: absolute;
      text-align: center;
      top: 0;
      width: 100%;
      z-index: 11;
    }
  }

  & h2 {
    backface-visibility: hidden;
    color: ${({ textColor }) => textColor};
    font-size: 130%;
    font-weight: 300;
    letter-spacing: 1px;
    margin: 0 0 20px 0;
    text-transformation: uppercase;
    transform: translateY(80px);
    transition: transform 0.3s;
  }

  & p {
    backface-visibility: hidden;
    color: #aaa;
    font-weight: 300;
    padding: 0 20px;
    transform: translateY(80px);
    transition: opacity 0.3s, transform 0.3s;
  }

  & button {
    background: transparent;
    border: 3px solid ${({ textColor }) => textColor};
    color: ${({ textColor }) => textColor};
    font-weight: bold;
    height: 60px;
    left: 50%;
    letter-spacing: 1px;
    opacity: 0;
    padding: 4px 20px;
    position: absolute;
    text-transform: uppercase;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.25);
    transition: opacity 0.3s, transform 0.3s;
    width: 40%;
  }

  &:hover {
    img {
      opacity: 1;
    }

    h2,
    p {
      transform: translateY(20px);
    }

    p {
      opacity: 0;
    }

    button {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const Svg = styled.svg`
  height: 100%;
  position: absolute;
  top: -1px;
  width: 100%;
  z-index: 10;

  & path {
    fill: ${({ fill }) => fill};
  }
`;

class ShapeHoverCard extends Component {
  componentDidMount() {
    this.pathConfig = {
      from: this.props.startPath,
      to: this.props.endPath
    };
  }

  onMouseEnter = e => {
    let s = Snap(this.svg),
      path = s.select("path");

    path.animate({ path: this.pathConfig.to }, 250);
  };

  onMouseLeave = e => {
    let s = Snap(this.svg),
      path = s.select("path");

    path.animate({ path: this.pathConfig.from }, 250);
  };

  render() {
    const { fill, startPath, textColor, src } = this.props;
    return (
      <A
        href="#"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        textColor={textColor}
      >
        <figure>
          <img src={src} />
          <Svg
            innerRef={svg => (this.svg = svg)}
            fill={fill}
            viewBox="0 0 180 320"
            preserveAspectRatio="none"
          >
            <path d={startPath} />
          </Svg>
          <figcaption>
            <h2>Lonely Penguin</h2>
            <p>
              There once was a very lonely penguin who wanted nothing more in
              the world but to have a friend.
            </p>
            <button>View</button>
          </figcaption>
        </figure>
      </A>
    );
  }
}

export default ShapeHoverCard;
