

//    <ColorBox bgColor={'red'} />
//function ColorBox( props ){
// function ColorBox( { bgColor } ){
//     return (
//         <div className='box' style={{backgroundColor:bgColor}}></div>
//         //<div className='box' style={{backgroundColor:props.bgColor}}></div>
//     )
// }

function ColorBox(props) {
return (
<div className='box' style={{ backgroundColor: props.bgColor }}>
<button onClick={()=>{
    props.setList( props.list.filter(( _ , index) => props.idx != index ))
}}>X</button>
</div>
);
}
export default ColorBox;


