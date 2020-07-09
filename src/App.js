import React, { createContext, useReducer } from "react";
import Home from "./pages/Home";
import User from "./pages/User";
import HooksPage from "./pages/HooksPage";
import HooksReducer from "./pages/HooksReducer";
import HooksContext from "./pages/HooksContext";
import UseEffectDemo from './pages/hook/useEffect'
import { ExampleUserLogin } from './pages/hook/ExampleLogin'
import { fruitsReducer } from './store'
import { Provider } from './AppContext'

function Child(props) {
  return <div>Child</div>;
}

const foo = Cmp => props =>
  <div style={{ border: "solid 1px black" }}>
    <Cmp {...props} />
  </div>

const foo2 = Cmp => props =>
  <div style={{ border: "solid 1px red", padding: "10px" }}>
    <Cmp {...props} />
  </div>

function App() {
  const [ fruitsData, dispatch ] = useReducer(fruitsReducer, [ 'adddd' ])
  const Foo = foo2(foo(Child));
  return (
    <div className="app">
      {/*<Child />*/}
      {/*<Foo />*/}
      {/*  <User /> */}
      {/*<HooksPage/>*/}
      {/*<HooksContext />*/}
      <Provider value={{ fruitsData, dispatch }}>
        <HooksReducer/>
        <UseEffectDemo/>
      </Provider>

      <ExampleUserLogin/>
    </div>
  );
}

export default App;
