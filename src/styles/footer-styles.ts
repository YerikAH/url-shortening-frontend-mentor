import styled from "styled-components";
export const FooterComponent = styled.footer`
  background: var(--very-dark-violet);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FComponentFather = styled.div`
  max-width: 1100px;
  padding: 4rem 1.5rem;
  background: var(--very-dark-violet);
  width: 100%;
  display: grid;
  place-items: center;
  gap: 2rem;
  grid-template-rows: 100%;
  @media (min-width: 900px) {
    grid-template-columns: 20% 14% 14% 14% 24%;
  }
`;
export const FComponent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  @media (min-width: 900px) {
    justify-content: start;
    align-content: baseline;
  }
`;
export const FComponentLogo = styled.img`
  margin-bottom: 1rem;
`;
export const FComponentTitle = styled.h5`
  color: var(--white);
  width: 100%;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  @media (min-width: 900px) {
    text-align: left;
  }
`;
export const FComponentUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) =>
    props.className === "social-media" ? "row" : "column"};
  margin-bottom: ${(props) =>
    props.className === "social-media" ? "0" : "1rem"};
  @media (min-width: 900px) {
    justify-content: start;
    align-items: start;
  }
`;
export const FComponentUlLi = styled.li``;
export const FComponentUlLiA = styled.a`
  color: var(--grayish-violet);
  display: block;
  padding: 0.5rem;
  transition: 0.3s;
  &:hover {
    color: var(--cyan);
  }
  & svg {
    scale: 1.1;
    margin: 0.3rem;
  }
  & > svg > path {
    transition: 0.3s;
  }
  &:hover > svg > path {
    fill: var(--cyan);
  }
`;
