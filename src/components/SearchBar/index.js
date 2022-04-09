import React, { useState, useEffect, useRef } from "react";

//  Styles
import { Wrapper, Content } from "./Search.styles";

//  Search icon
import searchIcon from "../../images/search-icon.svg";

const SearchMovie = ({ setSearchTerm }) => {
  const [state, setState] = useState("");

  const initial = useRef(true);

  //  initial current is meaning initial with value now

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-movie" />
        <input
          type="text"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
          placeholder="Search Movie"
        />
      </Content>
    </Wrapper>
  );
};

export default SearchMovie;
