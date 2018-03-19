import React, { Component } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import media from "./theme/media";
import Slider from "./components/Slider";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Skills from "./containers/Skills/Skills";
import Navbar from "./containers/Navbar/Navbar";
import SocialBar from "./components/SocialBar";

import { withRouter } from "react-router-dom";
const NavBarWithRouter = withRouter(Navbar);

const routes = [
  {
    id: "home",
    path: "/",
    component: Home,
    title: "Home",
    exact: true
  },
  {
    id: "about",
    path: "/about",
    component: About,
    title: "About",
    exact: false
  },
  {
    id: "skills",
    path: "/skills",
    component: Skills,
    title: "Skills",
    exact: false
  }
];

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100vw;
`;

const Screen = styled.section`
  align-items: center;
  background: #f0d6cf;
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 90%;

  ${media.phone`
    height: 100%;
    width: 100%;
  `};
`;

const ContentWrapper = styled.main`
  height: 75%;
  position: relative;
  width: 100%;

  ${media.phone`
    height: 90%;
  `};
`;

class App extends Component {
  state = { showSlider: true };

  hideSlider = () => {
    this.setState({ showSlider: false });
  };

  showSlider = () => {
    this.setState({ showSlider: true });
  };

  render() {
    return (
      <Container>
        <Screen>
          <ContentWrapper>
            <Slider show={this.state.showSlider} />
            <Switch>
              {routes.map(({ path, component: Component, id, exact }) => (
                <Route
                  path={path}
                  key={id}
                  exact={exact}
                  render={props => (
                    <Component
                      {...props}
                      hideSlider={this.hideSlider}
                      sliderShowing={this.state.showSlider}
                    />
                  )}
                />
              ))}
            </Switch>
            <SocialBar />
          </ContentWrapper>
          <NavBarWithRouter routes={routes} showSlider={this.showSlider} />
        </Screen>
      </Container>
    );
  }
}

export default App;
