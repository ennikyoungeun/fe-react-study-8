
//<Box title={arr[0]} detail={[0]}/>
// props ={ title :"아침", detail:"졸리다"};

//<Box text={arr[0]} detail={[0]}/>
// props ={ text :"아침", detail:"졸리다"};
// function Box(props){

//     //props : 컴포넌트 내부에 필요로 하는 매개변수 전달 받기

//     return (
//     <div style={{backgroundColor:'lightgreen'}}>
//                         <h1>{props.text}</h1>
//                         <p>{props.detail}</p>
//                     </div>
//     )

//     // return (
//     //     <div>
//     //         <h2> Box입니다.</h2>
//     //     </div>
//     // )
// }




// props ={ title :"아침", detail:"졸리다"};
//{text,detail} ={ title :"아침", detail:"졸리다"};
function Box({text,detail}){ //분해

    //props : 컴포넌트 내부에 필요로 하는 매개변수 전달 받기

    return (
    <div style={{backgroundColor:'lightgreen'}}>
                        <h1>{text}</h1>
                        <p>{detail}</p>
                    </div>
    )

    
}

export default Box;