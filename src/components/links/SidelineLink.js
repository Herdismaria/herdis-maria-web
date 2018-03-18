import React from "react";
import styled from "styled-components";

const Link = styled.a`
  color: #414141;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  margin: 0 30px;
  position: relative;
  text-decoration: none;

  &::after,
  &::before {
    background: #414141;
    color: #414141;
    content: "";
    display: inline-block;
    opacity: 0;
    position: absolute;
    transition: transform 0.2s, opacity 0.3s;
  }

  &::after {
    height: 20px;
    width: 2px;
  }

  &::before {
    height: 20px;
    width: 2px;
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(8px);
  }

  &:hover::before {
    opacity: 1;
    transform: translateX(-9px);
  }
`;

const SubtleUnderlineLink = ({ url, children }) => {
  return <Link href={url}>{children}</Link>;
};

export default SubtleUnderlineLink;
