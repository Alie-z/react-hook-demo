import React, { createContext, useReducer } from 'react';
import { Context, Provider } from '../AppContext'


export const UserReducer = (userInfo, action) => {
  if (action.error) return { error: action.error };
  return action;
}

export const UserProvider = props => {
  const [ userInfo, userDispatcher ] = useReducer(UserReducer, {});

  return (
    <Provider value={{ userInfo, userDispatcher }}>
      {props.children}
    </Provider>
  )
}


export const fruitsReducer = (state, action) => {
  switch (action.type) {
    case "init":
    case "replace":
      return action.payload;
    case "add":
      return [ ...state, action.payload ]
    default:
      return state;
  }
}
