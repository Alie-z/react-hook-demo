import React, { createContext, useReducer } from 'react';

export const UserContext = createContext({});
export const UserReducer = (userInfo, action) => {
  if (action.error) return { error: action.error };
  return action;
}

export const UserProvider = props => {
  const [ userInfo, userDispatcher ] = useReducer(UserReducer, {});

  return (
    <UserContext.Provider value={{ userInfo, userDispatcher }}>
      {props.children}
    </UserContext.Provider>
  )
}
