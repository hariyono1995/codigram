import styled from "styled-components";

//   Header,
//   Wrapper,
//   Content,
//   RMDBLogoImage,
//   TMDBLogoImage,

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  padding: 20px 0;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  // padding: 20px 0;
  margin: 0 auto;
`;

export const RMDBLogoImage = styled.img`
  width: 180px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImage = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
