import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background: var(--darkGrey);
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-height: 100px;
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;

  .column {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--medGrey);
    padding: 10px;
    flex: 1;
    border-radius: 20px;
    margin: 0 20px;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 768px) {
    display: block;

    .column {
      margin: 20px 0;
    }
  }
`;
