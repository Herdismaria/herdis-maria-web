import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: #e7e7e7;  
  font-size: 20px;
  font-weight: bold;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  z-index: 1;

  &::after {
    background: ${({bgColor}) => bgColor};
    bottom: 0;
    content: '';
    display: inline-block;
    height: 15px;
    left: 0;
    position: absolute;
    width: 110%;
    transform-origin: 0% 50%;
    transform: scaleX(0);
    transition: transform 0.2s, opacity 0.3s;
    z-index: -1;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const BackgroundLink = ({url, text, bgColor}) => {
  return (
    <Link href={url} bgColor={bgColor}>{text}</Link>
  );
};

export default BackgroundLink;