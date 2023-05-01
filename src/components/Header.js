import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #3f8600;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;

  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;

const HeaderText = styled.h1`
  font-size: 30px;
  letter-spacing: 2px;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>My Budget</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
