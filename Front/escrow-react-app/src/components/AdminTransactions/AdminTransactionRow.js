import React from 'react';
import {
  TableRow,
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
  Wallet
} from './AdminTransactionsElements'

const AdminUserRow = ({transaction}) => {
  return ( 
    <TableRow>
      <Id>{transaction.id}</Id>
      <OwnerId>{transaction.ownerId}</OwnerId>
      <Kind>{transaction.kind}</Kind>
      <Title>{transaction.title}</Title>
      <Wallet>{transaction.wallet}</Wallet>
      <AmounBTC>{transaction.amountBTC}</AmounBTC>
      <Fee>{transaction.amountBTC * 0.02}</Fee>
      <WhoPayFee>{transaction.whoPayFee}</WhoPayFee>
      <Desc>{transaction.description}</Desc>
      <Expire>{transaction.expireDate}</Expire>
      <SecondPersonEmail>{transaction.secondPersonEmail}</SecondPersonEmail>
      <Status>{transaction.status}</Status>
    </TableRow>
   );
}
 
export default AdminUserRow;