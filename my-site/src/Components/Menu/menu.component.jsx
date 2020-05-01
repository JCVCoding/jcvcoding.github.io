import React from "react";

import {
  MenuToggleContainer,
  MenuIconContainer,
  MenuIconLine,
  MenuTextContainer,
  MenuTextLetter,
  MenuContainer,
  MenuLink,
  MenuLinkContainer,
  MenuWrapper,
  MenuContent,
} from "./menu.styles";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggled: false,
    };
  }

  handleClick = () => {
    if (this.state.isToggled === true) {
      this.setState({ isToggled: false });
    } else {
      this.setState({ isToggled: true });
    }
  };

  render() {
    const { isToggled } = this.state;
    return (
      <MenuWrapper>
        <MenuToggleContainer onClick={this.handleClick} isToggled={isToggled}>
          <MenuIconContainer>
            <MenuIconLine />
            <MenuIconLine />
            <MenuIconLine />
          </MenuIconContainer>
          <MenuTextContainer>
            <MenuTextLetter>m</MenuTextLetter>
            <MenuTextLetter>e</MenuTextLetter>
            <MenuTextLetter>n</MenuTextLetter>
            <MenuTextLetter>u</MenuTextLetter>
          </MenuTextContainer>
        </MenuToggleContainer>

        <MenuContainer isToggled={isToggled}>
          <MenuLinkContainer>
            <MenuLink to="/" onClick={this.handleClick}>
              Home
            </MenuLink>
            <MenuLink to="/projects" onClick={this.handleClick}>
              Projects
            </MenuLink>
            <MenuLink to="/contact" onClick={this.handleClick}>
              Contact
            </MenuLink>
          </MenuLinkContainer>
          <MenuContent>Hello</MenuContent>
        </MenuContainer>
      </MenuWrapper>
    );
  }
}

export default Menu;
