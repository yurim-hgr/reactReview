import React from "react";

// 한 파일에 여러개의 컴포넌트를 선언해도 괜찮습니다.


function User({ user }){
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}
// 배열이 업데이트 될 떄 key 가 없을 때 처럼 
// 비효율적으로 업데이트 하는 것이 아니라, 
// 수정되지 않는 기존의 값은 그대로 두고 원하는 곳에 내용을 삽입하거나 삭제합니다.

function UserList({users}) {
    
    return (
        <div>
            {
                users.map((user, index) => (
                    <User user = {user} key={index}/>
                ))
            }
        </div>
    )
}

export default UserList;