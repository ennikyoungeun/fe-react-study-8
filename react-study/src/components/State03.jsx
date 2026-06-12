import { useState } from "react";


function State03() {


    //let arr =[ 1,2,3,4,5]; //일반 배열변수
    let [arr,setArr]=useState( [1,2,3,4,5] );

    //let count =10;   count =20;

    //{key value, key :value }
    //[o,o,o]
    //{key value, key :value, key:[]}
    //[ { }, {}, {}]
    return(
        <div>
            <button onClick={()=>{
                //배열에 값추가 : push unshift  splice
                //[1,2,3,4,5];
                //arr.push(6); //[1,2,3,4,5,6];  [1,2,3,4,5,6,6];  . . .
                //console.log(arr);
                
                //arr.push(7); //arr =[1,2,3,4,5 ,7]
                //setArr(arr); // 화면 재렌더링이 발생하지 않음

                //setArr([1,2,3,4,5,7]);

                //깊은 복사 -> 새로운 주소에 데이터 생성....
                //let temp =arr; // 얕은 복사

                let temp =[...arr]; //배열 깊은 복사 [...[1,2,3,4,5]]
                temp.push(7);  //[1,2,3,4,5,7]
                setArr(temp);  //State 변수 arr에 들어잇는 값 (배열의 주소) 변경인지 -> 재렌더링 
            }}>배열 변경 버튼</button>

            {
                arr.map((val)=>{
                    return <p>{val}</p>
                })
            }
        </div>
    )
}

export default State03;
