import React from "react";
import styled from "styled-components";

const Link = styled.span`
  color: #414141;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  margin: 0 30px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  &::after {
    background: #414141;
    bottom: -1px;
    content: "";
    display: inline-block;
    height: 2px;
    left: 0;
    opacity: 0.3;
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const StrikethroughLink = ({ url, children }) => {
  return <Link>{children}</Link>;
};

export default StrikethroughLink;
