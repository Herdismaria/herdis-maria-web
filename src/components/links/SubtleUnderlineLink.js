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
    transform: translateY(30px);
    transition: transform 0.2s, opacity 0.3s;
  }

  &:hover::after {
    opacity: 0.4;
    transform: translateY(10px);
  }
`;

const SubtleUnderlineLink = ({url, text}) => {
  return (
    <Link href={url}>{text}</Link>
  );
};

export default SubtleUnderlineLink;