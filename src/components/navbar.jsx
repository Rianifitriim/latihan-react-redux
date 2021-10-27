import React from "react";
import styled from "styled-components";
import CartIcon from "./icons/cart";
import { useSelector } from "react-redux";
const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background: #eee;
  padding: 8px 16px;
`;

const StyledCartContainer = styled.div`
  display: flex;
`;

export default function Navbar() {
  const CartReducers = useSelector(state => state.CartReducers)
  return (
    <StyledNav>
      <StyledCartContainer>
        <CartIcon />
        <p>{CartReducers}</p>
      </StyledCartContainer>
    </StyledNav>
  );
}
