import styled from "styled-components";

export const StyledButton = styled.div`
  --button-width: ${(props) => props.buttonWidth}ch;
  --border-width: 0.4em;
  --border-gap: 0.2em;
  --offset: calc(var(--border-width) + var(--border-gap));
  --transition: all 300ms ease-in-out;
  cursor: pointer;
  display: grid;
  place-items: center;
  position: relative;
  height: 4em;
  min-width: 8em;
  padding: 1em 2em;
  border-radius: 1em;
  -webkit-border-radius: 1em;
  -moz-border-radius: 1em;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1;
  color: hsl(var(--bg-color));
  background-color: hsl(var(--accent-color));
  border: var(--border-width) solid hsl(var(--accent-color));
  outline: hsl(var(--bg-color)) solid var(--border-gap);
  outline-offset: calc(var(--offset) * -1);
  transition: var(--transition);
  /* @media (max-width: 642px) {
    outline: none;
  } */
  &:focus {
    /* outline: hsl(var(--bg-color)) solid var(--border-gap); */
    box-shadow: 0 0 10px 5px hsl(var(--bg-color)),
      0 0 8px 8px hsl(var(--accent-color) / 0.7);
  }
  &::before,
  &::after {
    --long-side: calc(100% + (var(--offset)) + var(--border-gap) + 1px);
    --short-side: calc(100% - 2em);
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    pointer-events: none;
    transition: var(--transition) 0.1s;
  }
  &::before {
    width: var(--short-side);
    height: var(--long-side);
    translate: -50% -50%;
    background-image: linear-gradient(
      hsl(var(--bg-color)) calc(var(--offset) - 2px),
      transparent calc(var(--offset) - 2px),
      transparent calc(100% - var(--offset) + 2px),
      hsl(var(--bg-color)) calc(100% - var(--offset) + 2px)
    );
  }
  &::after {
    width: var(--long-side);
    height: var(--short-side);

    background-image: linear-gradient(
      90deg,
      hsl(var(--bg-color)) calc(var(--offset) - 1px),
      transparent calc(var(--offset) - 1px),
      transparent calc(100% - var(--offset) + 1px),
      hsl(var(--bg-color)) calc(100% - var(--offset) + 1px)
    );
  }

  &:hover:before,
  &:has(:focus-visible):before {
    scale: 0 1;
    transition: var(--transition) 0.2s;
  }

  &:hover:after,
  &:has(:focus-visible):after {
    scale: 1 0;
    transition: var(--transition) 0.2s;
  }
  &[data-disabled="true"] {
    pointer-events: none;
    background-color: hsl(var(--accent-color) / 0.4);
    border: var(--border-width) solid hsl(var(--accent-color) / 0);
  }
  @media (min-width: 410px) {
    font-size: 1.7rem;
  }
`;
