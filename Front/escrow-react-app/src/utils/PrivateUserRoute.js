import React, { useContext ,useEffect} from 'react';
import { AuthContext } from '../context/authContext/AuthContext'
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


const PrivateUserRoute = ({ component: Component, history, ...rest }) => {
  const authContext = useContext(AuthContext)
  const { isLogin , isAdmin} = authContext

  useEffect(()=>{
    if(!isLogin){
      history.push("/")
    }
    // eslint-disable-next-line
  },[isLogin])

  if (isAdmin) {
    return <Redirect to="/admin" />
  }

  return (
    <Route {...rest} render={props =>  isLogin ? (
      <Component {...props} />
    ) : (
        <Redirect to="/singin" />
      )} />
  )
}

export default withRouter(PrivateUserRoute)