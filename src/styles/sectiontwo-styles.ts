import styled from "styled-components";
import bgShorten from "../assets/bg-shorten-mobile.svg";
import bgShorteDesktop from "../assets/bg-shorten-desktop.svg";

export const DivSectionTwo = styled.div`
  width: 100%;
  max-width: 1100px;
  position: relative;
  top: -5rem;
`;
export const DivSectionTwoBox = styled.div`
  background-color: var(--dark-violet);
  position: relative;
  padding: 1.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  @media (min-width: 900px) {
    padding: 3.5rem;
  }
`;
export const DivSectionTwoBoxImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${bgShorten});
  z-index: 100;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 4rem -4.5rem;
  @media (min-width: 900px) {
    background-image: url(${bgShorteDesktop});
    background-position: center;
  }
`;
export const DivSectionTwoBoxLogic = styled.form`
  position: relative;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2%;
  }
`;
export const SectionTwoBoxInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  color: var(--very-dark-blue);
  @media (min-width: 900px) {
    width: 80%;
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }
`;
export const SectionTwoBoxSpan = styled.span`
  position: absolute;
  font-size: 0.9rem;
  font-style: italic;
  color: var(--red);
  bottom: -1.5rem;
`;
export const SectionTwoBoxButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  color: var(--white);
  font-weight: 700;
  background-color: var(--cyan);
  @media (min-width: 900px) {
    width: 18%;
    font-size: 1.125rem;
  }
`;
export const AllShortLinks = styled.div``;
