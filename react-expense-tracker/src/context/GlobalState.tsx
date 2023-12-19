import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

type Props = {
  children: React.ReactNode;
};

type Transaction = {
  id: string;
  text: string;
  type: string;
  amount: number;
};

// Initial state
const initialState = {
  transactions: [] as Transaction[],
  deleteTransaction: (_transaction: Transaction) => {},
  addTransaction: (_transaction: Transaction) => {},
};

// Create context
export const GlobalContext = createContext(initialState);

// Global provider
export const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(transaction: Transaction) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: transaction,
    });
  }

  function addTransaction(transaction: Transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
