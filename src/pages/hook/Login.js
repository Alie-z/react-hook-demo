import React, { useContext, useState } from 'react';
import {Context} from '../../AppContext'

export function Login() {
  let { loginInfo, userDispatcher } = useContext(Context);
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')

  let loginHandler = (e) => {
    e.preventDefault()
    setTimeout(userDispatcher({
      username: name,
      email: email,
      age: 18
    }), 1000)
  }

  return (
    <div>
      <h1>Login Component</h1>
      <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="password" placeholder="Password" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <button onClick={loginHandler}>Login</button>
    </div>
  )
}
// import React, { useState, useImperativeHandle } from 'react';
//
// export function Login({ childRef }) {
//   const [ name, setName ] = useState('')
//   const [ email, setEmail ] = useState('')
//
//   useImperativeHandle(childRef, () => ({
//     getValue: () => {
//       return {
//         username: name,
//         pwd: email
//       }
//     }
//   }));
//
//   let loginHandler = (e) => {
//     e.preventDefault()
//     // setTimeout(, 1000)
//   }
//
//   return (
//     <div>
//       <h1>Login Component</h1>
//       <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)}/>
//       <input type="password" placeholder="Password" value={email} onChange={(e) => setEmail(e.target.value)}/>
//       <button onClick={loginHandler}>Login</button>
//     </div>
//   )
// }
