import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";
import { useEffect,useState } from "react";

function Detail( {foods} ){

    //Detail 페이지에서 보여줄 상품정보

    //접속 path = /detail/:id
    // /detail/fd000     detail/fd001

    //:id 위치에 넘어온 값이 무엇이냐?를알면 -->food 데이터 id가 동일한 상품 찾기

    //-----------------------------
    /*
        useEffect(실행함수, 의존성배열)
        useEffect(실행함수, [])
        useEffect(실행함수 )

        useEffect(실행함수{
        return()=>{clean up function}},의존성 배열)
    */
    let [oderCount,setOderCount] = useState(0);
    let [test, setTest]= useState(0);

        useEffect(()=>{
            console.log('useEffect 함수실행(의존성 배열 없음)')
        }) //의존성배열이 없으면 -> 로딩될때마다 매번 실행

        useEffect(()=>{
            console.log('useEffect 함수실행[]빈배열의존')
        },[]) //빈배열 -> 생성/로딩시 1회실행

        useEffect(()=>{
            console.log('useEffect 함수실행[oderCount]의존성 배열')
            console.log('useEffect[oderCount]'+oderCount);
        },[oderCount]) //의존성 배열에 존재하는 값-> 참고

        useEffect(()=>{
            console.log('useEffect 함수실행[oderCount]의존성 배열')
        },[test]) //의존성 배열에 존재하는 값-> 참고

        useEffect(()=>{
            console.log('useEffect 함수실행[test,oderCount]의존성 배열')
        },[test, oderCount]) //의존성 배열에 존재하는 값-> 참고




    //-------------------------


    //경로에 있는 값을 읽어오기
    let { id } = useParams();
    console.log(id);

    // /detail/:id

    //id 확인-?food 배열데이터 id값 같은 food데이터 찾기 -> food화면에 표시 (imgpath,title,content, price)

    //filter
    let food = foods.find((item) => {
                    return item.id == id;
                })

    let foodIndex =foods.findIndex((item) => {
                    return item.id == id;
                })
    //foods[foodIndex].title
    //foods[foodIndex].content
    
    let navigate = useNavigate();
    //해당하는 id의 상품이 없으면? 필터링
    if( food== undefined || food == null ){
        return(
            <div>
                <h1>존재하지 않는 상품입니다.</h1>
                <h2>잘못된 접근입니다.</h2>
                <Button variant="info" onClick={()=>{
                    navigate("/");
                }}>홈으로 돌아가기</Button>
            </div>
        )
    }


    return (
        <Container>
            <Row>
                <Col md={6}>
                <img src={ import.meta.env.BASE_URL + food.imgPath} style={{width:'100%'}}/>
                </Col>
                <Col md={6}>
                    <h4>{food.title}</h4>
                    <p>{food.content}</p>
                    <p>{food.price}</p>

                    <p>
                        <Button variant="dard" onClick={()=>{setOderCount(oderCount-1) }}>-</Button>
                        <span> {oderCount} </span>
                        <Button variant="dard" onClick={()=>{setOderCount(oderCount+1)
                            console.log('onClick():'+oderCount);
                        }}>+</Button>
                    </p>

                    <Button variant="primary">주문하기</Button>
                </Col>
            </Row>

        </Container>
    )


}

export default Detail;