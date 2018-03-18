import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: #e7e7e7;  
  font-size: 20px;
  font-weight: bold;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  &::after {
    background: #e7e7e7;
    bottom: 0;
    content: '';
    display: inline-block;
    height: 2px;
    left: 0;
    position: absolute;
    width: 110%;
    transform-origin: 100% 50%;
    transform: translate(-5px ,-10px) scaleX(0);
    transition: transform 0.2s, opacity 0.3s;
  }

  &:hover::after {
    transform: translate(-5px ,-10px) scaleX(1);
  }
`;

const StrikethroughRightLink = ({url, text}) => {
  return (
    <Link href={url}>{text}</Link>
  );
};

export default StrikethroughRightLink;