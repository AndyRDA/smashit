import React from "react";
import styled from "styled-components";
import { StyledButton } from "./StyledButton.styled";
import { OptionButton } from "./OptionButton.styled";

const PhaseContainer = styled(StyledButton)`
  width: fit-content;
  grid-template-columns: var(--border-gap) 1fr 1fr 1fr var(--border-gap);
  background-color: hsl(var(--bg-color));
  padding: 0;
  border-radius: 1em;
  outline: hsl(var(--bg-color)) solid var(--border-gap);
  outline-offset: calc(var(--offset) * -1);
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  transition: all 0.3s ease-in-out 0.2s;

  &:nth-child(1) {
    border-radius: 0.5em 0 0 0.5em;
    grid-column-start: 2;
    grid-column-end: 3;
  }
  &:nth-child(2) {
    &::before {
      content: "Phase";
      color: hsl(var(--bg-contrast));
      position: absolute;
      top: -2em;
      left: 50%;
      translate: -50% 0;
    }
  }
  &:nth-child(3) {
    border-radius: 0 0.5em 0.5em 0;
  }
  &:hover,
  &:focus-visible {
    background-color: hsl(var(--accent-color) / 0.6);
    transition: all 0.3s ease-in-out 0.2s;
  }
  &:hover > *,
  &:focus-visible > * {
    color: hsl(var(--bg-contrast));
    transition: all 0.3s ease-in-out 0.2s;
    outline: none;
  }
  &[data-selected="true"] {
    background-color: hsl(var(--accent-color));
  }
  &[data-selected="true"] > * {
    color: hsl(var(--bg-color));
    --svg-fill: var(--bg-color);
  }
`;

const PhaseButton = styled(OptionButton)`
  --phase: ${(props) => props.phase};
  /* background-color: hsl(0 0% 100% / 0.6); */
  /* border-radius: 12em; */

  /* &[data-phase="cut"] {
    border-radius: 1em 0 0 1em;
    border-right: 1px solid hsl(var(--accent-color) / 0.3);
    grid-column-start: 2;
    grid-column-end: 3; */
  /* outline: hsl(var(--bg-color)) solid var(--border-gap); */
  /* outline-offset: calc(var(--offset) * -1); */
  /* z-index: 99; */
  /* }
  &[data-phase="maintain"] {
    grid-column-start: 3;
    grid-column-end: 4;
  }
  &[data-phase="bulk"] {
    border-radius: 0 1em 1em 0;
    border-left: 1px solid hsl(var(--accent-color) / 0.3);
    grid-column-start: 4;
    grid-column-end: 5;
  } */
`;

const PhaseSelector = ({ phase, handleClick }) => {
  return (
    <PhaseContainer>
      <ButtonContainer data-selected={phase === "cut"}>
        <PhaseButton
          onClick={handleClick}
          data-phase="cut"
          id="cut"
          className="phase-btn"
        >
          Cut
        </PhaseButton>
      </ButtonContainer>
      <ButtonContainer data-selected={phase === "maintain"}>
        <PhaseButton
          onClick={handleClick}
          data-phase="maintain"
          id="maintain"
          className="phase-btn"
        >
          Maintain
        </PhaseButton>
      </ButtonContainer>
      <ButtonContainer data-selected={phase === "bulk"}>
        <PhaseButton
          onClick={handleClick}
          data-phase="bulk"
          id="bulk"
          className="phase-btn"
        >
          Bulk
        </PhaseButton>
      </ButtonContainer>
    </PhaseContainer>
  );
};

export default PhaseSelector;
