import { useState } from 'react';
import './Quiz06.css';
import ColorBox from './ColorBox';

function Quiz06() {


    let [boxes, setBoxes] = useState(['red', 'blue', 'green', 'black', 'yellow', 'purple', 'orange']);
    
    return (
        <div>
            <div>
                <button onClick={() => { 
                    setBoxes( ['red', ...boxes] );
                }}>앞빨간박스추가</button>
                <button onClick={() => { 
                    setBoxes( ['blue', ...boxes] );
                }}>앞파란박스추가</button>
                <button onClick={() => { 
                    setBoxes( ['green', ...boxes] );
                }}>앞초록박스추가</button>

                <button onClick={() => { 
                    setBoxes( [ ...boxes, 'red'] );
                }}>뒤빨간박스추가</button>
                <button onClick={() => { 
                    setBoxes( [ ...boxes, 'blue'] );
                }}>뒤파란박스추가</button>
                <button onClick={() => { 
                    setBoxes( [ ...boxes, 'green'] );
                }}>뒤초록박스추가</button>
                <button onClick={() => { 
                    //unshift shift
                    let temp = [...boxes];
                    temp.shift();
                    setBoxes(temp);
                }}>앞박스삭제</button>
                <button onClick={() => { 
                    //push pop
                    let temp = [...boxes];
                    temp.pop();
                    setBoxes(temp);
                }}>뒤박스삭제</button>
            </div>

            


            {/* {
                boxes.map((item, index)=>{
                    //return <div className='box' style={{backgroundColor:item}}></div>
                    return <ColorBox bgColor={item} />
                })
            } */}

            {
                boxes.map((box ,index)=>{
                    //return <div className='box' style={{backgroundColor:item}}></div>
                    return <ColorBox bgColor={box} idx={index} list ={boxes} setList={setBoxes} key={index}/>

                })
            }
        </div>
    )


    // 각 색깔 박스별로 기준 코드로 구분하기 (기준코드: 1 2 3 4 ...분류값)
    // let [boxes, setBoxes] = useState([1, 2, 3, 4]);
    // // 1:red 2:blue 3:green 4:black
    // // 1:red 2:blue 3:green 4:black 5: yellow

    // return (
    //     <div>
    //         <div>
    //             <button onClick={() => { 
    //                 //let temp = [...boxes];
    //                 //temp.unshift(1);
    //                 //let temp = [1, ...boxes];
    //                 //setBoxes(temp);
    //                 setBoxes( [1, ...boxes] );
    //             }}>앞빨간박스추가</button>
    //             <button onClick={() => { 
    //                 setBoxes( [2, ...boxes] );
    //             }}>앞파란박스추가</button>
    //             <button onClick={() => { 
    //                 setBoxes( [3, ...boxes] );
    //             }}>앞초록박스추가</button>

    //             <button onClick={() => { 
    //                 setBoxes( [ ...boxes, 1] );
    //             }}>뒤빨간박스추가</button>
    //             <button onClick={() => { 
    //                 setBoxes( [ ...boxes, 2] );
    //             }}>뒤파란박스추가</button>
    //             <button onClick={() => { 
    //                 setBoxes( [ ...boxes, 3] );
    //             }}>뒤초록박스추가</button>
    //         </div>


    //         {
    //             boxes.map((item, index)=>{
    //                 if(item == 1){
    //                     return <div className='box' style={{backgroundColor:'red'}}></div>
    //                 } else if(item == 2){
    //                     return <div className='box' style={{backgroundColor:'blue'}}></div>
    //                 } else if(item == 3){
    //                     return <div className='box' style={{backgroundColor:'green'}}></div>
    //                 } else {
    //                     return <div className='box' style={{backgroundColor:'black'}}></div>
    //                 }                    
    //                 // item==5   ..... style={{backgroundColor:'yellow'}}
    //             })
    //         }
    //     </div>
    // )

    /*
    //배열에 요소 직접 넣는 경우
    let [boxes, setBoxes] = useState([<div className='box' style={{backgroundColor:'red'}}></div>,
                                    <div className='box' style={{backgroundColor:'green'}}></div>,
                                    <div className='box' style={{backgroundColor:'blue'}}></div>,
                                    <div className='box' style={{backgroundColor:'black'}}></div>
                                    ]);

    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.unshift(<div className='box' style={{backgroundColor:'red'}}></div>);
                    setBoxes(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.unshift(<div className='box' style={{backgroundColor:'blue'}}></div>);
                    setBoxes(temp);
                }}>앞파란박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.unshift(<div className='box' style={{backgroundColor:'green'}}></div>);
                    setBoxes(temp);
                }}>앞초록박스추가</button>

                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.push(<div className='box' style={{backgroundColor:'red'}}></div>);
                    setBoxes(temp);
                }}>뒤빨간박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.push(<div className='box' style={{backgroundColor:'blue'}}></div>);
                    setBoxes(temp);
                }}>뒤파란박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.push(<div className='box' style={{backgroundColor:'green'}}></div>);
                    setBoxes(temp);
                }}>뒤초록박스추가</button>
            </div>

            {boxes}

        </div>
    )*/
}

export default Quiz06;