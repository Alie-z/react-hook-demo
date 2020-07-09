import React, { useEffect, useReducer, useContext } from "react";
import { AddFruit, Fruitlist } from "../components/Fruit";
import {Context} from '../AppContext'


export default function HooksReducer() {
  const { fruitsData, dispatch } = useContext(Context)
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'init', payload: [ 'appale', 'ban', 'other' ] })
    }, 1000)
    return () => {
    }
  }, [])
  return <div>
    HooksRuduce
    <AddFruit addFruits={addF => dispatch({ type: 'add', payload: addF })}/>
    <Fruitlist
      fruits={fruitsData}
      setFruits={newF => dispatch({ type: 'replace', payload: newF })}/>
  </div>
}


// import React, { useEffect, useReducer } from "react";
// import { FruitList } from "../components/Fruit";
// //add : [...state, action.payload]
// function fruitsReducer(state, action) {
//   switch (action.type) {
//     case "init":
//     case "replace":
//       return action.payload;
//     default:
//       return state;
//   }
// }
//
//
// export default function HooksReducer() {
//   const [fruits, dispatch] = useReducer(fruitsReducer, []);
//
//   useEffect(() => {
//     setTimeout(() => {
//       dispatch({ type: "init", payload: ["apple", "banana"] });
//     }, 1000);
//     return () => {};
//   }, []);
//
//   return (
//     <div>
//       HooksReducer
//       <FruitList
//         fruits={fruits}
//         setFruits={newFruitList =>
//           dispatch({ type: "replace", payload: newFruitList })
//         }
//       />
//     </div>
//   );
// }
