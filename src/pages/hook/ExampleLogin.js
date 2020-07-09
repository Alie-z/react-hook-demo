import React from 'react';
import { Login } from "./Login";
import { Welcome } from "./Welcome";
import { UserProvider } from '../../store';

export function ExampleUserLogin() {

  return (
    <div>
      <hr/>
      <h1>Example: UserLogin</h1>
      <UserProvider>
        <Login/>
        <Welcome/>
      </UserProvider>
    </div>
  )
}
