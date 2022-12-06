import React, { useState } from "react";
import { useEffect } from "react";
import MeasurementsForm from "../components/sections/MeasurementForm";
import Results from "../components/sections/Results";
import calculateCalories from "../HelperFunctions/calculateCalories";
import styled from "styled-components";
import NavDesktop from "../components/sections/NavDesktop";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1500px;
  align-items: center;
  justify-content: center;
  /* & > * {
    outline: 1px dashed white;
  } */
`;

function CalorieCalculator() {
  const userFormData = JSON.parse(localStorage.getItem("userFormData"));
  const userShowResults = JSON.parse(localStorage.getItem("userShowResults"));

  const [baseCalories, setBaseCalories] = useState(0);

  const [formData, setFormData] = useState({
    mass: "",
    height: "",
    age: "",
    sex: "",
    bodyFatPercentage: "",
  });
  // const [formData, setFormData] = useState({
  //   mass: userFormData.mass ? userFormData.mass : "",
  //   height: userFormData.height ? userFormData.height : "",
  //   age: userFormData.age ? userFormData.age : "",
  //   sex: userFormData.sex ? userFormData.sex : "",
  //   bodyFatPercentage: userFormData.bodyFatPercentage
  //     ? userFormData.bodyFatPercentage
  //     : "",
  // });

  const [isFormValid, setIsFormValid] = useState(false);
  const [showResults, setShowResults] = useState(false);
  // const [showResults, setShowResults] = useState(userShowResults);

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function checkIsFormValid() {
    const { bodyFatPercentage, sex, ...RequiredFormData } = formData;
    const pattern = /^[0-9]+$/;
    Object.values(RequiredFormData).every((value) => value.match(pattern)) &&
    (sex || bodyFatPercentage > 0)
      ? setIsFormValid(true)
      : setIsFormValid(false);
  }
  useEffect(() => {
    checkIsFormValid();
    calculateCalories(formData, setBaseCalories);
    localStorage.setItem("userFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("userShowResults", JSON.stringify(formData));
  }, [showResults]);

  function handleCalculate() {
    setShowResults(true);
  }

  return (
    <div className="App">
      <NavDesktop />
      <FlexContainer>
        <MeasurementsForm
          handleChange={handleFormChange}
          formData={formData}
          calculateCalories={calculateCalories}
          setBaseCalories={setBaseCalories}
          isFormValid={isFormValid}
          showResults={showResults}
          handleCalculate={handleCalculate}
        />
        {showResults ? (
          <Results baseCalories={baseCalories} isFormValid={isFormValid} />
        ) : null}
      </FlexContainer>
    </div>
  );
}

export default CalorieCalculator;
