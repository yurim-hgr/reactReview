import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  // 1. useState 로 하기
  // const [number, setNumber] = useState(0);

  // 2. useState 풀어써보기
  // const numberstate = useState(0);
  // const number = numberstate[0];
  // const setNumber = numberstate[1];

  // 3. useReducer써보깅

  const [number, dispatch] = useReducer(reducer, 0);

  //그 다음 상태를 파라미터로 넣어준것이 아니라, 값을 업데이트 하는 함수를 파라미터로 넣어주었습니다.
  // 함수형 업데이트는 주로 나중에 컴포넌트를 최적화를 하게 될 때 사용하게 됩니다.

  // 1. useState 로 상태를 관리할때
  // const onIncrease = () => {
  //   setNumber((preNumber) => preNumber + 1);
  // };

  // const onDecrease = () => {
  //   setNumber((preNumber) => preNumber - 1);
  // };

  //2. useReducer로 관리할때
  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
