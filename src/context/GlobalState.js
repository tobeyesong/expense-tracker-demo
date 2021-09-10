/** @format */

import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  transactions: [
    {
      id: "1",
      name: "Rent",
      href: "#",
      category: "expense",
      amount: -1000,
      currency: "USD",
      status: "processing",
      date: "July 1, 2020",
      datetime: "2020-07-11",
    },
    {
      id: "2",
      name: "IRS",
      href: "#",
      category: "income",
      amount: 5000,
      currency: "USD",
      status: "success",
      date: "July 18, 2020",
      datetime: "2020-07-18",
    },
    {
      id: "3",
      name: "Paypal",
      href: "#",
      category: "income",
      amount: 15000,
      currency: "USD",
      status: "success",
      date: "July 18, 2020",
      datetime: "2020-07-18",
    },
    {
      id: "4",
      name: "AT&T",
      href: "#",
      category: "expense",
      amount: -2000,
      currency: "USD",
      status: "success",
      date: "July 11, 2020",
      datetime: "2020-07-11",
    },
  ],
  totalTransactionCount: 4,
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const { totalTransactionCount, transactions } = state;

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  useEffect(() => {
    dispatch({
      type: "SET_TRANSACTION_COUNT",
      payload: transactions.length,
    });
  }, [transactions]);
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        totalTransactionCount,
        deleteTransaction,
        addTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
