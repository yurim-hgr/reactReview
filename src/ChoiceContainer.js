import React, {
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

import Choice from './Choice';



function ChoiceContainer({}) {
  const [choices , setChoices] = useState([
    {
      id : 1 ,
      desc:"밑줄 친 부분은 passage와 question에 볼드처리 할 것",
      isSpecial : true
    
    },
    {
      id : 2,
      desc:"볼드체 처리 된 부분은 본문에 한 곳만 존재해야 하며, passage와 question의 철자가 다르면 안돼.",
      isSpecial : false
    },
    {
      id : 3 ,
      desc:"이 문제의 볼드체 한 부분의 표면적인 의미만으로는 정답을 찾을 수 없어야 해. 볼드체 한 부분은 추상적이여야 해.",
      isSpecial : false
    },
    {
      id : 4 ,
      desc:"볼드체 된 부분은 한 문장을 넘어가면 안돼.",
      isSpecial : false
    }
  ]);
    
  const onClick = (id, desc) => {
    
    console.log(desc);
    setChoices(
      choices.map((choice) => 
        // console.log(choice.desc)
        choice.id === id ? { ...choice, isSpecial: !choice.isSpecial } : { ...choice, isSpecial: false }
      
      )
      
    );
  }
  
  return (
    <>
      {choices.map((choice, index) => (
        <Choice key={index} choice = {choice}  onClick={onClick} />
      ))} 
    </>
  );
}

export default ChoiceContainer;


{/* <Choice desc= "밑줄 친 부분은 passage와 question에 볼드처리 할 것" isSpecial/>
<Choice desc= "볼드체 처리 된 부분은 본문에 한 곳만 존재해야 하며, passage와 question의 철자가 다르면 안돼." />
<Choice desc= "이 문제의 볼드체 한 부분의 표면적인 의미만으로는 정답을 찾을 수 없어야 해. 볼드체 한 부분은 추상적이여야 해."/> */}
{/* <Choice desc= "볼드체 된 부분은 한 문장을 넘어가면 안돼."/> */}