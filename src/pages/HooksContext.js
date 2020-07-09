import React, {useContext} from "react";
import {Context, Provider} from "../AppContext"
import {HooksContextChild} from './HooksContextChild'
// const Context = React.createContext();
// const Provider = Context.Provider;
export default function HooksContext() {
  const store = {
    user:{
      name:'AAA',
      age:'99999999999'
    }
  }
  return <div>
    context
    <Provider value={store}>
      <ContextChild/>
      <HooksContextChild />
    </Provider>
  </div>
}

function ContextChild(props) {
  const {user} = useContext(Context)
  return <div>contextChild {user.name}</div>
}

/* const Context = React.createContext();
const Provider = Context.Provider; */

// export default function HooksContext() {
//   const store = {
//     user: {
//       name: "Tom",
//     },
//   };
//
//   return (
//     <div>
//       <Provider value={store}>
//         <ContextChild />
//       </Provider>
//     </div>
//   );
// }
//
// function ContextChild(props) {
//   const { user } = useContext(Context);
//   console.log(useContext(Context));
//   return (
//     <div>
//       ContextChild
//       <p>name: {user.name}</p>
//     </div>
//   );
// }
