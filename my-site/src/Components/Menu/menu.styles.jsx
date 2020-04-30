import styled, { css } from "styled-components";

export const MenuIconContainer = styled.i`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
`;

export const MenuIconLine = styled.span`
  width: 20px;
  height: 2px;
  background-color: blue;
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

export const toggleMenu = css`
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
  grid-row: 2 / 3;
  grid-column: 1 / 2;

  align-self: center;
  justify-self: center;
  margin-left: 6.4rem;

  z-index: 5;

  cursor: pointer;

  display: flex;
  align-items: center;
  height: auto;
  width: auto;
  background: transparent;
  text-align: center;

  ${toggleMenu};
`;
