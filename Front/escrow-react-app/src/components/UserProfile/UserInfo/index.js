import React,{useContext,useState} from 'react';
import {
  UserImage,
  UserProf,
  Text,
  Email,
  TextContainer,
  UserName,
  NewTransaction,
} from './UserInfoElements'
import UserIMG from '../../../images/user.png'
import {AuthContext} from '../../../context/authContext/AuthContext'
import EditUserName from './EditUserName';

const UserProfile = () => {
  const authContext = useContext(AuthContext)
  const {user,setUsername} = authContext

  const [isModal,setIsModal] = useState(false)
  
  return ( 
      <UserImage>
        <UserProf src={UserIMG}/>
        <TextContainer>
          <UserName>User</UserName>
          <Text onClick={()=>setIsModal(true)}>{user && user.name}</Text>
          <Email>{user && user.email}</Email>
        </TextContainer>
        <NewTransaction to="/transaction">New Transaction</NewTransaction>
        {isModal ? <EditUserName setModal={setIsModal} username={user.name} setUsername={setUsername}/> : null}
      </UserImage>
   );
}
 
export default UserProfile;