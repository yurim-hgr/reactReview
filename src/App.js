import React , {useRef} from 'react';
import Wrapper from './Wrapper';
import Hello from './Hello';
import ChoiceContainer from './ChoiceContainer';
import Title from './Title';
import UserList from './UserList';
import NewChoiceList from './NewChoiceList';

function App() {
  const users = [
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
      }
  ];

  const nextId = useRef(4);
  const onCreate = () =>{
     // 추가 
    nextId.current += 1;
    }

  return <UserList users = {users} />;

}

export default App;

// <>
// <Wrapper>
// <Title name="세로 초이스 타입" />
// <ChoiceContainer/>
// </Wrapper>
//</>