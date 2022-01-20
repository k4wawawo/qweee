import React, { createContext, useReducer } from 'react';
import usersReducer from './usersReducer';

export const UsersContext = createContext()

export const UsersState = props => {
  const initialState = []

  const [state, dispatch] = useReducer(usersReducer, initialState)


  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const registerUser = async user => {
    try {
      const id = getRandomIntInclusive(0,10000)
      const userRegister = {
        id,
        ...user,
        isAdmin: false,
      }
      // const res = await fetch(....)
      dispatch({ type: "REGISTER" , payload: userRegister})
    } catch (error) {

    }
  }

  const getUsers = async () =>{
    try {
      const res = await fetch('/data/users.json')
      const users = await res.json()
      dispatch({ type: "LOAD_USERS" , payload: users})
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser = async id =>{
    try {
      // const res = await fetch()
      dispatch({ type: "DELETE_USER" , payload: id})
    } catch (error) {
      
    }
  }

  const editUser = async user =>{
    try {
      // const res = await fetch()
      console.log(user)
      dispatch({ type: "EDIT_USER" , payload: user})
    } catch (error) {
      
    }
  }

  return (
    <UsersContext.Provider value={{
      users: state,
      registerUser,
      getUsers,
      deleteUser,
      editUser,
    }}>
      {props.children}
    </UsersContext.Provider>
  );
}