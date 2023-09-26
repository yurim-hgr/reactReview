import React, {useState, useRef } from 'react';


function NewChoice({choices}){
    const style = {
        border: '1px solid black',
        padding: '8px 16px',
        
        borderRadius: '30px',
        backgroundColor : "white",
        fontSize :"13px",
        cursor: "pointer"
    };

    return (
        <div  style={style}>
            {choices.desc}
        </div>
    )
}

function NewChoiceList() {
    
    const choices = [
        { 
            id : 0 ,
            desc :"밑줄 친 부분은 passage와 question에 볼드처리 할 것" 
        },
        { 
            id : 1 ,
            desc :"볼드체 처리 된 부분은 본문에 한 곳만 존재해야 하며, passage와 question의 철자가 다르면 안돼."
        },
        { 
            id : 2 ,
            desc :"이 문제의 볼드체 한 부분의 표면적인 의미만으로는 정답을 찾을 수 없어야 해. 볼드체 한 부분은 추상적이여야 해."
        },
        { 
            id : 3 ,
            desc :"볼드체 된 부분은 한 문장을 넘어가면 안돼."
        }
    ];

    return (
        <div>
            {
                choices.map((choice , index) => (
                    <NewChoice choices = {choice} key = {index}/>
                ))
            }
        </div>
    )
   
}

export default NewChoiceList;