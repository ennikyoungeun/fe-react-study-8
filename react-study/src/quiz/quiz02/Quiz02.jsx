import { useState } from "react";

function Quiz02(){

    let [text, setText] = useState("하나");

    let arr = ['하나', '둘', '셋'];
    //arr[0] arr[1] arr[2] arr[0] arr[1] arr[2] arr[0] arr[1] arr[2]

    //index : 0 1 2 0 1  2
    let [index, setIndex] = useState(0);

    return (
        <>
            <p>{arr[index]}</p>

            <button onClick={()=>{

                //index ++ 

                //setIndex( index+1 > 2 ? 0 : index+1) ;
                setIndex( (index+1)%arr.length) ;

                // if(text == '하나')
                //     setText('둘');
                // else if(text == '둘')
                //     setText('셋')
                // else
                //     setText('하나')
                
            }}>변경버튼</button>
        </>
    )
    
}

export default Quiz02;