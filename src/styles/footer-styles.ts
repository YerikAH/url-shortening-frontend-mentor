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
  padding: 3rem 1.5rem;
  background: var(--very-dark-violet);
  width: 100%;
  display: grid;
  place-items: center;
  gap: 2rem;
  grid-template-rows: 100%;
  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 216.8px);
  }
`;
export const FComponent = styled.div``;
export const FComponentLogo = styled.img``;
export const FComponentTitle = styled.h5`
  color: var(--white);
  width: 100%;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;
export const FComponentUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const FComponentUlLi = styled.li``;
export const FComponentUlLiA = styled.a`
  color: var(--grayish-violet);
`;
