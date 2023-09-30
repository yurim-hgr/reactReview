import React, { useCallback, useMemo, useRef, useState } from "react";
import Wrapper from "./Wrapper";
import Hello from "./Hello";
import ChoiceContainer from "./ChoiceContainer";
import Title from "./Title";
import UserList from "./UserList";
import NewChoiceList from "./NewChoiceList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성사용자 수를 세는 중 ..");
  return users.filter((user) => user.active).length;
}

function App() {
  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = Inputs;
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs({
      ...Inputs,
      [name]: value,
    });
    // console.log(name, value);
  }, []);
  //배열에 변화를 줄 때에는 객체와 마찬가지로, 불변성을 지켜주어야 합니다
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "yurim",
      email: "yurim@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);
  // 파라미터를 넣어주면, 이 값이 .current 값의 기본값이 됩니다.
  // 이 값을 수정 할때에는 .current 값을 수정하면 되고
  // 조회 할 때에는 .current 를 조회
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    //나중에 구현 할 배열에 항목 추가하는 로직
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([ ...users ,user]);

    setUsers((users) => users.concat(user));

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [username, email]);
  const onRemove = useCallback((id) => {
    // console.log(email);
    setUsers(users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          user.id == id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
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
