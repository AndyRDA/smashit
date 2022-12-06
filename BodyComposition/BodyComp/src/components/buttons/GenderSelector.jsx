import React from "react";
import styled from "styled-components";
import { StyledButton } from "./StyledButton.styled";
import { OptionButton } from "./OptionButton.styled";

// ****************
// Syled Components
// ****************

const GenderContainer = styled(StyledButton)`
  grid-template-columns: var(--border-gap) 1fr 1fr var(--border-gap);
  padding: 0;
  background-color: hsl(var(--bg-color));
  &:has([data-thin="true"]) {
    height: 2em;
    min-width: 6ch;
    --border-width: 0.1em;
    --border-gap: 0.1em;
  }
  &:has([data-thin="true"])::before,
  &:has([data-thin="true"])::after {
    scale: 0;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  transition: var(--transition) 0.2s;
  &:hover,
  &:focus-visible {
    background-color: hsl(var(--accent-color) / 0.6);
    transition: all 0.3s ease-in-out 0.2s;
  }
  &:hover > *,
  &:focus-visible > * {
    color: hsl(var(--bg-contrast));
    transition: var(--transition) 0.2s;
    outline: none;
  }
  &:nth-child(1) {
    border-radius: 0.5em 0 0 0.5em;
    grid-column-start: 2;
    grid-column-end: 3;
  }
  &:nth-child(2) {
    border-radius: 0 0.5em 0.5em 0;
  }
  &[data-selected="true"] {
    background-color: hsl(var(--accent-color));
  }
  &[data-selected="true"] > * {
    color: hsl(var(--bg-color));
    --svg-fill: var(--bg-color);
    transition: var(--transition) 0.2s;
  }
  &:has([data-thin="true"]) {
    border-radius: 1em;
  }
`;

const GenderButton = styled(OptionButton)`
  --svg-fill: var(--accent-color);
  /* --svg-fill: var(--bg-contrast); */
  font-size: 1rem;
  @media (min-width: 490px) {
    font-size: 1.3rem;
  }

  &[data-gender="male"] {
    border-radius: 1em 0 0 1em;
    border-right: 1px solid hsl(var(--accent-color) / 0.3);
  }
  &[data-gender="female"] {
    border-radius: 0 1em 1em 0;
    border-left: 1px solid hsl(var(--accent-color) / 0.3);
  }
  &[data-gender="female"] > div {
    flex-direction: row-reverse;
  }
  &:hover,
  &:focus-visible {
    --svg-fill: var(--bg-contrast);
    transition: var(--transition) 0.2s;
  }
  &[data-thin="true"] {
    padding-inline: 0.25em;
    border: none;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-around;
`;

const GenderSelector = ({ handleChange, gender, showResults }) => {
  return (
    <GenderContainer>
      <ButtonContainer data-selected={gender === "male"}>
        <GenderButton
          onClick={handleChange}
          data-gender="male"
          className="gender-btn"
          name="sex"
          value="male"
          type="button"
          data-thin={showResults}
        >
          <LabelContainer>
            <svg
              className="gender-icon"
              width="20"
              height="21"
              viewBox="0 0 41 42"
              xmlns="http://www.w3.org/2000/svg"
              pointerEvents="none"
            >
              <path
                fill="hsl(var(--svg-fill))"
                d="M23.9474 0.636475V4.03756H35.1471L22.0734 17.1131C19.3306 14.9821 15.8788 13.9766 12.4207 14.3014C8.96267 14.6262 5.75843 16.2569 3.46048 18.8613C1.16253 21.4657 -0.0563408 24.8481 0.0520681 28.3197C0.160477 31.7913 1.58801 35.091 4.04399 37.547C6.49996 40.003 9.7997 41.4305 13.2713 41.5389C16.7429 41.6473 20.1252 40.4284 22.7297 38.1305C25.3341 35.8325 26.9647 32.6283 27.2895 29.1703C27.6143 25.7122 26.6089 22.2604 24.4779 19.5176L37.5517 6.44214V17.6419H40.9528V0.636475H23.9474ZM13.7441 38.0485C11.7261 38.0485 9.75337 37.4501 8.07545 36.3289C6.39753 35.2078 5.08975 33.6142 4.31749 31.7498C3.54523 29.8854 3.34317 27.8339 3.73686 25.8546C4.13056 23.8754 5.10233 22.0573 6.52928 20.6304C7.95623 19.2034 9.77428 18.2317 11.7535 17.838C13.7328 17.4443 15.7843 17.6463 17.6487 18.4186C19.5131 19.1909 21.1066 20.4986 22.2278 22.1766C23.3489 23.8545 23.9474 25.8272 23.9474 27.8452C23.9442 30.5503 22.8682 33.1437 20.9554 35.0565C19.0426 36.9693 16.4492 38.0453 13.7441 38.0485Z"
              />
            </svg>
            {!showResults && <p>Male</p>}
          </LabelContainer>
        </GenderButton>
      </ButtonContainer>
      <ButtonContainer data-selected={gender === "female"}>
        <GenderButton
          onClick={handleChange}
          data-gender="female"
          className="gender-btn"
          name="sex"
          value="female"
          type="button"
          data-thin={showResults}
        >
          <LabelContainer>
            <svg
              className="gender-icon"
              width="14"
              height="21"
              viewBox="0 0 28 42"
              xmlns="http://www.w3.org/2000/svg"
              pointerEvents="none"
            >
              <path
                fill="hsl(var(--svg-fill))"
                d="M15.8363 27.794C19.2768 27.3606 22.4228 25.6322 24.6339 22.9609C26.845 20.2895 27.9549 16.8759 27.7378 13.415C27.5206 9.95412 25.9927 6.70605 23.465 4.33202C20.9374 1.958 17.6 0.636475 14.1323 0.636475C10.6645 0.636475 7.32717 1.958 4.79952 4.33202C2.27186 6.70605 0.743934 9.95412 0.526776 13.415C0.309618 16.8759 1.41955 20.2895 3.63063 22.9609C5.84171 25.6322 8.98772 27.3606 12.4282 27.794V31.3214H3.90808V34.7294H12.4282V41.5456H15.8363V34.7294H24.3564V31.3214H15.8363V27.794ZM3.90808 14.2811C3.90808 12.2589 4.50772 10.2822 5.63117 8.60083C6.75461 6.91947 8.35141 5.60901 10.2196 4.83517C12.0879 4.06132 14.1436 3.85885 16.1269 4.25335C18.1102 4.64785 19.932 5.62161 21.3619 7.05149C22.7917 8.48137 23.7655 10.3031 24.16 12.2864C24.5545 14.2697 24.352 16.3255 23.5782 18.1937C22.8043 20.0619 21.4939 21.6587 19.8125 22.7822C18.1312 23.9056 16.1544 24.5053 14.1323 24.5053C11.4216 24.5021 8.82288 23.4239 6.90616 21.5072C4.98944 19.5905 3.91124 16.9917 3.90808 14.2811V14.2811Z"
              />
            </svg>
            {!showResults && <p>Female</p>}
          </LabelContainer>
        </GenderButton>
      </ButtonContainer>
    </GenderContainer>
  );
};

export default GenderSelector;
