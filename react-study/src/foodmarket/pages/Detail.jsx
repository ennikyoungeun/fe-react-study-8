import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import './Detail.css'
import Modal from 'react-bootstrap/Modal';

function Detail({ foods }) {

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
    let [oderCount, setOderCount] = useState(0);
    let [test, setTest] = useState(0);

    useEffect(() => {
        console.log('useEffect 함수실행(의존성 배열 없음)')
    }) //의존성배열이 없으면 -> 로딩될때마다 매번 실행

    useEffect(() => {
        console.log('useEffect 함수실행[]빈배열의존')
    }, []) //빈배열 -> 생성/로딩시 1회실행

    useEffect(() => {
        console.log('useEffect 함수실행[oderCount]의존성 배열')
        console.log('useEffect[oderCount]' + oderCount);

        return () => {
            console.log('useEffet[oderCount]->return()실행');
        }
    }, [oderCount]) //의존성 배열에 존재하는 값-> 참고

    useEffect(() => {
        console.log('useEffect 함수실행[oderCount]의존성 배열')
    }, [test]) //의존성 배열에 존재하는 값-> 참고

    useEffect(() => {
        console.log('useEffect 함수실행[test,oderCount]의존성 배열')
    }, [test, oderCount]) //의존성 배열에 존재하는 값-> 참고

    let [viewStatus, setViewStatus] = useState('');

    useEffect(() => {

        setTimeout(() => {
            setViewStatus('end');
        }, 500)  //->0.5초뒤에..

    }, [])

    let [modalShow, setModalShow] = useState(true); //모달창 표시 여부 true,false

    //Modal창 자동으로 닫히게 적용
    useEffect(() => {
        //modalShow stats변수 true -> false

        setTimeout(() => {
            setModalShow(false);
        }, 2000)  //->2초뒤에..

    }, [])

    useEffect(() => {
        //setTimeout
        //setInterval - 몇초마다 계속실행
        //비동기 방식

        //clearTimeout
        //clearInterval

        const interv = setInterval(() => {
            console.log('interval');
        }, 1000)
        //클린업-- clearInteval
        //clearTimeOut
        return () => {
            clearInterval(interv);
        }
    }, [oderCount]) //oderCount가 다시 생성되도 클리어 하고, 다시생성,



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

    let foodIndex = foods.findIndex((item) => {
        return item.id == id;
    })
    //foods[foodIndex].title
    //foods[foodIndex].content

    let navigate = useNavigate();
    //해당하는 id의 상품이 없으면? 필터링

    if (food == undefined || food == null) {
        return (
            <div>
                <h1>존재하지 않는 상품입니다.</h1>
                <h2>잘못된 접근입니다.</h2>
                <Button variant="info" onClick={() => {
                    navigate("/");
                }}>홈으로 돌아가기</Button>
            </div>
        )
    }


    //----------------------------------

    //스타일 적용

    /*
        조건에 따라서 스타일 적용
        가격표시
            1만원이상 -> 빨간색
            1만원미만 -> 파란색


             1) js 객체

        <p style={ {color:'red', fontSize:'20px'}  }>{food.price}</p>

        const priceTextStyle = {
            color: food.price >= 10000 ? 'red' : 'blue'
        }
        
        { color:'red' }    { color:'blue' }

        <p style={priceTextStyle}>{food.price}</p>
        <p style={{color: food.price >= 10000 ? 'red' : 'blue'}}>{food.price}</p>


        2) js 함수 방식

        const priceTextStyleFunc = (price)=>{
            if(price >= 10000){
                return {color:'red'};
            } else {
                return {color:'blue'};
            }

            // return {color: price >= 10000 ? 'red' : 'blue'};
        }

        <p style={priceTextStyleFunc(food.price)}>{food.price}</p>


        3) css 클래스 연계 사용

        //클래스이름 단일
        <p className={ food.price >= 10000 ? 'price-red' : 'price-blue'  }>{food.price}</p>

        //클래스 여러개 
        <p className={ 'text-strong ' + (food.price >= 10000 ? 'price-red' : 'price-blue')  }>{food.price}</p>

        // className=속성값 에 들어가는 변수 형태로도 활용
        const priceTextClassName = (food.price >= 10000 ? 'price-red' : 'price-blue');
        <p className={ 'text-strong ' + priceTextClassName  }>{food.price}</p>

        // 배열단위로 관리 join 함수 활용
        ['text-strong', 'price-red'].join(" ")  ->  'text-strong price-red'
        ['text-strong', 'price-red'].join("/")  ->  'text-strong/price-red'
        <p className={ ['text-strong', (food.price >= 10000 ? 'price-red' : 'price-blue') ].join(" ") }>{food.price}</p>

        // 백틱문자 활용 ``````    
        <p className={ `text-strong ${priceTextClassName}`  }>{food.price}</p>
        <p className={ `text-strong ${(food.price >= 10000 ? 'price-red' : 'price-blue')}`  }>{food.price}</p>

        4) css class + useState + useEffect 조합 활용 -> 효과 발생

        
        let [viewStatus, setViewStatus] = useState('');

        useEffect(() => {
            //setViewStatus('end');
            setTimeout(() => {
                setViewStatus('end');
            }, 500)

        }, [])

        <Container className={"start " + viewStatus}>

        5) js 객체로 내부에서 스타일 정의 후 사용

        const styles = {

            redStyle : { color: 'red' },        //styles.redStyle 

            blueStyle : { color: 'blue' },      //styles.blueStyle

            fontBigBold : { 
                fontSize:'36px',
                fontWeight:'bold'
            },

            titleStyle : {
                paddingTop:'30px',
                fontSize:'40px',
                fontWeight:'bold'
            }

        }

        <h4 style={styles.titleStyle}>{food.title}</h4>
        <p style={styles.fontBigBold}>{food.content}</p>


    */
    
    const styles = {

        redStyle : { color: 'red' },        //styles.redStyle 

        blueStyle : { color: 'blue' },      //styles.blueStyle

        fontBigBold : { 
            fontSize:'36px',
            fontWeight:'bold'
        },

        titleStyle : {
            paddingTop:'30px',
            fontSize:'40px',
            fontWeight:'bold'
        }

    }


    const priceTextStyleFunc = (price) => {
        if (price >= 10000) {
            return { color: 'red' };
        } else {
            return { color: 'blue' };
        }

         //return {color:price>=10000 ? 'red' : 'blue'};
    } 
    
    

    const priceTextStyle = {
        color: food.price >= 10000 ? 'red' : 'blue'
    }

    const priceTextClassName = (food.price >= 10000 ? 'price-red' : 'price-blue');



    //-----------------------------------

    //<div class=" box big container red"/>
    return (
        <Container className={"start " + viewStatus}>
            <Row>
                <Col md={6}>
                    <img src={import.meta.env.BASE_URL + food.imgPath} style={{ width: '100%' }} />
                </Col>
                <Col md={6}>
                    <h4>{food.title}</h4>
                    <p>{food.content}</p>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    <h4 style={styles.titleStyle}>{food.title}</h4>
                    <p style={styles.fontBigBold}>{food.content}</p>
                    <p>{food.price}</p>
                    <p style={priceTextStyle}>{food.price}</p>
                    <p style={{ color: food.price >= 10000 ? 'red' : 'blue' }}>{food.price}</p>
                    <p style={priceTextStyleFunc(food.price)}>{food.price}</p>

                    <p className={ food.price >= 10000 ? 'price-red' : 'price-blue'  }>{food.price}</p>
                    <p className={ 'text-strong ' + (food.price >= 10000 ? 'price-red' : 'price-blue')  }>{food.price}</p>
                    <p className={ 'text-strong ' + priceTextClassName  }>{food.price}</p>
                    <p className={ ['text-strong', (food.price >= 10000 ? 'price-red' : 'price-blue') ].join(" ") }>{food.price}</p>
                    <p className={ `text-strong ${priceTextClassName}`  }>{food.price}</p>
                    <p className={ `text-strong ${(food.price >= 10000 ? 'price-red' : 'price-blue')}`  }>{food.price}</p>

                    <p>
                        <Button variant="dard" onClick={() => {
                            // -1씩 처리   0보다 작으면? -> 0 
                            // -1 처리 후 0 이상 되는가?
                            // 수량이 > 0 ?  0보다 커서 -1 해도 되는가?
                            if (oderCount > 0) { setOderCount(oderCount - 1); }
                        }}>-</Button>

                        <span> {oderCount} </span>

                        <Button variant="dard" onClick={() => {
                              //보유한 재고까지만...
                            // 재고보다 작은 수량인 경우 -> +1
                            if (oderCount < food.stockCount) {
                                setOderCount(oderCount + 1);
                            } else { alert("재고수량 초과-품절"); }
                            console.log('onClick():' + oderCount);
                        }}>+</Button>
                    </p>

                    {
                        food.stockCount > 0
                            ? <Button variant="primary">주문하기</Button>
                            : <Button variant="danger">품절</Button>
                    }
                </Col>
            </Row>


            <Modal
                show={modalShow}
                onHide={() => { setModalShow(false); }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        어서오세요
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Food Good !!!</h4>
                    <p>
                        많이 많이 구매 하세요~~
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => { setModalShow(false); }}>Close</Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )


}

export default Detail;