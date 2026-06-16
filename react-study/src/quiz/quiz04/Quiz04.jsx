import './Quiz04.css';
import { useState } from 'react';

function Quiz04(){

    //map -> <div className='box'>박스</div>

    

    let [cnt, setCnt] = useState(2);  // 
            
    return (
        <div>
            <div style={{margin:'10px'}}>
                <button onClick={()=>{
                    //빈 배열 몇개짜리를 만드는지 기준이 되는 cnt 값 조정
                    setCnt(cnt+1);
                }}>추가</button>
            </div>
            <div>
                {
                    [...Array(cnt)].map( ( _ , index )=>{
                        return <div className='box' key={index}>박스</div>
                    })
                }
            </div>
        </div>
    )
    
    
    //let [arr, setArr] = useState([0, 0]); //[0,0,1,1,1,1,1]
    // let [arr, setArr] = useState([1, 2]); //[1,2,3,4,5,.....]
                            
    
    // return (
    //     <div>
    //         <div style={{margin:'10px'}}>
    //             <button onClick={()=>{
    //                 //단순 반복용도로 사용하는 arr 배열에 배열의 갯수를 늘리기위해 값을 추가
    //                 //let temp = [...arr, 1];
    //                 let temp = [...arr, arr.length+1];
    //                 // [1, ...arr];  [1, 0, 0 ];
    //                 // [...arr, 1];  [0, 0, 1];  
    //                 setArr(temp);
    //             }}>추가</button>
    //         </div>
    //         <div>
    //             {
    //                 // arr.map((item, index)=>{
    //                 //     return <div className='box' key={index}>박스</div>
    //                 // })
    //                 arr.map( ( value )=>{
    //                     console.log(value);
    //                     return <div className='box' key={value}>박스</div>
    //                 })
    //             }
    //         </div>
    //     </div>
    // )


    // let [boxes, setBoxes] = useState([<div className='box'>박스</div>, <div className='box'>박스</div>]);
    
    // return (
    //     <div>
    //         <div style={{margin:'10px'}}>
    //             <button onClick={()=>{
    //                 //boxes 배열에 화면에 그리는 요소를 추가하기
    //                 let temp = [...boxes];
    //                 temp.push(<div className='box'>박스</div>);
    //                 setBoxes(temp);
    //             }}>추가</button>
    //         </div>
    //         <div>
    //             {boxes}
    //         </div>
    //     </div>
    // )
}

export default Quiz04;