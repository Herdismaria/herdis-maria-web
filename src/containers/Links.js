import React, { Component } from 'react';
import styled from 'styled-components';
import SubtleUnderlineLink from '../components/links/SubtleUnderlineLink';
import UnderlineDownLink from '../components/links/UnderlineDownLink';
import SidelineLink from '../components/links/SidelineLink';
import StrikethroughLink from '../components/links/StrikethroughLink';
import StrikethroughLeftLink from '../components/links/StrikethroughLeftLink';
import StrikethroughRightLink from '../components/links/StrikethroughRightLink';
import BackgroundLink from '../components/links/BackgroundLink';
import CrossLink from '../components/links/CrossLink';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const LinksWrapper = styled.div`
  align-items: center;
  background: ${({bgColor}) => bgColor};
  display: flex;
  height: 150px;
  justify-content: center;
  width: 100%;
`;

class LinksContainer extends Component {
  render() {
    return (
      <Container>
        <LinksWrapper bgColor={"#D80E70"}>
          <SubtleUnderlineLink url={'#'} text={'Click me'}/>
        </LinksWrapper>
        <LinksWrapper bgColor={"#5628B4"}>
          <UnderlineDownLink url={'#'} text={'Click me'}/>
        </LinksWrapper>
        <LinksWrapper bgColor={"#E7455F"}>
          <SidelineLink url={'#'} text={'Click me'}/>
        </LinksWrapper>
        <LinksWrapper bgColor={"#F7B236"}>
          <StrikethroughLink url={'#'} text={'Click me'}/>
        </LinksWrapper>
        <LinksWrapper bgColor={"#1B5299"}>
          <StrikethroughLeftLink url={'#'} text={'Click me'}/>
        </LinksWrapper>
        <LinksWrapper bgColor={"#9C528B"}>
          <StrikethroughRightLink url={'#'} text={'Click me'}/>
        </LinksWrapper>
        <LinksWrapper bgColor={"#F95738"}>
          <BackgroundLink url={'#'} text={'Click me'} bgColor={"#F7B236"}/>
        </LinksWrapper>
        <LinksWrapper bgColor={"#3E8914"}>
          <CrossLink url={'#'} text={'Click me'}/>
        </LinksWrapper>
        </Container>
    );
  }
}

export default LinksContainer;