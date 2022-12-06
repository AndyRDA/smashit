import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: fit-content;

  aspect-ratio: 1;
  & p {
    font-weight: normal;
    text-align: center;
  }
  @media (min-width: 475px) {
    /* width: 80%; */
  }
`;

const RoundDisplay = styled.div`
  --border-width: 0.4em;
  --border-gap: 0.4em;
  --offset: calc(var(--border-width) + var(--border-gap));

  aspect-ratio: 1;
  display: grid;
  /* place-items: center; */
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: hsl(var(--bg-color));
  background-color: hsl(var(--accent-color));
  border-radius: 12em;
  -webkit-border-radius: 12em;
  -moz-border-radius: 12em;
  border: var(--border-width) solid hsl(var(--accent-color) / 0.5);
  outline: hsl(var(--bg-color)) solid var(--border-gap);
  outline-offset: calc(var(--offset) * -1);
  position: relative;
  @media (min-width: 300px) {
    /* font-size: 1.25rem; */
    padding: 1.1em;
    & p {
      /* font-size: 2rem; */
    }
  }
  @media (min-width: 500px) {
    padding: 1.5em;
    & p {
      /* font-size: 2rem; */
    }
    &.calories {
      /* font-size: 1.25rem; */
    }
  }
  & p {
    font-size: 1rem;
    /* margin-bottom: -3em; */
  }

  &::before,
  &::after {
    --longSide: calc(100% + var(--border-gap) * 2 + 2px);
    --shortSide: var(--border-gap);
    /* --longSide: calc(100% + (var(--offset) * 2)); */
    /* --shortSide: calc(100% - 2em); */
    /* --bg-color: 0, 100%, 50%; */
    /* outline: 2px solid pink; */

    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    pointer-events: none;
    transition: transform 0.3s ease-in-out 0.1s;
  }
  &::before {
    width: var(--shortSide);
    height: var(--longSide);
    background-image: linear-gradient(
      hsl(var(--bg-color)) calc(var(--offset)),
      transparent var(--offset),
      transparent calc(100% - var(--offset)),
      hsl(var(--bg-color)) calc(100% - var(--offset))
    );
  }
  &::after {
    height: var(--shortSide);
    width: var(--longSide);
    background-image: linear-gradient(
      90deg,
      hsl(var(--bg-color)) var(--offset),
      transparent var(--offset),
      transparent calc(100% - var(--offset)),
      hsl(var(--bg-color)) calc(100% - var(--offset))
    );
  }
`;

const CalorieDisplay = ({ adjustedCalories }) => {
  return (
    <Container>
      <RoundDisplay>
        <p>
          Daily <br />
          Calorie Intake
        </p>
        <span className="calories">{adjustedCalories}</span>
      </RoundDisplay>
    </Container>
  );
};

export default CalorieDisplay;
