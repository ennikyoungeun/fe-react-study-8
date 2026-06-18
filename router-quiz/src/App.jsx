import { BrowserRouter as Router,Routes, Route,Link } from 'react-router';
import Main_Page from './pages/Main_Page';
import Info from './pages/Info';
import Mypage from './pages/Mypage';
import Cart from './pages/Cart';

function App() {

  return(
    

    <div>

    <Link to ="/"><button>Main_Page</button></Link>
    <Link to ="/info"><button>Info</button></Link>
    <Link to ="/mypage"><button>Mypage</button></Link>
    <Link to ="/cart"><button>Cart</button></Link>

    <Routes>
    <Route path ="/"element={<Main_Page/>}></Route>
    <Route path ="/info"element={<Info/>}></Route>
    <Route path ="/mypage"element={<Mypage/>}></Route>
    <Route path ="/cart"element={<Cart/>}></Route>

    </Routes>

    </div>
    
  );
}

export default App
