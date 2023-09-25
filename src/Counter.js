import React, {useState} from 'react';

function Counter() {
    // const [number, setNumber] = useState(0);
    const numberstate = useState(0);
    // [0 , setter]
    const number = numberstate[0];
    const setNumber = numberstate[1];


    //그 다음 상태를 파라미터로 넣어준것이 아니라, 값을 업데이트 하는 함수를 파라미터로 넣어주었습니다.
    // 함수형 업데이트는 주로 나중에 컴포넌트를 최적화를 하게 될 때 사용하게 됩니다.

    const onIncrease = () => {
        setNumber(preNumber => preNumber + 1);
    }

    const onDecrease = () => {
        setNumber(preNumber => preNumber - 1);
    }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;