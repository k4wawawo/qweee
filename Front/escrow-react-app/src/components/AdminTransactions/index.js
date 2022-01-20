import React,{useEffect,useContext} from 'react';
import {
  Heading,
  Container,
  Table,
  TableHead,
  TableBody,
  Id,
  Kind,
  Title,
  AmounBTC,
  WhoPayFee,
  Desc,
  Expire,
  SecondPersonEmail,
  Fee,
  OwnerId,
  Status,
  Wallet,
} from './AdminTransactionsElements'
import AdminTransactionRow from './AdminTransactionRow';
import { TransactionsContext } from '../../context/transactionsContext/TransactionsContext';

const AdminTransactions = () => {

  const transactionsContext = useContext(TransactionsContext);
  const { transactions, getTransactions } = transactionsContext

  useEffect(() => {
    if(!transactions.length){
      getTransactions()
    }
  // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Heading>Transactions</Heading>
      <Table>
        <TableHead>
          <Id> ID</Id><OwnerId>User Id</OwnerId><Kind>Kind</Kind>
          <Title>Title</Title><Wallet>Wallet</Wallet><AmounBTC>BTC Amount</AmounBTC>
          <Fee>Fee (2%)</Fee><WhoPayFee>Who pays fee</WhoPayFee>
          <Desc>Description</Desc><Expire>Expire Date</Expire><SecondPersonEmail>Second side email</SecondPersonEmail><Status>Status</Status>
        </TableHead>
        <TableBody>
            {transactions ? transactions.map(transaction=><AdminTransactionRow key={transaction.id} transaction={transaction}/> ) : false}
        </TableBody>
      </Table>
    </Container>
  );
}

export default AdminTransactions;