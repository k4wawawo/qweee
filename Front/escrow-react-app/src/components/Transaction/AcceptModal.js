import React from 'react';
import {Modal,ModalWrapper,ModalText} from './AcceptModalElements'
import {ButtonAccept,ButtonReject,Buttons} from './TransactionElements'

const AcceptModal = ({setModal,accept}) => {
  return (
    <ModalWrapper>
        <Modal>
          <ModalText>Are you sure all you agree with all transaction terms? </ModalText><ModalText>Check everything, because transaction can't be withdrawn</ModalText>
          <Buttons>
            <ButtonAccept onClick={accept}>Confirm</ButtonAccept>
            <ButtonReject onClick={()=>setModal(false)}>Cancel</ButtonReject>
          </Buttons>
        </Modal>
    </ModalWrapper>
   );
}

export default AcceptModal;