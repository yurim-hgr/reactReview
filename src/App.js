import React from 'react';
import Wrapper from './Wrapper';
import Hello from './Hello';
import ChoiceContainer from './ChoiceContainer';
import Title from './Title';
import UserList from './UserList';

function App() {
  
  return (
  //   <>
  //     <UserList/>
  //   </>
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