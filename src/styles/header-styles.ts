import styled from "styled-components";

export const NavComponent = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  max-width: 1200px; /* soon change */
  width: 100%;
`;
export const NavComponentFirst = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.img``;
export const NavComponentSecond = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: flex;
  }
`;
export const NavComponentUl = styled.ul`
  display: none;
  gap: 2rem;
  align-items: center;
  @media (min-width: 900px) {
    display: flex;
  }
`;
export const ComponentUlLi = styled.li``;
export const ComponentUlLiA = styled.a`
  width: 100%;
  display: block;
  color: var(--grayish-violet);
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem 0;
  text-align: center;
`;
export const ComponentUlLiASpecial = styled.button`
  margin: 0 1rem;
  font-size: 1rem;
  color: var(--white);
  padding: 0.7rem 1.5rem;
  border-radius: 2rem;
  font-weight: 700;
  background-color: var(--cyan);
`;
export const SeparatorNav = styled.div`
  display: flex;
  gap: 2rem;
`;

export const HamButton = styled.button`
  background: transparent;
  @media (min-width: 900px) {
    display: none;
  }
`;
export const HamButtonImg = styled.img``;
