import React, { Component } from "react";
import styled from "styled-components";

const SkillsWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const leftWrapper = styled.div`
  height: 100%;
`;

const rightWrapper = styled.div`
  height: 100%;
`;

class Skills extends Component {
  componentDidMount() {
    // wait until page has finished mounting to show content
    setTimeout(this.props.hideSlider, 300);
  }
  render() {
    return (
      <SkillsWrapper>
        <p style={{ transform: `translateY(2500px)` }}>Sometging</p>
      </SkillsWrapper>
    );
  }
}

export default Skills;
