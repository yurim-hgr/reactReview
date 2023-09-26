import React from 'react';
import Wrapper from './Wrapper';
import Hello from './Hello';
import ChoiceContainer from './ChoiceContainer';
import Title from './Title';

function App() {
  
  return (
    <>
      <Wrapper>
        <Title name="세로 초이스 타입" />
        <ChoiceContainer/>
      </Wrapper>

    </>
  );
}

export default App;

// <>
// <Wrapper>
// <Title name="세로 초이스 타입" />
// <ChoiceContainer/>
// </Wrapper>
//</>