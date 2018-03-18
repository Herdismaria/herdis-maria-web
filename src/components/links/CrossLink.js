import React from "react";
import styled from "styled-components";

const Link = styled.a`
  color: #e7e7e7;
  font-size: 20px;
  font-weight: bold;
  opacity: 0.3;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.3s;

  &::after,
  &::before {
    background: #e7e7e7;
    content: "";
    display: inline-block;
    height: 2px;
    opacity: 0.3;
    left: 0;
    position: absolute;
    transition: transform 0.3s;
    width: 100%;
  }

  &::after {
    bottom: -8px;
  }

  &::before {
    top: -8px;
  }

  &:hover {
    opacity: 1;
  }
  &:hover::after {
    transform: translateY(-20px) rotate(-45deg);
  }

  &:hover::before {
    transform: translateY(20px) rotate(45deg);
  }
`;

const CrossLink = ({ url, text }) => {
  return <Link href={url}>{text}</Link>;
};

export default CrossLink;
