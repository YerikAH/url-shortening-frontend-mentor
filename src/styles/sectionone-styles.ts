import styled from "styled-components";

import humanWork from "../assets/illustration-working.svg";
export const SectionApp = styled.section`
  width: 100%;
  margin-top: 2rem;
  max-width: 1100px;
  @media (min-width: 900px) {
    padding-left: 1rem;
  }
`;

export const SectionGrid = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    grid-template-areas: "sectionGridTwo sectionGridOne";
    grid-template-columns: 60% 40%;
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
    overflow: hidden;
  }
  @media (min-width: 1100px) {
    overflow: initial;
  }
`;
export const GridOneResponsive = styled.div`
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  @media (min-width: 400px) {
    overflow: initial;
  }
  @media (min-width: 900px) {
    max-width: none;
  }
`;
export const GridOneResponsiveImage = styled.div`
  background-image: url(${humanWork});
  width: 130%;
  height: 17rem;
  background-attachment: initial;
  background-repeat: no-repeat;
  background-position: 2rem 0rem;
  background-size: contain;
  @media (min-width: 900px) {
    width: 45.813rem;
    height: 30.125rem;
    background-position: 0rem 0rem;
  }
`;
export const SectionGridTwo = styled.div`
  padding: 1rem;
  text-align: center;
  @media (min-width: 330px) {
    grid-area: sectionGridTwo;
  }
  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: start;
    padding: 0;
  } ;
`;
export const SectionGridTwoTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: var(--very-dark-blue);
  line-height: 3.5rem;
  @media (min-width: 900px) {
    font-size: 5rem;
    text-align: left;
    line-height: 5.8rem;
    letter-spacing: -3px;
  }
`;
export const SectionGridTwoText = styled.p`
  font-size: 1rem;
  color: var(--grayish-violet);
  text-align: center;
  margin: 1rem 0 2rem 0;
  font-weight: 50;
  @media (min-width: 900px) {
    font-size: 1.3rem;
    text-align: left;
    line-height: 2rem;
    max-width: 32rem;
    margin: 0rem 0 2rem 0;
  }
`;
export const SectionGridTwoButton = styled.button`
  font-size: 1rem;
  color: var(--white);
  padding: 0.7rem 2rem;
  border-radius: 2rem;
  font-weight: 700;
  background-color: var(--cyan);
  @media (min-width: 900px) {
    font-size: 1.3rem;
  }
`;
