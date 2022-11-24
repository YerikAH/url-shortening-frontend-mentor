import styled from "styled-components";
export const AllNavApp = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  display: grid;
  padding: 5rem 1rem;
`;
export const NavApp = styled.nav`
  background-color: var(--dark-violet);
  width: 100%;
  height: min-content;
  padding: 2rem 2rem 3rem 2rem;
  border-radius: 0.5rem;
`;
export const NavAppUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const NavAppUlLi = styled.li`
  width: 100%;
`;
export const NavAppUlLiA = styled.a`
  width: 100%;
  display: block;
  color: var(--white);
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem;
  text-align: center;
`;
export const SeparatorDiv = styled.div`
  width: 100%;
  height: 1px;
  background: var(--gray);
  margin: 1rem 0;
  opacity: 0.4;
`;

export const NavAppUlLiButton = styled.button`
  font-size: 1rem;
  color: var(--white);
  padding: 0.7rem 1.5rem;
  width: 100%;
  border-radius: 2rem;
  font-weight: 700;
  background-color: var(--cyan);
`;
