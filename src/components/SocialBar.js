import React from "react";
import styled from "styled-components";

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
`;

const IconWrapper = styled.span`
  background: url(${({ url }) => url});
  border-radius: 50%;
  height: 50px;
  color: #000;
  width: 50px;
`;

const SocialBar = ({ horizontal, mainColor, secondaryColor }) => {
  return (
    <SocialWrapper horizontal={horizontal}>
      <IconWrapper url={require("../assets/github-icon.svg")} />
    </SocialWrapper>
  );
};

export default SocialBar;
