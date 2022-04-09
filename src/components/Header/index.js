import React, { useContext } from "react";

import { Link } from "react-router-dom";

//  Context
import { Context } from "../../context";

import TMDBLogo from "../../images/tmdb_logo.svg";
import RMDBLogo from "../../images/react-movie-logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  const [user] = useContext(Context);
  console.log("user", user);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="ardb-logo" />
        </Link>

        {user ? (
          <span>Logged in as : {user.username}</span>
        ) : (
          <Link to="/login">
            <span>Log in</span>
          </Link>
        )}

        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
