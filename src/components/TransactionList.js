import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/Globalstate";

import styled from "styled-components";

const TransactionListContainer = styled.div`
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TransactionListTitle = styled.h3`
  font-size: 24px;
  color: #2d2d2d;
  margin-bottom: 24px;
`;

const TransactionListUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  const renderObject = transactions.map(transaction => (
    <Transaction key={transaction.id} transaction={transaction} />
  ));

  return (
    <TransactionListContainer>
      <TransactionListTitle>History</TransactionListTitle>
      <TransactionListUl>{renderObject}</TransactionListUl>
    </TransactionListContainer>
  );
};

export default TransactionList;
