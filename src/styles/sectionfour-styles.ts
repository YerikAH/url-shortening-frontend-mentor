import styled from "styled-components";
import bgBosstDesktop from "../assets/bg-boost-desktop.svg";
import bgBosst from "../assets/bg-boost-mobile.svg";

export const SectionFourJust = styled.section`
  width: 100%;
  background: var(--dark-violet);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SectionFourDivImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${bgBosst});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (min-width: 900px) {
    background-image: url(${bgBosstDesktop});
  }
`;
export const SectionFourDiv = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 5rem 1.5rem;
  @media (min-width: 900px) {
    padding: 3rem 1.5rem;
  }
`;
export const SFDText = styled.h3`
  color: var(--white);
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -2px;
  text-align: center;
  @media (min-width: 900px) {
    font-size: 2.5rem;
  }
`;
export const SFDButton = styled.button`
  font-size: 1rem;
  color: var(--white);
  padding: 0.7rem 1.5rem;
  border-radius: 2rem;
  font-weight: 700;
  background-color: var(--cyan);
  margin-top: 1rem;
  transition: 0.3s;
  @media (min-width: 900px) {
    font-size: 1.125rem;
  }
  &:hover {
    background-color: var(--cyan-hover);
  }
`;
