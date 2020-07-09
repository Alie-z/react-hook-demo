import React, { useState, useEffect } from "react";

export function AddFruit({addFruits}) {
  const [name, setName] = useState('')
  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => addFruits(name)}>add</button>
    </>

  )
}
export function Fruitlist({fruits, setFruits}) {
  const _handleDelate = inx => {
    const temp = [...fruits]
    temp.splice(inx, 1)
    setFruits(temp)
  }
  return (
    <div>
      <ul>
        {fruits.map((item, index) => <li key={index} onClick={() => _handleDelate(index)}>{item}</li>
        )}
      </ul>
    </div>
  )
}
