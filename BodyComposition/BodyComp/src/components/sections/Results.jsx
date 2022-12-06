import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CalorieDisplay from "../displays/CalorieDisplay";
import LifestyleSelector from "../buttons/LifestyleSelector";
import PhaseSelector from "../buttons/PhaseSelector";
import MacronutrientsDisplay from "../displays/MacronutrientsDisplay";

const ResultsContainer = styled.div`
  display: grid;
  height: 80vh;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 3em;
  padding: 2em;
  max-width: 930px;
  @media (min-width: 930px) {
    grid-template: 1fr 1fr /1fr 1fr;
  }
`;

export default function Results({ baseCalories }) {
  const lifestyleOptions = [
    "sedentary",
    "light",
    "moderate",
    "heavy",
    "athelete",
  ];
  const numberOfOptions = lifestyleOptions.length;
  const longestLifestyleOption = [...lifestyleOptions].sort(function (a, b) {
    return b.length - a.length;
  })[0].length;

  const lifestyleAdjustmentFactor = [1.2, 1.375, 1.55, 1.725, 1.9];

  lifestyleOptions.length === lifestyleAdjustmentFactor.length
    ? null
    : console.error("Lifestyle options and factors do not match length");

  const lightCalories = Math.round(baseCalories * 1.375) * 10;

  // state

  const [currentLifestyleIndex, setCurrentLifestyleIndex] = useState(1);
  const [lifestyle, setLifestyle] = useState("light");
  const [adjustedCalories, setAdjustedCalories] = useState(lightCalories);

  // ****************************************************************
  // * Lifestyle Functions                                          *
  // ****************************************************************

  function handleLifestyleChange(e) {
    const direction = e.target.dataset.direction;
    const directionFactor = direction === "prev" ? -1 : 1;
    setCurrentLifestyleIndex((prev) => prev + directionFactor);
  }

  useEffect(() => {
    setLifestyle(() => lifestyleOptions[currentLifestyleIndex]);
  }, [currentLifestyleIndex]);

  // ****************************************************************
  // * Phase Functions                                              *
  // ****************************************************************

  const [phase, setPhase] = useState("maintain");

  function handlePhaseChange(e) {
    setPhase(e.target.dataset.phase);
  }

  useEffect(() => {
    const phaseFactor = phase === "maintain" ? 0 : phase === "cut" ? -500 : 500;
    setAdjustedCalories(
      Math.round(
        baseCalories * lifestyleAdjustmentFactor[currentLifestyleIndex] +
          phaseFactor
      )
    );
  }, [lifestyle, phase, baseCalories]);

  // ****************************************************************
  // * Component                                                    *
  // ****************************************************************

  return (
    <ResultsContainer className="results-container">
      <LifestyleSelector
        lifestyle={lifestyle}
        currentLifestyleIndex={currentLifestyleIndex}
        numberOfOptions={numberOfOptions}
        longestLifestyleOption={longestLifestyleOption}
        handleClick={handleLifestyleChange}
      />
      <PhaseSelector phase={phase} handleClick={handlePhaseChange} />
      <CalorieDisplay adjustedCalories={adjustedCalories} />
      <MacronutrientsDisplay adjustedCalories={adjustedCalories} />
    </ResultsContainer>
  );
}
