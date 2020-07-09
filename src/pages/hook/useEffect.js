import React, { useState, useEffect, useReducer, useContext, useCallback } from 'react'
import { Context } from '../../AppContext'
import { AddFruit } from "../../components/Fruit";

let timer = null;

function UseEffectDemo() {
  const { fruitsData, dispatch } = useContext(Context)
  const [ count, setCount ] = useState(0);
  const [ star, setStar ] = useState(false)
  console.log(count)
  useEffect(() => {
    document.title = "componentDidMount" + count;
  }, [ count ]);

  useEffect(() => {
    return () => {
      document.title = "componentWillUnmount";
      clearInterval(timer);
    };
  }, []);

  const memoizedHandleClick = useCallback(() => {
    timer = setInterval(() => {
      setCount(prevCount => {
        // console.log('prevCount', prevCount)
        return prevCount + 1
      });
      // console.log('-->',count)
      // setCount(count + 1)
    }, 1000);
  }, []);
  return (
    <div>
      Count: {count}
      <button onClick={() => clearInterval(timer)}>clear</button>
      {/*<button onClick={() => setStar(!star)}>star</button>*/}
      <button onClick={memoizedHandleClick}>star</button>
      <AddFruit addFruits={addF => dispatch({ type: 'add', payload: addF })}/>
      <div>
        <ul>
          {fruitsData.map((item, index) => <li key={index}>{item}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default UseEffectDemo
