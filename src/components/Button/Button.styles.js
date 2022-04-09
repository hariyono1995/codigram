import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  width: 25%;
  background: var(--darkGrey);
  color: var(--white);
  border: 0;
  border-radius: 30px;
  margin: auto;
  padding: 12px;
  max-width: var(--maxWidth);
  font-size: var(--fontBig);
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    opacity: 0.8;
  }
`;
