import React, { createContext, useReducer } from 'react';
import authReducer from './authReducer';

export const AuthContext = createContext()

export const AuthState = props => {
  const initialState = {
    isAdmin: false,
    isLogin: false,
    user: null,
    error: null,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  const loginUser = async user => {
    try {
      const res = await fetch('/data/users.json')
      const users = await res.json()
      const login = users.find(u=>u.email === user.email && u.password === user.password)

      if(login){
        dispatch({ type: "LOGIN" , payload: login})
      }
    } catch (error) {

    }
  }

  const logout = () => dispatch({ type: "LOGOUT" })

  const setUsername = (username)=> dispatch({ type: "SET_USERNAME" ,payload: username})

  return (
    <AuthContext.Provider value={{
      isLogin: state.isLogin,
      isAdmin: state.isAdmin,
      user: state.user,
      error: state.error,
      loginUser,
      logout,
      setUsername
    }}>
      {props.children}
    </AuthContext.Provider>
  );
}