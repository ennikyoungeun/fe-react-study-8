import { useState } from "react";

function Quiz01(){

    let [count, setCount] = useState(0);
    
    return(
        <div>
        <p>{count}</p>
            <button onClick={()=>{
                console.log('짝수출력 버튼 클릭');
                
                setCount(count+2); //재랜더링 발생조건 
                console.log(count);
            }}>짝수출력</button>

            {/* <span className="font-red">{count}</span> */}
            <span style={{color:'red'}}>{count}</span>

        </div>
    )
}
export default Quiz01;