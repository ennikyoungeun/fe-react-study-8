import Box from "./Box";

function Props01(){


    let arr= ["아침","점심","저녁"];
    let detail =["졸리다","배부르다","피곤하다"];

    return(

        <div>
            //props 전달

            { 
                arr.map((item,index)=>{// 반복으로 전달
                    return (
                        <Box text={arr[index]} detail={detail[index]}/>
                    )
                })
            }


            <hr/>


            <Box text={arr[0]} detail={[0]}/>
            <Box text={arr[1]} detail={[1]}/>
            <Box text={arr[2]} detail={[2]}/>


            {   // 아침 0 점심 1 저녁 2
                arr.map((item, index)=>{

                return(
                    <div style={{backgroundColor:'gray'}}>
                        <h1>{arr[index]}</h1>
                        <h1>{item}</h1>
                        <p>{detail[index]}</p>
                    </div>
                    )
                })
            }

            <div style={{backgroundColor:'gray'}}>
                <h1>{arr[0]}</h1>
                <p>{detail[0]}</p>
            </div>

            <div style={{backgroundColor:'gray'}}>
                <h1>{arr[1]}</h1>
                <p>{detail[1]}</p>
            </div>

            <div style={{backgroundColor:'gray'}}>
                <h1>{arr[2]}</h1>
                <p>{detail[2]}</p>
            </div>



        </div>
    )
}


export default Props01;