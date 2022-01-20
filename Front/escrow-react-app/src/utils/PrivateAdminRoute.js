import React, { useContext,useEffect } from 'react';
import { AuthContext } from '../context/authContext/AuthContext'
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const PrivateAdminRoute = ({ component: Component,history, ...rest }) => {
  const authContext = useContext(AuthContext)
  const { isAdmin,isLogin} = authContext

  useEffect(()=>{
    if(!isLogin){
      history.push("/")
    }
    // eslint-disable-next-line
  },[isLogin])

  return (
    <Route {...rest} render={props =>  isAdmin ? (
      <Component {...props} />
    ) : (
        <Redirect to="/" />
      )} />
  )
}

export default withRouter(PrivateAdminRoute)