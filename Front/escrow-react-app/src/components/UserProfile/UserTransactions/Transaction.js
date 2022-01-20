import React from 'react';
import { 
  TransContainer,
  TransDetails,
  TransTitle,
  TransMeta,
  TransMetaItem,
  TransInfo,
  TransInfoBtn,
} from './UserTransactionsElements'

const Trasaction = ({transaction,user}) => {
  return ( 
    <TransContainer to={`/transaction/` + transaction.id}>
      <TransDetails>
          <TransTitle>{transaction.title}</TransTitle>
          <TransMeta> 
            {
            transaction.status==="complete" ? 
            <TransMetaItem>Complete: {transaction.completeDate}</TransMetaItem>:
            <TransMetaItem>Expire: {transaction.expireDate}</TransMetaItem> 
            }
            <TransMetaItem>ID: {transaction.id}</TransMetaItem>
            <TransMetaItem>Status: {transaction.status.toUpperCase()}</TransMetaItem>
          </TransMeta>
      </TransDetails>
      <TransInfo>
        {user.id === transaction.ownerId  ? <TransInfoBtn>{transaction.kind.toUpperCase()}</TransInfoBtn> :
        (user.email === transaction.secondPersonEmail && transaction.kind === "buying" ? <TransInfoBtn>SELLING{transaction.status==="send" ? " - RESPONSE" : null}</TransInfoBtn>: 
        (user.email === transaction.secondPersonEmail && transaction.kind === "selling" ? <TransInfoBtn>BUYING{transaction.status==="send" ? " - RESPONSE" : null}</TransInfoBtn>: null ))}
      </TransInfo>
    </TransContainer>
   );
}
 
export default Trasaction;