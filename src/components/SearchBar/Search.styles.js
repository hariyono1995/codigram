import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--darkGrey);
  height: 100px;
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  position: relative;
  margin: 0 auto;
  background: var(--medGrey);
  border-radius: 40px;
  height: 55px;
  color: var(--white);

  /*  Set icon and input */

  img {
    position: absolute;
    width: 30px;
    left: 15px;
    top: 14px;
  }

  input {
    font-size: var(--fontBig);
    position: absolute;
    left: 50px;
    top: 6px;
    margin: 8px, 0;
    padding: 0, 0, 0, 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;
