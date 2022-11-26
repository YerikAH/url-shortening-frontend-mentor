import styled from "styled-components";
export const DivSectionThree = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 1rem 0 0 0;
  @media (min-width: 900px) {
    margin: 3rem 0 6rem 0;
  }
`;

export const SectionThreeFirst = styled.div`
  display: grid;
  place-items: center;
`;
export const SectionThreeTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  color: var(--very-dark-blue);
  @media (min-width: 900px) {
    font-size: 2.5rem;
    letter-spacing: -2px;
  }
`;
export const SectionThreeDescription = styled.p`
  text-align: center;
  font-size: 1rem;
  color: var(--grayish-violet);
  line-height: 1.8rem;
  margin-top: 1rem;
  @media (min-width: 900px) {
    font-size: 1.125rem;
    max-width: 31rem;
  }
`;

export const SectionThreeSecond = styled.div`
  display: grid;
  gap: 5rem;
  position: relative;
  margin: 6rem 0;
  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fill, 17rem);
    gap: 0;
    justify-content: space-between;
  }
  @media (min-width: 990px) {
    grid-template-columns: repeat(auto-fill, 19rem);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(auto-fill, 21.25rem);
  }
`;

export const STSecondBox = styled.div`
  background-color: var(--white);
  border-radius: 0.3rem;
  position: relative;
  display: grid;
  place-items: center;
  padding: 0 2rem 2rem 2rem;
  z-index: 600;
  @media (min-width: 900px) {
    place-items: start;
    &:nth-child(2) {
      top: 2rem;
    }
    &:nth-child(3) {
      top: 4rem;
    }
  }
`;
export const STSecondBoxCircle = styled.div`
  background-color: var(--dark-violet);
  border-radius: 255px;
  display: flex;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  align-items: center;
  position: relative;
  top: -2rem;
`;
export const STSecondBoxCircleImage = styled.img``;
export const STSecondBoxTitle = styled.h3`
  color: var(--very-dark-blue);
  text-align: center;
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  @media (min-width: 900px) {
    text-align: left;
    width: 100%;
  }
`;
export const STSecondBoxDescription = styled.p`
  text-align: center;
  font-size: 1rem;
  color: var(--grayish-violet);
  line-height: 1.563rem;
  @media (min-width: 900px) {
    text-align: left;
    font-size: 0.9rem;
  }
`;
export const LineDecorationMobile = styled.div`
  position: absolute;
  width: 0.5rem;
  background-color: var(--cyan);
  height: 80%;
  bottom: 0;
  margin: 0 auto;
  right: 0;
  left: 0;
  top: 0;
  @media (min-width: 900px) {
    width: 80%;
    height: 0.5rem;
    margin: auto 0;
  }
`;
