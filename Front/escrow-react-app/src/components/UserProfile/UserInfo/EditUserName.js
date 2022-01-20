import React,{useState} from 'react';
import {Modal,ModalWrapper,Buttons,ButtonAccept,ButtonReject,Input} from './UserInfoElements'

const EditUserName = ({setModal,username,setUsername}) => {
  const [newUsername,setUser] = useState(username)

  const onConfirm=()=>{
    setModal(false)
    setUsername(newUsername)
  }

  return (
    <ModalWrapper>
        <Modal>
          <Input type="text" value={newUsername} onChange={e=>setUser(e.target.value)}/>
          <Buttons>
            <ButtonAccept onClick={onConfirm}>Confirm</ButtonAccept>
            <ButtonReject onClick={()=>setModal(false)}>Cancel</ButtonReject>
          </Buttons>
        </Modal>
    </ModalWrapper>
  )
}
 
export default EditUserName;