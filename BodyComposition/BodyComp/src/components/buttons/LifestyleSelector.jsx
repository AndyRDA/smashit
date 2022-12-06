import React from "react";
import styled from "styled-components";

import { StyledButton } from "./StyledButton.styled";
import { ArrowBtn } from "./ArrowButton.styled";

// **********************
// Styled Components
// **********************

const Option = styled.div`
  text-transform: uppercase;
  text-align: center;
  color: hsl(var(--bg-color));
  min-width: var(--button-width);
`;

// **********************************************************************************************
// *    Component                                                                               *
// **********************************************************************************************

const LifestyleSelector = ({
  lifestyle,
  currentLifestyleIndex,
  numberOfOptions,
  longestLifestyleOption,
  handleClick,
}) => {
  return (
    <>
      <StyledButton buttonWidth={longestLifestyleOption}>
        <Option>{lifestyle}</Option>

        {currentLifestyleIndex > 0 && (
          <ArrowBtn
            className="arrow-btn prev-btn"
            data-direction="prev"
            onClick={handleClick}
          >
            <p>&#10094;</p>
          </ArrowBtn>
        )}
        {currentLifestyleIndex < numberOfOptions - 1 && (
          <ArrowBtn
            className="arrow-btn next-btn"
            data-direction="next"
            onClick={handleClick}
          >
            <p>&#10095;</p>
          </ArrowBtn>
        )}
      </StyledButton>
    </>
  );
};

export default LifestyleSelector;
