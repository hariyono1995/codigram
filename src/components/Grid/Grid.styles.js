import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  /* max-width: 1280px; */
  margin: auto;
  padding: 0, 20px;
  margin-top: 2rem;

  h1 {
    color: var(--medGrey);
    margin-bottom: 2rem;
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
