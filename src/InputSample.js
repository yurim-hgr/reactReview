import React, {useState} from 'react';

function InputSample() {
    const [inputs, setInputs ] = useState({
        name : '',
        nickname : ''
    });

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출
    
    //불변성을 지켜주어야만 리액트 컴포넌트에서 상태가 업데이트가 됐음을 감지 할 수 있고 이에 따라 필요한 리렌더링이 진행됩니다.
    const onChange = (e) => {

       const { value, name } = e.target; // 우선 e.target 에서 name과 value

       // 계산된 프로퍼티 명 
       // e.target.name = name , nickname
       
       setInputs({
        ...inputs,
        [name] : value
       })

    }

    const onReset = (e) => {
        setInputs({
            name: '',
            nickname : ''
        })
    }

    
    return ( 
        <div>
        <input name="name"  placeholder='이름' value={name} onChange={onChange}/>
        <input name="nickname" placeholder='닉네임' value={nickname} onChange={onChange} />
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: </b>
            {name} ({nickname})
        </div>
        </div>
    );
}

export default InputSample;