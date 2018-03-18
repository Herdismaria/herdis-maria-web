import React from "react";
import styled from "styled-components";
import { darkGrey } from "../theme/variables";
import Triangle from "./Triangle";

const DividerWrapper = styled.div`
  text-align: center;
`;

const Divider = () => {
  return (
    <DividerWrapper>
      <Triangle fill={darkGrey} rotation={180} />
      <Triangle fill={darkGrey} rotation={180} />
      <Triangle fill={darkGrey} rotation={180} />
    </DividerWrapper>
  );
};

export default Divider;
