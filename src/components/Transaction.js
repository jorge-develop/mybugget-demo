import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import styled from "styled-components";
import { deleteTransaction } from "../context/Action";

const TransactionListText = styled.p`
  font-size: 16px;
  color: #2d2d2d;
  margin: 0;
`;
const TransactionListDeleteButton = styled.button`
  display: none;
  background-color: lightcoral;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;
const TransactionListLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ isIncome }) => (isIncome ? "#e2f1df" : "#f7d3d3")};
  margin-bottom: 16px;
  border-radius: 8px;
  position: relative;

  &:hover {
    ${TransactionListDeleteButton} {
      display: block;
      position: absolute;
      top: 50%;
      right: -22px;
      transform: translateY(-50%);
      transition: opacity 0.2s ease-in-out;
    }
  }
`;
const TransactionListAmount = styled.p`
  font-size: 16px;
  color: ${({ isIncome }) => (isIncome ? "#2e7d32" : "#c62828")};
  margin: 0px 0px 0px 45px;
`;
const Transaction = ({ transaction }) => {
  const { dispatch } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  const styleIncome = transaction.amount > 0;

  return (
    <TransactionListLi key={transaction.id} isIncome={styleIncome}>
      <TransactionListText>{transaction.text}</TransactionListText>
      <TransactionListAmount isIncome={styleIncome}>
        {sign}
        {Math.abs(transaction.amount)}
        <TransactionListDeleteButton
          onClick={() => deleteTransaction(transaction.id, dispatch)}
        >
          X
        </TransactionListDeleteButton>
      </TransactionListAmount>
    </TransactionListLi>
  );
};

export default Transaction;
