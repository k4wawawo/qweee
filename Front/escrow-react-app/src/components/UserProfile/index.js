import React from 'react';
import {Container,Left,Right} from './UserProfileElements'
import UserInfo from './UserInfo'
import UserTransactions from './UserTransactions'

const UserProfile = () => {
  return (
    <Container>
      <Left>
        <UserInfo/>
      </Left>
      <Right>
        <UserTransactions/>
      </Right>
    </Container>
  );
}

export default UserProfile;