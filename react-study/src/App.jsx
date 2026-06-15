import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Basic01 from './components/basic01'
import State01 from './components/State01'
import Export01 from './components/Export01'
import Props02 from './components/Props02'

import Quiz01 from './quiz/quiz01/quiz01'
import State02 from './components/State02'
import State03 from './components/State03'
import Props01 from './components/Props01'
import Quiz02 from './quiz/quiz02/Quiz02'
import Quiz03 from './quiz/quiz03/Quiz03'
import NewsBlog from './newsblog/Newsblog'
function App() {
  const [count, setCount] = useState(0)

  return (

    // <Basic01/>

    // <State01/>

    //<Export01/>

    //<Quiz01/>

    //<State02/>

    //<State03/>
    //<Props01/>
    //<Props02/>
    //<Quiz02/>
    //<Quiz03/>
    <NewsBlog />
  )
}

export default App;
