import React from "react";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, RMDBLogoImage, TMDBLogoImage } from "./Test.styles";

const Test = () => (
  <Wrapper>
    <Content>
      <RMDBLogoImage src={RMDBLogo} alt="RMDB-Logo" />
      <TMDBLogoImage src={TMDBLogo} alt="TMDBLogo" />
    </Content>
  </Wrapper>
);

export default Test;
