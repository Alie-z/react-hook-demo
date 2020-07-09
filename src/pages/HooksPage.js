import React, {useState, useEffect,useReducer} from 'react'
import {Context, Provider} from "../AppContext"
import {HooksContextChild} from './HooksContextChild'
import {AddFruit,Fruitlist} from "../components/Fruit";

export default function HooksPage() {
  const [data, setData] = useState(new Date())
  const [fruits, setFruits] = useState(['appale', 'banana', 'other'])
  useEffect(() => {
    console.log(data)
    const timer = setInterval(() => {
      setData(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [data])
  return (
    <div>
      hooksPage
      <p>{data.toLocaleTimeString()}</p>
      <AddFruit addFruits={(item => setFruits([...fruits, item]))}/>
      <Fruitlist fruits={fruits} setFruits={setFruits}/>
    </div>
  )
}
