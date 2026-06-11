function Basic01(){

    //js 코드 작성영역
    let hello1= " 안녕하세요 ";
    let hello2= " Hi hello";

    let hello3;
    if(1==1){
        hello3 ="안녕";
        }else{ hello3 ='잘가';}

    let flag =true;

    let himsg ="";

    for(let i=1; i<10; i++){
        hims =+ "반갑습니다.";
    }

    //flag:true ->hello1
    //flag:false ->hello2

    //주석 ctrl+/ ctrl+k+c  alt+shift+a

    //js +xml  (html표기방식)
    return(

        <div>
            <h1> React Basic 01</h1>
            <h2 className="font-rea">hello react</h2>
            <h3>{hell01}</h3>
            <h3>{hell02}</h3>
            <h3>{hell03}</h3>

            {
                 // 삼항 연산자 
                flag ==true? <p>{hello1}</p>:<p>{hello2}</p>
            }

            {
                flag ==true && <p>{hello1}</p>
            }
            {
                flag ==false && <p>{hello1}</p>
            }

            <h2 style={ {color:'blue', fontSize:'25px'} }>{himsg}</h2>


        </div>
    )

}

export default Basic01;