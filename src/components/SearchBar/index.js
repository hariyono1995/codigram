// import React, { useState, useEffect, useRef } from "react";

// import PropTypes from "prop-types";

// //  Styles
// import { Wrapper, Content } from "./Search.styles";

// //  Search icon
// import searchIcon from "../../images/search-icon.svg";

// const SearchMovie = ({ setSearchTerm }) => {
//   const [state, setState] = useState("");

//   const initial = useRef(true);

//   //  initial current is meaning initial with value now

//   useEffect(() => {
//     if (initial.current) {
//       initial.current = false;
//       return;
//     }
//     const timer = setTimeout(() => {
//       setSearchTerm(state);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [setSearchTerm, state]);

//   return (
//     <Wrapper>
//       <Content>
//         <img src={searchIcon} alt="search-movie" />
//         <input
//           type="text"
//           onChange={(event) => setState(event.currentTarget.value)}
//           value={state}
//           placeholder="Search Movie"
//         />
//       </Content>
//     </Wrapper>
//   );
// };

// SearchMovie.propTypes = {
//   setSearchTerm: PropTypes.func,
// };

// export default SearchMovie;

//  Refactor to class component
import React, { Component } from "react";

import PropTypes from "prop-types";

//  Styles
import { Wrapper, Content } from "./Search.styles";

//  Search icon
import searchIcon from "../../images/search-icon.svg";

class SearchMovie extends Component {
  constructor(props, state, timeout) {
    super(props);
    this.state = { value: "" };
    this.timeout = null;
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      const { setSearchTerm } = this.props;

      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        const { value } = this.state;
        setSearchTerm(value);
      }, 500);
    }
  }

  render() {
    const { value } = this.state;

    return (
      <Wrapper>
        <Content>
          <img src={searchIcon} alt="search-movie" />
          <input
            type="text"
            onChange={(event) =>
              this.setState({ value: event.currentTarget.value })
            }
            value={value}
            placeholder="Search Movie"
          />
        </Content>
      </Wrapper>
    );
  }
}

SearchMovie.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default SearchMovie;
