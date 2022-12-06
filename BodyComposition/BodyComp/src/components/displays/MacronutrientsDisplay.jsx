import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowBtn } from "../buttons/ArrowButton.styled";

const Container = styled.div`
  position: relative;
  width: 100%;
  & p {
    font-weight: normal;
    text-align: center;
  }
  @media (min-width: 475px) {
    width: 80%;
  }
`;

const RoundDisplay = styled.div`
  --border-width: 0.4em;
  --border-gap: 0.4em;
  --offset: calc(var(--border-width) + var(--border-gap));
  aspect-ratio: 1;
  padding: 1em;
  display: grid;
  place-items: center;
  font-size: 1.25rem;
  /* font-weight: bold; */
  color: hsl(var(--bg-color));
  background-color: transparent;
  border-radius: 12em;
  border: var(--border-width) solid transparent;
  outline: hsl(var(--bg-color)) solid var(--border-gap);
  outline-offset: calc(var(--offset) * -1);
  position: relative;
  @media (min-width: 300px) {
    font-size: 1.25rem;
    padding: 1.1em;
    & p {
      font-size: 1rem;
    }
  }
  @media (min-width: 500px) {
    font-size: 2rem;
    padding: 1.4em;
    & p {
      font-size: 1.25rem;
    }
  }
  & p {
    font-size: 0.9rem;
  }

  &::before,
  &::after {
    content: "";
    width: calc(100% + var(--border-width) + var(--border-gap));
    aspect-ratio: 1;
    border-radius: 12em;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    pointer-events: none;
    transition: transform 0.3s ease-in-out 0.1s;
    z-index: -2;
  }
  &::before {
    background-color: hsl(var(--accent-color));
    width: calc(100% - var(--border-width) - var(--border-gap) + 0.2em);
    aspect-ratio: 1;
    z-index: -1;
  }
  &::after {
    background: conic-gradient(
      black 0 0.01turn,
      green 0.01turn
        ${({ nutrientDegs }) => nutrientDegs.proteinDegs - 0.01}turn,
      black ${({ nutrientDegs }) => nutrientDegs.proteinDegs - 0.01}turn
        ${({ nutrientDegs }) => nutrientDegs.proteinDegs + 0.01}turn,
      red ${({ nutrientDegs }) => nutrientDegs.proteinDegs + 0.01}turn
        ${({ nutrientDegs }) => nutrientDegs.carbDegs - 0.01}turn,
      black ${({ nutrientDegs }) => nutrientDegs.carbDegs - 0.01}turn
        ${({ nutrientDegs }) => nutrientDegs.carbDegs + 0.01}turn,
      purple ${({ nutrientDegs }) => nutrientDegs.carbDegs + 0.01}turn
        ${({ nutrientDegs }) => nutrientDegs.fatDegs - 0.01}turn,
      black ${({ nutrientDegs }) => nutrientDegs.fatDegs - 0.01}turn
    );
  }

  & p {
    font-size: 1rem;
  }

  & ul {
    list-style: none;
    text-align: center;
  }

  & li {
    font-size: 1.2rem;
    position: relative;
    margin-bottom: 0.2em;
    margin-inline: auto;
    width: max-content;
  }

  & li > span {
    font-weight: bold;
  }
  @media (min-width: 490px) {
    & p {
      font-size: 1.4rem;
    }

    & li {
      font-size: 1.7rem;
    }
  }

  & li::before {
    content: "";
    height: 0.1em;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 2em;
  }

  & li:nth-child(1)::before {
    background-color: green;
  }
  & li:nth-child(2)::before {
    background-color: red;
  }
  & li:nth-child(3)::before {
    background-color: purple;
  }
`;

const StyledArrowBtn = styled(ArrowBtn)`
  font-size: 1.5rem;
  padding: 0 3em;
  top: 0;
  &.prev-btn {
    left: 5%;
    padding-right: 2em;
    padding-left: 1em;
  }
  &.next-btn {
    right: 5%;
    padding-left: 2em;
    padding-right: 1em;
  }
`;

