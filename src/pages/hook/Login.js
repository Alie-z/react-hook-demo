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
    // fetch('/json/user.login.json')
    //   .then((res)=>{ return res.json() })
    //   .then((userInfo)=>{
    //     userDispatcher(userInfo)
    //   })
    //   .catch((err)=>{
    //     userDispatcher({ error: 'Login Error' })
    //   })
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
