import styled from "styled-components";

export const ArrowBtn = styled.button`
  position: absolute;
  height: 100%;
  text-align: center;
  border: none;
  border-radius: 1em;
  color: hsl(var(--bg-color) / 0.7);
  background-color: transparent;
  z-index: 3;
  font-size: inherit;
  scale: 1 1;
  /* outline: 2px dashed white; */

  &:focus {
    outline: none;
  }

  &.prev-btn {
    left: 0;
    padding-left: 15px;
    padding-right: 44%;
  }

  &.next-btn {
    right: 0;
    padding-right: 15px;
    padding-left: 44%;
  }
  & p {
    pointer-events: none;
    position: relative;
    transition: all 300ms ease-in-out;
  }

  &:focus-visible > p,
  &:hover > p {
    color: hsl(var(--bg-contrast) / 0.9);
    scale: 1.4 2;
    font-weight: bold;
    text-shadow: 0px 0px 4px hsl(var(--bg-color) / 0.3);
    transition: all 300ms ease-in-out 300ms;
  }
`;
