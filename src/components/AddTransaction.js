import React, { useState, useContext } from "react";
import { addTransaction } from "../context/Action";
import { GlobalContext } from "../context/Globalstate";
import styled from "styled-components";

const AddTransactionContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormLabel = styled.label`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #4f4f4f;
`;

const FormInput = styled.input`
  font-size: 16px;
  line-height: 24px;
  padding: 12px 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  border: 1px solid #dedede;
  margin-bottom: 16px;
  color: #4f4f4f;
  outline: none;
  width: 100%;

  &:focus {
    border-color: #3f8600;
  }

  &::placeholder {
    color: #bdbdbd;
  }
`;

const FormButton = styled.button`
  font-size: 16px;
  line-height: 24px;
  background-color: #3f8600;
  color: #ffffff;
  border-radius: 8px;
  border: none;
  padding: 12px 24px;
  transition: background-color 0.2s ease;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background-color: #3f8600a1;
  }
`;

const AddTransaction = () => {
  const initialValue = {
    text: "",
    amount: "",
  };
  const [input, setInput] = useState(initialValue);
  const { dispatch } = useContext(GlobalContext);

  const handleChange = e => {
    const { value, name } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!input.text.trim()) {
      alert("please insert TEXT");

      return;
    }
    const createTransaction = {
      id: Math.random(),
      text: input.text.trim(),
      amount: +input.amount,
    };

    addTransaction(createTransaction, dispatch);
    setInput(initialValue);
  };

  return (
    <AddTransactionContainer>
      <h3>Add New Transaction</h3>
      <Form onSubmit={handleSubmit}>
        <div>
          <FormLabel htmlFor="text">Item</FormLabel>
          <FormInput
            type="text"
            name="text"
            placeholder="Enter text..."
            value={input.text}
            onChange={handleChange}
          />
        </div>
        <div>
          <FormLabel htmlFor="amount">
            Amount <br />
          </FormLabel>
          <FormInput
            type="number"
            name="amount"
            placeholder="Enter amount..."
            value={input.amount}
            onChange={handleChange}
          />
        </div>
        <FormButton type="submit">Add Transaction</FormButton>
      </Form>
    </AddTransactionContainer>
  );
};

export default AddTransaction;
