import React from "react";

function Title({name, color , isSpecial}) {
    const style = {
        fontSize : '18px' ,
        margin : '8px 0'
    };
    return <div style={style}>{name} </div>
}

Title.defaultProps ={
    name : '이름없음'
}
export default Title;