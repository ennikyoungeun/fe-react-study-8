import { useState } from "react";

function State01(){

    //react Hooks
    //useState -> 상태를 저장하는 변수, 재랜더링 발생 기중, 재랜더링 상황에서 값이 계속 유지


    //재렌더링 발생 기중
    //state 변수 set 함수를 통해서 값이 변경 된 경우 -> 화면 재랜더링( re-rendering)

    //constr | let [변수명, set 함수명] = useState(초기값);

    let [count, setCount] = useState(0);

    let cnt =0; //함수에 존재하는 일반 변수, 재랜더링 시점에 다시 호출되어 또 초기화됨

    let [num, setNum] =useState(0);



    return (

        <div>

            <h1>State01</h1>

            <p>{cnt}</p>

            <button> onClick{()=>{
                console.log('cnt증가 버튼 클릭') ;
                cnt++;
                console.log(cnt);

                num++;  //state 변수 그냥 증가
                console.log(num);

            }}cnt 증가</button>

            <br></br>

            <p>{count}</p>
            <button onClick={()=>{
                console.log('count증가 버튼 클릭');
                //count++; //값 증가 됨, 재렌더링X ->set함수를 통해서 값을 바꾼게 아니라서
                //set Count(count=count+1); XX
                setCount(count+1); //재랜더링 발생조건 
                setNum(num+1); //재랜더링 발생조건  -> 인근에 있는 재 랜더링 요소를 모아서 한번에 수행!
                console.log(count);
            }}>count 증가</button>

        </div>
    )
}

export default State01;