import React,{useContext} from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  SidebarNormalLink,
} from './SidebarElements';
import { AuthContext } from '../../context/authContext/AuthContext';

export const Sidebar = ({ isOpen, toggle }) => {
  const authContext = useContext(AuthContext)
  const {isLogin,logout,isAdmin} = authContext

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle} >
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
              <SidebarLink to='about' onClick={toggle}>
                About
                </SidebarLink>

              <SidebarLink to='createanoffer' onClick={toggle}>
                Create an Offer
                </SidebarLink>

              <SidebarLink to='wallet' onClick={toggle}>
                Wallet
              </SidebarLink>
              {isAdmin ?
                <>
                  <SidebarLink to='signup' onClick={toggle}>
                    Sing Up
                  </SidebarLink>
                  <SidebarNormalLink to='/admin/transactions' exact="true">
                    Transactions
                  </SidebarNormalLink>
                  <SidebarNormalLink to='/admin/users' exact="true">
                    Users
                  </SidebarNormalLink>
                  <SidebarLink to="/" onClick={()=>logout()}>
                    LogOut
                  </SidebarLink>
                </>
                :
                (isLogin ?
                  <SidebarLink to="/" onClick={()=>logout()}>
                    LogOut
                  </SidebarLink>
                  :
                  <>
                  <SidebarLink to='signup' onClick={toggle}>
                    Sing Up
                  </SidebarLink>
                  </>
                )
              }

              </SidebarMenu>
              <SideBtnWrap>
            {isLogin ? <SidebarRoute to='/profile'>Profile</SidebarRoute> : <SidebarRoute to='/signin'>Sign In</SidebarRoute> }
          </SideBtnWrap> 
        </SidebarWrapper>
    </SidebarContainer>
    </>
  );
};

export default Sidebar;