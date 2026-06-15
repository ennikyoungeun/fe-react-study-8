import TextItem from "./TextItem";
import './Quiz03.css';


function Quiz03(){

    let titleArr = ['하나','둘','셋','넷','다섯'];
    let contentArr=['내용하나','내용둘','내용셋','내용넷','내용다섯'];


    return (
        <div className="App">


            {
                titleArr.map((item, index)=>{
                    return (
                        <TextItem title={item} content={contentArr[index]} key={index} />
                    );

                })
            }

           {/*  <div className='textItem'>
                <p className='title'>제목 : 하나</p>
                <p>내용 : 내용하나</p>
            </div>

            <div className='textItem'>
                <p className='title'>제목 : 둘</p>
                <p>내용 : 내용둘</p>
            </div>

            <div className='textItem'>
                <p className='title'>제목 : 셋</p>
                <p>내용 : 내용셋</p>
            </div>

            <div className='textItem'>
                <p className='title'>제목 : 넷</p>
                <p>내용 : 내용넷</p>
            </div>

            <div className='textItem'>
                <p className='title'>제목 : 다섯</p>
                <p>내용 : 내용다섯</p>
            </div> */}
        </div>
    );

}

export default Quiz03;