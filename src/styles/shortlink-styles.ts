import styled from "styled-components";
export const ShortLinkBox = styled.div`
  background-color: var(--white);
  display: grid;
  margin: 1rem 0;
  border-radius: 0.5rem;
  gap: 1rem;
`;
export const ShortLinkOriginal = styled.p`
  color: var(--very-dark-blue);
  border-bottom: 1px solid var(--gray);
  padding: 1rem;
`;
export const ShortLinkShort = styled.p`
  color: var(--cyan);
  padding: 0 1rem;
`;
export const ShortLinkButton = styled.button`
  font-size: 1rem;
  color: var(--white);
  background-color: var(--cyan);
  padding: 0.5rem;
  font-weight: 700;
  border-radius: 0.3rem;
  margin: 0 1rem 1rem 1rem;
`;
