import './FoodMarket.css';
// import Button from 'react-bootstrap/Button';
// import Spinner from 'react-bootstrap/Spinner';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Button, Spinner, Container, Nav, Navbar, Row, Col, Card } from 'react-bootstrap';
import banner_bg from './img/banner_bg.jpg';
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';
//화면에 보여주는 푸드정보 기준 data import
import foodsData from './data/FoodsData';

import { Routes,Route, Link, useNavigate } from 'react-router';

import { useState } from 'react';
import FoodCard from './components/FoodCard';
import Home from './pages/Home';
import CustomerService from './pages/CustomerServics';

function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);
//기본경로 이동
//<a href="주소"> 새로운 주소로 이동(새로 고침)
//

    //react-router
    //link to =주소
    //navigate=(주소)

    let navigate = useNavigate();

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand onClick={()=>{navigate("/")}}>FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link onClick={()=>{ navigate("/detail")}}>FoodDetail</Nav.Link>
                        <Nav.Link onClick={()=>{ navigate("/info")}}>Info</Nav.Link>
                        <Nav.Link onClick={()=>{ navigate("/help")}}>고객센터</Nav.Link>
                        {/* 
                        <Nav.Link href="#features"><Link to="/detail">FoodDetail</Link></Nav.Link>
                        <Nav.Link href="/ifo">Info</Nav.Link>
                        <Nav.Link href="/help">고객센터</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path='/'element={<Home foods={foods}/>}/>
                <Route path='/help'element={<CustomerService/>}/>
                <Route path='/detail'element={<div><h1>datail page</h1></div>}/>
                <Route path='/info'element={<div><h1>info page</h1></div>}/>
                <Route path='/*'element={<div><h1>잘못된 접근입니다.</h1></div>}/>
            </Routes>
            
            
        </div>
    );
}



export default FoodMarket;