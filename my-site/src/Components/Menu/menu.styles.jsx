import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const MenuWrapper = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  z-index: 5;
  height: 100%;
`;

export const toggleMenu = css`
  ${(props) =>
    props.isToggled
      ? css`
          transform: translateX(0);
          transition: transform 1s cubic-bezier(1, 0, 0, 1) 0ms,
            left 500ms cubic-bezier(1, 0, 0, 1) 0ms;
        `
      : css`
          transform: translateX(-95%);
          transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        `}
`;

export const MenuContainer = styled.div`
  background-color: white;
  height: inherit;
  width: 75vw;
  ${toggleMenu};

  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
`;

export const MenuLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuLinkStyles = css`
  font-size: 2em;
  margin: 1.5rem;
`;

export const MenuLink = styled(Link)`
  ${MenuLinkStyles}
`;

export const MenuContent = styled.div`
  width: 60%;
  margin-left: 3rem;
  text-align: center;
`;

export const MenuIconContainer = styled.i`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
`;

export const MenuIconLine = styled.span`
  width: 20px;
  height: 2px;
  background-color: black;
  margin-top: 3px;
  align-self: flex-end;
  transform-origin: right center;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:nth-child(1) {
    width: 16px;
  }

  &:nth-child(3) {
    width: 12px;
  }
`;

export const MenuTextContainer = styled.span`
  display: flex;
  flex-direction: column;

  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-left: 1rem;
`;

export const MenuTextLetter = styled.span`
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const toggleMenuClose = css`
  ${(props) =>
    props.isToggled
      ? css`
          ${MenuIconContainer} > span {
            transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

            &:nth-child(1) {
              width: 1.5rem;
              transform-origin: left center;
              transform: rotate(45deg);
            }
            &:nth-child(3) {
              width: 1.5rem;
              transform-origin: left center;
              transform: rotate(-45deg);
              margin-top: 10px;
            }
            &:nth-child(2) {
              width: 0;
            }
          }

          ${MenuTextContainer} > span {
            background-color: transparent;
            opacity: 0;
            transition: opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
          }
        `
      : css`
          &:hover {
            ${MenuIconContainer} > span {
              transform: scaleX(1.6);
              transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
            }

            ${MenuTextContainer} > span {
              &:nth-child(1) {
                transform: translate(-3px);
              }
              &:nth-child(3) {
                transform: translate(-3px);
              }
              transform: translate(3px);
              transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
            }
          }
        `}
`;

export const MenuToggleContainer = styled.a`
  cursor: pointer;

  position: fixed;
  top: 50%;
  left: 3.6rem;

  display: flex;
  align-items: center;
  text-align: center;
  z-index: 10;
  ${toggleMenuClose};

  :hover ~ div {
    ${(props) =>
      props.isToggled
        ? null
        : css`
            /* Menu hover going back in */
            transform: translateX(-88%);
            transition: all 0.5s cubic-bezier(1, 0, 0, 1) 0s,
              left 0.5s cubic-bezier(1, 0, 0, 1) 0ms;
          `}
  }
`;
