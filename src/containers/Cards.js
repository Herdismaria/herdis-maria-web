import React, { Component } from "react";
import styled from "styled-components";
import ShapeHoverCard from "../components/cards/shapeHoverCard/ShapeHoverCard";

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

class CardsContainer extends Component {
  render() {
    return (
      <Container>
        <ShapeHoverCard
          startPath={"M 180,160 0,218 0,0 180,0 z"}
          endPath={"m 180,34.57627 -180,0 L 0,0 180,0 z"}
          fill={"#0C2D66"}
          textColor={"#F7F7F7"}
          src={require("../assets/long-penguin-icon.svg")}
        />
      </Container>
    );
  }
}

export default CardsContainer;
