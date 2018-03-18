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
    bottom: 0;
    border-top: 3px solid;
    content: '';
    display: inline-block;
    left: 0;
    opacity: 0;
    position: absolute;
    width: 100%;
    transition: transform 0.2s, opacity 0.3s;
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(10px);
  }
`;

const UnderlineDownLink = ({url, text}) => {
  return (
    <Link href={url}>{text}</Link>
  );
};

export default UnderlineDownLink;