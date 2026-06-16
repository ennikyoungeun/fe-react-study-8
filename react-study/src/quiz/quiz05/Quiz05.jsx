import './Quiz05.css';
import { useState } from 'react';
import Boxes from './Boxes';

function Quiz05() {

    const [boxes,setBoxes] = useState(['red','blue','green']);
        
    const addBox =(position,color)=>{
        if (position==='front') {
            setBoxes([color, ...boxes]);
        }else if (position==='back'){
            setBoxes([...boxes, color]);
        }
    };


    return (
        <div>
            <Boxes onAdd={addBox}/>

            <div style={{marginTop:'20px'}}>
                {boxes.map((color,index)=>(
                    <div
                    key={index}
                    className='box'
                    style={{backgroundColor:color}}
                    ></div>
                ))}
            </div>
        </div>

        

    );
}
export default Quiz05;