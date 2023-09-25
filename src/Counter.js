import React, {useState} from 'react';

function Counter() {
    // const [number, setNumber] = useState(0);
    const numberstate = useState(0);
    // [0 , setter]
    const number = numberstate[0];
    const setNumber = numberstate[1];

    const onIncrease = () => {
        setNumber(number + 1);
    }

    const onDecrease = () => {
        setNumber(number - 1);
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