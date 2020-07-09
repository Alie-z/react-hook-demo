import React, {useContext} from "react";
import {Context, Provider} from "../AppContext"

export function HooksContextChild(props) {
  const {user} = useContext(Context)
  return <div>HooksContextChild {user.name} {user.age}</div>
}
