import React,{useEffect,useContext} from 'react';
import {
  Container,
  Section,
  Heading,
  Items
} from './UserTransactionsElements'
import {AuthContext} from '../../../context/authContext/AuthContext'
import { TransactionsContext } from '../../../context/transactionsContext/TransactionsContext';
import Transaction from './Transaction'

const UserTransactions = () => {
  const authContext = useContext(AuthContext)
  const {user} = authContext

  const transactionsContext = useContext(TransactionsContext)
  const {transactions,getTransactions} = transactionsContext

  useEffect(() => {
    if(!transactions.length){
      getTransactions()
    }
    // eslint-disable-next-line
  }, [])

  const newT = transactions.map(trans=>(trans.ownerId === user.id 
    || trans.secondPersonEmail === user.email) 
    && trans.status==="send" ? 
    <Transaction key={trans.id} transaction={trans} user={user}/> : null).filter(item=>item)

  const inProgress = transactions.map(trans=>(trans.ownerId === user.id 
    || trans.secondPersonEmail === user.email) 
    && trans.status==="process" ? 
    <Transaction key={trans.id} transaction={trans} user={user}/> : null).filter(item=>item)

  const completed = transactions.map(trans=>(trans.ownerId === user.id 
    || trans.secondPersonEmail === user.email) 
    && trans.status==="complete" ? 
    <Transaction key={trans.id} transaction={trans} user={user}/> : null).filter(item=>item)

  return (
      <Container>
        <Section>
          <Heading>New</Heading>
          <Items>
            {newT.length ? newT : "There is no transactions"}
          </Items>
        </Section>
        <Section>
          <Heading>In progress</Heading>
          <Items>
            {inProgress.length ? inProgress : "There is no transactions"}
          </Items>
        </Section>
        <Section>
          <Heading>Completed</Heading>
          <Items>
            {completed.length ? completed : "There is no transactions"}
          </Items>
        </Section>
      </Container>
   );
}
 
export default UserTransactions;