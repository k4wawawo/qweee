import React,{useContext} from 'react';
import {AdminContainer,
  AdminImage,
  AdminProf,
  Text,
  Email,
  AdminWallet,
  Heading,
  Adress,
  BTC,
  BTCAmount,
  BTCText,
  TextContainer,
  AdminName,
  AdressContainer
} from './AdminProfileElements'
import AdminIMG from '../../images/admin.png'
import {AuthContext} from '../../context/authContext/AuthContext'
import { TransactionsContext } from '../../context/transactionsContext/TransactionsContext';

const AdminProfile = () => {
  const authContext = useContext(AuthContext)
  const {user} = authContext

  const transactionsContext = useContext(TransactionsContext)
  const {transactions} = transactionsContext
  
  let balance = 0
  transactions.forEach(trans=>balance += trans.amountBTC * 0.02)
  
  return ( 
    <AdminContainer>
      <AdminImage>
        <AdminProf  src={AdminIMG}/>
        <TextContainer>
          <AdminName>Administrator</AdminName>
          <Text>{user && user.name}</Text>
          <Email>{user && user.email}</Email>
        </TextContainer>
      </AdminImage>
      <AdminWallet>
        <Heading>Actual balance of fees wallet</Heading>
        <AdressContainer>Wallet address: <Adress>0x7840C41cC1B110c016E5fede746E8dD63Ffe143e</Adress>
        </AdressContainer>
        <BTC>
          <BTCAmount>Balance: <BTCText>{balance}</BTCText>BTC</BTCAmount>
        </BTC>
      </AdminWallet>
    </AdminContainer>
   );
}
 
export default AdminProfile;