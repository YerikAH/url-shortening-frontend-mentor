import styled from "styled-components";
import bgShorten from "../assets/bg-shorten-mobile.svg";

export const DivSectionTwo = styled.div`
  width: 100%;
  max-width: 1100px;
`;
export const DivSectionTwoBox = styled.div`
  background-color: var(--dark-violet);
  position: relative;
  padding: 1.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
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
`;
export const DivSectionTwoBoxLogic = styled.div`
  position: relative;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const SectionTwoBoxInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
`;
export const SectionTwoBoxSpan = styled.span``;
export const SectionTwoBoxButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  color: var(--white);
  font-weight: 700;
  background-color: var(--cyan);
`;
export const AllShortLinks = styled.div``;
