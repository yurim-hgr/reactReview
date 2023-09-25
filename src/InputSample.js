import React, {useState} from 'react';

function InputSample() {

    const [text, setText ] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = (e) => {
        setText("");
    }

    // e.target 은 이벤트가 발생한 DOM 인 input DOM을 가리킴
    // e.target.value 를 조회하면 현재 input 에 입력한 값을 알 수 있음

    //input 의 상태를 관리할 때에는 input 태그의 value 값도 설정
    return (
        <div>
        <input onChange={onChange} value={text}/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: {text}</b>
        </div>
        </div>
    );
}

export default InputSample;