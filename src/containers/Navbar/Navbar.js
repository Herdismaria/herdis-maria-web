import React, { Component } from "react";
import styled from "styled-components";
import Triangle from "../../components/Triangle";
import { Motion, spring } from "react-motion";
import media from "../../theme/media";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  position: relative;
  width: 60%;

  ${media.phone`
    width: 100%;
  `};
`;

const NavSlider = styled.span`
  bottom: -15px;
  left: 0px;
  position: absolute;
`;

const NavLink = styled.button`
  background: transparent;
  border: none;
  color: #414141;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  outline: none;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  ${media.phone`
    font-size: 0.8em;
    width: 100%;
  `};
`;

const springConfig = {
  stiffness: 200,
  damping: 18
};

class Navbar extends Component {
  state = {
    x: 0,
    positions: {},
    activeTab: null
  };
  tabs = {};

  handlePageChange = e => {
    const id = e.target.id;
    // if active link clicked nothing happens
    if (id === this.state.activeTab) {
      return;
    }

    // update state to indicate which page we are on
    this.setActiveLink(id);
    // hide page
    this.props.showSlider();
    // navigate after the slider has covered the page
    setTimeout(this.changePage.bind(this, id), 500);
  };

  changePage = id => {
    this.props.history.push(id);
  };

  componentDidMount() {
    // listen to page change to update state when browser backbutton is clicked
    this.unlisten = this.props.history.listen((location, action) => {
      this.setActiveLink(this.props.location.pathname);
    });
    this.getPositions();
  }

  shouldComponentUpdate(nextprops, nextstate) {
    const { x, activeTab } = this.state;
    return nextstate.x !== x && nextstate.activeTab !== activeTab;
  }

  componentWillUnmount() {
    this.unlisten();
  }

  getPositions = () => {
    const wrapperBounds = this.navLinks.getBoundingClientRect();
    let positions = {};

    Object.keys(this.tabs).forEach(key => {
      const el = this.tabs[key];
      const elBounds = el.getBoundingClientRect();
      const middle =
        elBounds.left - wrapperBounds.left + elBounds.width / 2 - 6;
      positions[key] = middle;
    });

    // if initial mount
    if (this.state.activeTab === null) {
      const path = this.props.location.pathname;
      this.setState({ positions, activeTab: path, x: positions[path] });
    }
    this.setState({ positions });
  };

  setActiveLink = id => {
    this.setState(prev => ({
      x: prev.positions[id],
      activeTab: id
    }));
  };

  render() {
    const { routes } = this.props;
    const { x } = this.state;
    return (
      <NavWrapper innerRef={e => (this.navLinks = e)}>
        {routes.map((page, i) => {
          return (
            <NavLink
              onClick={this.handlePageChange}
              key={page.path}
              id={page.path}
              innerRef={e => (this.tabs[page.path] = e)}
              tabIndex={0}
            >
              {page.title}
            </NavLink>
          );
        })}
        <Motion
          style={{ x: spring(x, springConfig), opacity: x ? spring(1) : 0 }}
        >
          {({ x, opacity }) => (
            <NavSlider
              style={{ transform: `translate(${x}px)`, opacity: opacity }}
            >
              <Triangle fill={"#414141"} />
            </NavSlider>
          )}
        </Motion>
      </NavWrapper>
    );
  }
}

export default Navbar;
