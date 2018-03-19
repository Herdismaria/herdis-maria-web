import React, { Component } from "react";
import styled from "styled-components";
import media from "../../theme/media";
import { pink } from "../../theme/variables";
import { H2, H3 } from "../../theme/typography";

const AboutWrapper = styled.div`
  background: url(${require("../../assets/me-min.jpg")});
  background-size: cover;
  background-position: center;
  display: flex;
  height: 100%;
  justify-content: center;
  opacity: 0.6;
  position: relative;
  width: 100%;

  ${media.tablet`
  background-position: 70%;  
  `};
  ${media.phone`
  background-position: 80%;  
  `};
`;

const TriangleWrapper = styled.div`
  height: 100%;
  position: relative;
  width: 70%;

  ${media.tablet`
    width: 100%;
  `};
`;

const Triangle = styled.svg`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  & polygon {
    fill: ${pink};
  }

  ${media.phone`
    display: none;
  `};
`;

const TextWrapper = styled.div`
  padding-top: 10%;
  height: 60%;
  margin: 0 auto;
  position: relative;
  width: 50%;
  z-index: 1;
`;

class About extends Component {
  componentDidMount() {
    setTimeout(this.props.hideSlider, 400);
  }

  render() {
    return (
      <AboutWrapper>
        <TriangleWrapper>
          <Triangle viewBox="0 0 20 10" preserveAspectRatio="none">
            <polygon strokeWidth="0" points="0,10 20,10 10,0" />
          </Triangle>
          <TextWrapper>
            <H2>I am</H2>
            <H3>A girl</H3>
          </TextWrapper>
        </TriangleWrapper>
      </AboutWrapper>
    );
  }
}

export default About;
