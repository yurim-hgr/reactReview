import React, {useState, useRef } from 'react';

function Choice ({desc, isSpecial}) {
    const [color , setColor ] = useState("white");
    const style = {
        border: '1px solid black',
        padding: '8px 16px',
        
        borderRadius: '30px',
        backgroundColor :{color},
        fontSize :"13px",
        cursor: "pointer"
    };

    // style 의 색은 바뀔테지만 재렌더링이 앙ㄴ됨,ㅏ
    // 추후 class name 을 바꾸는 방식으로 하는게 좋아보임 .. 
    // 그리고 choice 도 map 합수등을 반복적인 컴포넌트를 쓰는게 좋아보임 ...  

    
    const changeColor = () => {
        console.log("click", color)
        // const ccc = gre
        setColor(prev => prev  == "green"? "white" : "green" )
    }
    return <div style={style} onClick={changeColor}>
                {desc}                 
            </div>
}

Choice.defaultProps ={
    desc : 'choice없음'
}

export default Choice;