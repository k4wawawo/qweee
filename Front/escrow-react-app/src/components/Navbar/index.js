import {FaBars} from 'react-icons/fa'; 
import React, {useState, useEffect,useContext} from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
   Nav, NavbarContainer,
   NavLogo, NavIcon,
   MobileIcon,NavMenu,
   NavItem,NavLinks,
   NavBtn,NavBtnLink,NavLogOut,NavLink
  } 
   from './NavbarElements';
import { AuthContext } from '../../context/authContext/AuthContext';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const authContext = useContext(AuthContext)
  const {isLogin,logout,isAdmin} = authContext

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };  

    return (
        <>
          <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                <NavIcon />
                Escrow
                </NavLogo>                  
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='about'
                    smooth="true"
                    duration={500}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                    >About 
                    </NavLinks>
                  </NavItem>
                  {isLogin && !isAdmin ? 
                  <NavItem>
                    <NavLink to='/transaction'>Create an Offer</NavLink>
                  </NavItem>
                  :
                  <NavItem>
                    <NavLinks to='createanoffer'
                    smooth="true"
                    duration={500}
                    exact="true"
                    offset={-80}
                    >Create an Offer
                    </NavLinks>
                  </NavItem>
                  }


                  <NavItem>
                    <NavLinks to='services'
                    smooth="true"
                    duration={500}
                    exact="true"
                    offset={-80}
                    >Services 
                    </NavLinks>
                  </NavItem>
                  {isAdmin ?
                    <>
                      <NavItem>
                        <NavLink to='/admin/users'
                          exact="true"
                          >Users
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to='/admin/transactions'
                          exact="true"
                          >Transactions
                        </NavLink>
                      </NavItem>
                      <NavLogOut onClick={()=>logout()}> 
                          LogOut
                      </NavLogOut>
                    </>
                    :
                    (isLogin ?
                      <NavLogOut onClick={()=>logout()}> 
                        LogOut
                      </NavLogOut>
                      :
                      <NavItem>
                        <NavLinks to='signup'
                        smooth="true"
                        duration={500}
                        exact="true"
                        offset={-80}
                        >SignUp 
                        </NavLinks>
                      </NavItem>
                    )
                  }
                </NavMenu>
              <NavBtn>
                {isLogin ? <NavBtnLink to="/profile">Profile</NavBtnLink> : <NavBtnLink to='/signin'>Sign in</NavBtnLink>}
                
              </NavBtn>
            </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar;
