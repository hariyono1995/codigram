import React from "react";
import { Link } from "react-router-dom";

//  Styles
import { Wrapper, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({ title }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{title}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
