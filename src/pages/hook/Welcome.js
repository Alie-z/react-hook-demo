import React, { useContext } from 'react';
import {Context} from '../../AppContext'

export function Welcome() {
  let { userInfo, userDispatcher } = useContext(Context);

  return (
    <div>
      <h1>Welcome Component</h1>
      <ul>
        <li>Username: {userInfo.username}</li>
        <li>Email: {userInfo.email}</li>
        <li>Age: {userInfo.age}</li>
      </ul>
    </div>
  )
}
