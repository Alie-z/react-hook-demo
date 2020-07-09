// import React, { Component } from "react";
// import { consumerHandle, Consumer } from "../AppContext";
// import Layout from "./Layout";

// export default class Home extends Component {
//   render() {
//     return <Consumer>{ctx => <HomeHandle {...ctx} />}</Consumer>;
//   }
// }
//
// function HomeHandle(props) {
//   return (
//     <Layout title="商城首页">
//       {{
//         btn: <button>按钮</button>,
//         content: "我是内容"
//       }}
//     </Layout>
//   );
// }

// function HomeHandle(props) {
//   return (
//     <Layout title="商城首页">
//       <div>
//         <h1>Home</h1>
//       </div>
//     </Layout>
//   );
// }
//
// export default consumerHandle(HomeHandle);


import React, { useState, useRef } from "react";
import { Login } from './hook/Login'

const Home = () => {
  const childRef = useRef()
  const [ data, setData ] = useState({})
  const _handleGetData = () => {
    setData(childRef.current.getValue())
  }
  return (
    <div>
      <button onClick={_handleGetData}>获取子组件的值</button>
      <h2>账号：{data.username}</h2>
      <h2>密码：{data.pwd}</h2>
      <Login childRef={childRef}/>
    </div>
  )
}
export default Home


// export default class Home extends Component {
//   childRef = React.createRef()
//
//   constructor() {
//     super();
//     this.state = { data: {} }
//   }
//
//   _handleGetData = () => {
//     const data = this.childRef.current.getValue()
//     console.log('data', data)
//     this.setState({ data })
//   }
//
//   render() {
//     const { data } = this.state
//     return (
//       <div>
//         <button onClick={this._handleGetData}>获取子组件的值</button>
//         <h2>账号：{data.username}</h2>
//         <h2>密码：{data.pwd}</h2>
//         <Login childRef={this.childRef}/>
//       </div>
//     )
//   }
// }
