
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import YourCard from './pages/YourCard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
             
             <Route path="/" element={<Home/>}/>
             <Route path="/shop" element={<Shop/>}/>
             <Route path="/card" element={<YourCard/>}/>

        </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
