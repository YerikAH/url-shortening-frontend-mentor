import styled from "styled-components";

export const ShortLinkBox = styled.div`
  background-color: var(--white);
  display: grid;
  margin: 1rem 0;
  border-radius: 0.5rem;
  gap: 1rem;
  position: relative;
  @media (min-width: 900px) {
    grid-template-columns: 60% 30% 10%;
    align-items: center;
    gap: 0;
    padding: 0.5rem;
  }
  &:hover .button-delete-link {
    opacity: 1;
  }
`;
export const ShortLinkOriginal = styled.p`
  color: var(--very-dark-blue);
  border-bottom: 1px solid var(--gray);
  padding: 1rem;
  line-height: 33px;
  height: 3.5rem;
  overflow: hidden;
  @media (min-width: 900px) {
    border: none;
    padding: 0.6rem 1rem 1rem 1rem;
    line-height: 40px;
    font-size: 1.125rem;
  }
`;
export const ShortLinkShort = styled.p`
  color: var(--cyan);
  padding: 0 1rem;
  @media (min-width: 900px) {
    text-align: right;
    font-size: 1.125rem;
  }
`;
export const ShortLinkButton = styled.button`
  font-size: 1rem;
  color: var(--white);
  background-color: var(--cyan);
  padding: 0.5rem;
  font-weight: 700;
  border-radius: 0.3rem;
  margin: 0 1rem 1rem 1rem;
  @media (min-width: 900px) {
    margin: 0 1rem 0 0;
    font-size: 1rem;
  }
`;
export const ButtonDeleteLink = styled.button`
  border-radius: 255px;
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  opacity: 1;
  transition: 0.3s;
  &:hover {
    background-color: var(--red-hover);
  }
  @media (min-width: 900px) {
    opacity: 0;
  }
`;
export const ButtonDeleteLinkImage = styled.img``;
