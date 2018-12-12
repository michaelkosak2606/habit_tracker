import React, { Component } from "react";
import { css } from "emotion";
import styled from "react-emotion";
import { NavLink } from "react-router-dom";

const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  height: 50px;
`;
const linkContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    height: 15px;
    bottom: 100%;
    background: linear-gradient(transparent, #d2f2f6);
  }

  &.active {
    background: blue;
  }
`;
const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  padding: 15px;
  height: 25px;
  box-shadow: 0 2px 2px grey;

  &.active {
    color: white;
    background: #4b75fa;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <div className={linkContainerStyle}>
        <div className={container}>
          <StyledLink activeClassName="active" exact to="/">
            Current Day
          </StyledLink>
        </div>
        <div className={container}>
          <StyledLink activeClassName="active" to="/statistics">
            Statistics
          </StyledLink>
        </div>
        <div className={container}>
          <StyledLink activeClassName="active" to="/charts">
            Charts
          </StyledLink>
        </div>
      </div>
    );
  }
}
