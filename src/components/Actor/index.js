import React from "react";

//  Styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ actor, character, profile_path }) => (
  <Wrapper>
    <Image src={profile_path} alt="actor-thumb" />
    <h2>{actor}</h2>
    <p>{character}</p>
  </Wrapper>
);

export default Actor;
