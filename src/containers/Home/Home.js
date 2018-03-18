import React, { Component } from "react";
import styled from "styled-components";
import media from "../../theme/media";
import { H1, H3 } from "../../theme/typography";
import Divider from "../../components/Divider";

const HomeWrapper = styled.span`
  display: inline-block;
  left: 50%;
  position: absolute;
  top: 30%;
  transform: translateX(-50%);

  ${media.phone`
    top: 20%
  `};
`;

class Home extends Component {
  componentDidMount() {
    // wait until page has finished mounting to show content
    setTimeout(this.props.hideSlider, 300);
  }

  render() {
    return (
      <HomeWrapper>
        <H3 align="left">Hi, I'm</H3>
        <H1>Herdís María</H1>
        <Divider />
        <H3>Web developer</H3>
      </HomeWrapper>
    );
  }
}

export default Home;