const MacronutrientsDisplay = ({ adjustedCalories }) => {
  const carbOptions = ["Low", "Moderate", "High"];
  const numberOfOptions = carbOptions.length;
  const [currentCarbOptionIndex, setCurrentCarbOptionIndex] = useState(1);

  const [carbLevel, setCarbLevel] = useState("moderate");

  function handleCarbOptionChange(e) {
    const direction = e.target.dataset.direction;
    const directionFactor = direction === "prev" ? -1 : 1;
    setCurrentCarbOptionIndex((prev) => prev + directionFactor);
  }

  const lowCarbPercentage = { protein: 0.4, carb: 0.2, fat: 0.4 };
  const moderateCarbPercentage = { protein: 0.3, carb: 0.35, fat: 0.35 };
  const highCarbPercentage = { protein: 0.3, carb: 0.5, fat: 0.2 };

  const nutrientPercentageOptions = [
    lowCarbPercentage,
    moderateCarbPercentage,
    highCarbPercentage,
  ];
  const [macronutrients, setMacronutrients] = useState({
    protein: 0,
    carb: 0,
    fat: 0,
  });
  useEffect(() => {
    setCarbLevel(carbOptions[currentCarbOptionIndex]);
    setMacronutrients({
      protein: Math.round(
        (nutrientPercentageOptions[currentCarbOptionIndex].protein *
          adjustedCalories) /
          4
      ),
      carb: Math.round(
        (nutrientPercentageOptions[currentCarbOptionIndex].carb *
          adjustedCalories) /
          4
      ),
      fat: Math.round(
        (nutrientPercentageOptions[currentCarbOptionIndex].fat *
          adjustedCalories) /
          9
      ),
    });
  }, [currentCarbOptionIndex, adjustedCalories]);

  // *******************************************************************
  // angles for display in turn units
  // const macronutrientTotal =
  //   macronutrients.protein + macronutrients.carb + macronutrients.fat;
  // const proteinDeg = nutrientPercentageOptions[currentCarbOptionIndex].protein;
  // const carbDeg =
  //   nutrientPercentageOptions[currentCarbOptionIndex].carb + proteinDeg;
  // const fatDeg =
  //   nutrientPercentageOptions[currentCarbOptionIndex].fat + carbDeg;
  const macronutrientTotal =
    macronutrients.protein + macronutrients.carb + macronutrients.fat;
  const proteinDeg = macronutrients.protein / macronutrientTotal;
  const carbDeg = macronutrients.carb / macronutrientTotal + proteinDeg;
  const fatDeg = macronutrients.fat / macronutrientTotal + carbDeg;

  const nutrientDegs = {
    proteinDegs: proteinDeg,
    carbDegs: carbDeg,
    fatDegs: fatDeg,
  };
  // ******************************************************************

  return (
    <Container>
      <RoundDisplay nutrientDegs={nutrientDegs}>
        <p className="carb-level">
          {carbLevel} Carb
          <br />
          Macronutrients
        </p>
        <ul className="nutrient-list">
          <li className="nutrient-item">
            Protein: <span>{macronutrients.protein}</span>g
          </li>
          <li className="nutrient-item">
            Carbs: <span>{macronutrients.carb}</span>g
          </li>
          <li className="nutrient-item">
            Fats: <span>{macronutrients.fat}</span>g
          </li>
        </ul>
      </RoundDisplay>
      {currentCarbOptionIndex > 0 && (
        <StyledArrowBtn
          className="arrow-btn prev-btn"
          data-direction="prev"
          onClick={handleCarbOptionChange}
        >
          <p>&#10094;</p>
        </StyledArrowBtn>
      )}
      {currentCarbOptionIndex < numberOfOptions - 1 && (
        <StyledArrowBtn
          className="arrow-btn next-btn"
          data-direction="next"
          onClick={handleCarbOptionChange}
        >
          <p>&#10095;</p>
        </StyledArrowBtn>
      )}
    </Container>
  );
};

export default MacronutrientsDisplay;
