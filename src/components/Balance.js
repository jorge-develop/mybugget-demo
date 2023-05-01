import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import styled from "styled-components";

const BalanceContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BalanceTitle = styled.h4`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
  color: #4f4f4f;
`;

const BalanceAmount = styled.div`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${({ total }) => (total < 0 ? "#ff6347" : "#2ecc71")};
  margin-bottom: 16px;
`;

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(trans => trans.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <BalanceContainer>
      <BalanceTitle>Your Balance</BalanceTitle>
      <BalanceAmount total={total}>${total}</BalanceAmount>
    </BalanceContainer>
  );
};

export default Balance;
