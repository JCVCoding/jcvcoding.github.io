import React from "react";

import {
  MenuToggleContainer,
  MenuIconContainer,
  MenuIconLine,
  MenuTextContainer,
  MenuTextLetter,
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
    );
  }
}

export default Menu;
