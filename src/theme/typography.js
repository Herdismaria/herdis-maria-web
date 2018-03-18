import styled from "styled-components";
import media from "./media";
import { darkGrey, mainFont, secondaryFont } from "./variables";

export const H1 = styled.h1`
  color: ${darkGrey};
  font-family: ${mainFont};
  font-size: 4rem;
  font-weight: normal;
  margin: 0;
  position: relative;
  text-align: ${({ align }) => (align ? align : "center")};
  z-index: 2;

  ${media.phone`
    font-size: 2rem;
  `};

  ${media.tablet`
    font-size: 3rem;
  `};
`;

export const H2 = styled.h2`
  color: ${darkGrey};
  font-family: ${secondaryFont};
  margin-bottom: 0;
  position: relative;
  text-align: ${({ align }) => (align ? align : "center")};
  z-index: 2;
`;

export const H3 = styled.h3`
  color: ${darkGrey};
  font-family: ${secondaryFont};
  margin-bottom: 0;
  position: relative;
  text-align: ${({ align }) => (align ? align : "center")};
  z-index: 2;

  ${media.phone`
    font-size: 1rem;
  `};
`;
