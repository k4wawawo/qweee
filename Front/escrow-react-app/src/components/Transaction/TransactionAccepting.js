import React,{useState,useContext} from 'react';
import TransactionDetails from './TransactionDetails';
import MetaMaskIMG from '../../images/metamask.png'
import {MetaMask,Buttons,ButtonAccept,ButtonReject} from './TransactionElements'
import AcceptModal from './AcceptModal';
import { TransactionsContext } from '../../context/transactionsContext/TransactionsContext';
import { withRouter } from 'react-router';

const TransactionAccepting = ({transaction,history}) => {
  const [isModal,setIsModal] = useState(false)

  const transactionsContext = useContext(TransactionsContext)
  const {rejectTransaction,confirmTransaction} = transactionsContext

  const accept=()=>{
    confirmTransaction(transaction.id)
    history.push('/profile')
  }

  const reject=()=>{
    rejectTransaction(transaction.id)
    history.push('/profile')
  }

  return (
    <div>
        <TransactionDetails transaction={transaction}/>
        <MetaMask>
          <img src={MetaMaskIMG} alt="connect to metamask" />
        </MetaMask>
        <Buttons>
          <ButtonAccept  onClick={()=>setIsModal(state=>!state)}>
            Accept
          </ButtonAccept>
          <ButtonReject onClick={reject}>
            Reject
          </ButtonReject>
        </Buttons>
        {isModal ? <AcceptModal setModal={setIsModal} accept={accept}/> : null}
    </div>
  );
}

export default withRouter(TransactionAccepting);