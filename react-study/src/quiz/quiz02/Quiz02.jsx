import { useState } from "react";

function Quiz02(){

    let [text, setText] = useState("하나");

    return (
        <>
            <p>{text}</p>

            <button onClick={()=>{

                if(text == '하나')
                    setText('둘');
                else if(text == '둘')
                    setText('셋')
                else
                    setText('하나')
                
            }}>변경버튼</button>
        </>
    )
    
}

export default Quiz02;