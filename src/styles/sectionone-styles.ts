import styled from "styled-components";

import humanWork from "../assets/illustration-working.svg";
export const SectionApp = styled.section`
  width: 100%;
`;

export const SectionGrid = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    grid-template-areas: "sectionGridTwo sectionGridOne";
    grid-template-columns: 50% 50%;
    display: grid;
  }
`;
export const SectionGridOne = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 900px) {
    grid-area: sectionGridOne;
  }
`;
export const GridOneResponsive = styled.div`
  width: 100%;
  max-width: 400px;
`;
export const GridOneResponsiveImage = styled.div`
  background-image: url(${humanWork});
  width: 130%;
  height: 17rem;
  background-attachment: initial;
  background-repeat: no-repeat;
  background-position: 2rem 0rem;
  background-size: contain;
`;
export const SectionGridTwo = styled.div`
  padding: 1rem;
  text-align: center;
  @media (min-width: 330px) {
    grid-area: sectionGridTwo;
  } ;
`;
export const SectionGridTwoTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: var(--very-dark-blue);
  line-height: 3.5rem;
`;
export const SectionGridTwoText = styled.p`
  font-size: 1rem;
  color: var(--grayish-violet);
  text-align: center;
  margin: 1rem 0 2rem 0;
  font-weight: 50;
`;
export const SectionGridTwoButton = styled.button`
  font-size: 1rem;
  color: var(--white);
  padding: 0.7rem 2rem;
  border-radius: 2rem;
  font-weight: 700;
  background-color: var(--cyan);
`;
