import React,{useEffect,useContext} from 'react';
import {Container} from './TransactionElements'
import { withRouter } from 'react-router';
import {TransactionsContext} from '../../context/transactionsContext/TransactionsContext'
import {AuthContext} from '../../context/authContext/AuthContext'
import TransactionDetails from './TransactionDetails';
import TransactionAccepting from './TransactionAccepting';

const Transaction = ({match:{params}}) => {
  const transactionsContext = useContext(TransactionsContext)
  const {getTransactions,transactions} = transactionsContext

  const authContext = useContext(AuthContext)
  const {user} = authContext



  useEffect(() => {
    if(!transactions.length){
      getTransactions()
    }
  // eslint-disable-next-line
  }, [])

  const transaction = transactions.find(trans=>trans.id === parseInt(params.id))

  if(transaction.secondPersonEmail === user.email && transaction.status === "send"){
    return ( 
      <Container><TransactionAccepting transaction={transaction}/></Container>
    );
  }else{
    return (
      <Container><TransactionDetails transaction={transaction}/></Container>
    );
  }
}

export default withRouter(Transaction);