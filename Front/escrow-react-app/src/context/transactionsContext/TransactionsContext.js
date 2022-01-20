import React, { createContext, useReducer } from 'react';
import transactionsReducer from './transactionsReducer';

export const TransactionsContext = createContext()

export const TransactionsState = props => {
  const initialState = []

  const [state, dispatch] = useReducer(transactionsReducer, initialState)


  const getTransactions = async () =>{
    try {
      const res = await fetch('/data/transactions.json')
      const transactions = await res.json()
      dispatch({ type: "LOAD_TRANSACTIONS" , payload: transactions})
    } catch (error) {
      console.log(error)
    }
  }

  const newTransaction =  async data =>{
    try {
      // const res = await fetch()
      dispatch({ type: "NEW_TRANSACTION" , payload: data})
    } catch (error) {
      console.log(error)
    }
  }

  const rejectTransaction = async id =>{
    try {
      dispatch({ type: "REJECT_TRANSACTION" , payload: id})
    } catch (error) {
      console.log(error)
    }
  }

  const confirmTransaction = async id =>{
    try {
      dispatch({ type: "CONFIRM_TRANSACTION" , payload: id})
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TransactionsContext.Provider value={{
      transactions: state,
      getTransactions,
      newTransaction,
      rejectTransaction,
      confirmTransaction,
    }}>
      {props.children}
    </TransactionsContext.Provider>
  );
}