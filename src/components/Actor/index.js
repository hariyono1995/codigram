import React from "react";
import PropTypes from "prop-types";

//  Styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ actor, character, profile_path }) => (
  <Wrapper>
    <Image src={profile_path} alt="actor-thumb" />
    <h2>{actor}</h2>
    <p>{character}</p>
  </Wrapper>
);

//  Prop type for  validate type of props
Actor.propTypes = {
  actor: PropTypes.string,
  character: PropTypes.string,
  profile_path: PropTypes.string,
};

export default Actor;
