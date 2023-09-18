import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100vw;
  height: 5rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsl(var(--bg-color));
  color: hsl(var(--bg-contrast));
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  & .logo__container {
    height: 100%;
    padding-inline: 1em;
  }
  & svg {
    height: 100%;
    width: 4em;
  }
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  gap: 2em;
  padding-inline: 2em;
  & a {
    text-decoration: none;
    color: inherit;
  }
  & a[href="/Contact"] {
    border: 1px solid currentColor;
    padding: 0.5em 1em;
  }
  @media (max-width: 915px) {
    position: absolute;
    flex-direction: column;
    top: 15vh;
    right: 0;
    z-index: 99;
    background-color: hsl(var(--bg-color));
    height: 85vh;
    width: 100vw;
    gap: 0;
    margin: 0;
    text-align: center;
    scale: 0 0;
    transform-origin: top right;
    color: hsl(var(--bg-color));
    transition: scale 0.3s ease-in-out 0.2s, color 0.3s ease-in;
    &[aria-expanded="true"] {
      transition: scale 0.3s ease-in-out, color 0.3s ease-in 0.2s;
      display: flex;
      scale: 1 1;
      color: inherit;
    }
    & li a {
      padding: 1em 4em;
      /* outline: 1px solid pink; */
    }
  }
`;

const NavToggle = styled.button`
  z-index: 999;
`;

const NavDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  return (
    <StyledNav>
      <div className="logo__container">
        <svg
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.614136 475C13.2321 218.754 218.754 13.2321 475 0.614136V100.769C274 113.164 113.164 274 100.769 475H0.614136Z"
            fill="#20D0EE"
          />
          <path
            d="M0.614136 525C13.2321 781.246 218.754 986.768 475 999.386V899.231C274 886.836 113.164 726 100.769 525H0.614136Z"
            fill="#20D0EE"
          />
          <path
            d="M899.231 525C886.836 726 726 886.836 525 899.231V999.386C781.246 986.768 986.768 781.246 999.386 525H899.231Z"
            fill="#20D0EE"
          />
          <path
            d="M999.386 475C986.768 218.754 781.246 13.2321 525 0.614136V100.769C726 113.164 886.836 274 899.231 475H999.386Z"
            fill="#20D0EE"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M500 850C693.3 850 850 693.3 850 500C850 306.7 693.3 150 500 150C306.7 150 150 306.7 150 500C150 693.3 306.7 850 500 850ZM500.481 476.687L437.669 411.889L222.61 617.665L205.327 599.601L427.205 387.301C433.361 381.41 443.119 381.593 449.05 387.712L518.487 459.345L570.234 409.506C576.265 403.697 585.82 403.728 591.813 409.578L786.676 599.777L769.214 617.668L580.942 433.902L526.868 485.982L517.909 494.667L517.881 494.638L490.045 521.448L516.529 547.489L529.45 534.869L529.328 534.74L538.329 526.196L570.182 495.085C576.179 489.227 585.747 489.199 591.778 495.022L700.175 599.681L682.81 617.666L581.05 519.415L564.55 535.532L626.172 600.452L608.04 617.663L546.663 553.003L527.338 571.879C521.301 577.775 511.656 577.759 505.64 571.843L434.34 501.734L312.026 617.663L294.829 599.518L423.799 477.28C429.858 471.538 439.377 471.625 445.329 477.478L472.213 503.913L500.481 476.687ZM423.771 548.36C429.767 542.608 439.233 542.608 445.229 548.36L498.674 599.623L481.368 617.665L434.5 572.71L387.632 617.665L370.326 599.623L423.771 548.36Z"
            fill="#20D0EE"
          />
        </svg>
      </div>
{/*       <NavToggle onClick={toggleNav} aria-expanded={isOpen}>
        Menu
      </NavToggle> */}
      <StyledList aria-expanded={isOpen}>
        <li>
          <Link to="/" target="https://www.smashit.co.za/" rel="noopener noreferrer">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Services" target="https://www.smashit.co.za/services-2/" rel="noopener noreferrer">
            Services
          </Link>
        </li>
        <li>
          <Link to="/Team" target="https://www.smashit.co.za/about/" rel="noopener noreferrer">
            Meet the Team
          </Link>
        </li>
        <li>
          <Link to="/Blog" target="https://www.smashit.co.za/blog-2/" rel="noopener noreferrer">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/Faqs" target="https://www.smashit.co.za/faqs/" rel="noopener noreferrer">
            FAQs
          </Link>
        </li>
        <li>
          <Link to="/CalorieCalculator">Calorie Calculator</Link>
        </li>
        <li>
          <Link to="/Contact" target="https://www.smashit.co.za/contact-2/">Contact</Link>
        </li>
      </StyledList>
    </StyledNav>
  );
};

export default NavDesktop;
