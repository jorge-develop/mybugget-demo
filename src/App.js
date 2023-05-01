import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import { GlobalContext } from "./context/Globalstate";

function App() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpenses />
      <div className="parent-container">
        <AddTransaction />
        {!!transactions.length && <TransactionList />}
      </div>
    </div>
  );
}

export default App;
