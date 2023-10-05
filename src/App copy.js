import React, {
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import Wrapper from "./Wrapper";
import Hello from "./Hello";
import ChoiceContainer from "./ChoiceContainer";
import Title from "./Title";
import UserList from "./UserList";
import NewChoiceList from "./NewChoiceList";
import CreateUser from "./CreateUser";
import useInputs from "./hooks/useInputs";

function countActiveUsers(users) {
  console.log("활성사용자 수를 세는 중 ..");
  return users.filter((user) => user.active).length;
}

const initialState = {

  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
   
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
}

function App() {
  const [{ username, email} , onChange, reset ] =  useInputs({
    username : '',
    email : ''
  })
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users } = state;
  // const { username, email } = state.inputs;

  // const onChange = useCallback((e) => {
  //   const { name, value } = e.target;
  //   dispatch({
  //     type: "CHANGE_INPUT",
  //     name,
  //     value,
  //   });
  // }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    reset();
    nextId.current += 1;
  }, [username, email, reset]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
  }, []);
  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  }, []);

  // 주석 수정
  const count = useMemo(() => countActiveUsers(users), [users]);
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
  //   <CreateUser
  //     username={username}
  //     email={email}
  //     onChange={onChange}
  //     onCreate={onCreate}
  //   />
    
  //   <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
  //   <div>활성 사용자 수 : {count}</div>
  // </>

// <>
// <Wrapper>
// <Title name="세로 초이스 타입" />
// <ChoiceContainer/>
// </Wrapper>
//</>
