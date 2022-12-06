import styled from "styled-components";

export const OptionButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  display: block;
  height: 100%;
  width: 100%;
  padding-inline: 1em;
  color: hsl(var(--accent-color));
  background-color: transparent;
  border: none;
  outline: none;
  transition: all 0.3s ease-in-out 0.2s;
  & > * {
    pointer-events: none;
  }
  /* &:hover,
  &:focus-visible {
    background-color: hsl(var(--accent-color) / 0.6);
    color: hsl(var(--bg-contrast));
    transition: all 0.3s ease-in-out 0.2s;
    outline: none;
  } */
  &[data-selected="true"] {
    /* background-color: hsl(var(--accent-color)); */
    /* color: hsl(var(--bg-color)); */
    /* --svg-fill: var(--bg-color); */
  }
`;
