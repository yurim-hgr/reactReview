import React, {useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs ] = useState({
        name : '',
        nickname : ''
    });

    const nameInput = useRef();
    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출
    
    //불변성을 지켜주어야만 리액트 컴포넌트에서 상태가 업데이트가 됐음을 감지 할 수 있고 이에 따라 필요한 리렌더링이 진행됩니다.
    const onChange = (e) => {

       const { value, name } = e.target; // 우선 e.target 에서 name과 value

       // 계산된 프로퍼티 명 
       // e.target.name = name , nickname
       
       setInputs({
        ...inputs,// 기존의 input 객체를 복사한 뒤
        [name] : value // name 키를 가진 값을 value 로 설정
       })

    }

    const onReset = (e) => {
        setInputs({
            name: '',
            nickname : ''
        })
        nameInput.current.focus();
    }

    // useRef() 를 사용하여 Ref 객체를 만들고, 
    // 이 객체를 우리가 선택하고 싶은 DOM 에 ref 값으로 설정해주어야 합니다. 
    // 그러면,  Ref 객체의 .current 값은 우리가 원하는 DOM 을 가르키게 됩니다.
    return ( 
        <div>
        <input name="name"  placeholder='이름' value={name} onChange={onChange} ref={nameInput}/>
        <input name="nickname" placeholder='닉네임' value={nickname} onChange={onChange} />
        <button onClick={onReset} >초기화</button>
        <div>
            <b>값: </b>
            {name} ({nickname})
        </div>
        </div>
    );
}

export default InputSample;