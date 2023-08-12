
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import YourCard from './pages/YourCard'
import Login from './pages/Login'
import Register from './pages/Register'

import Dashboard from './pages/Dashboard'
import Add from './pages/Add'
import YourOrders from './pages/YourOrders'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
             
             <Route path="/" element={<Home/>}/>
             <Route path="/shop" element={<Shop/>}/>
             <Route path="/card" element={<YourCard/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/register" element={<Register/>}/>
             {/* <Route path="/book/:id" element={<BookId/>}/> */}
             <Route path="/dashboard" element={<Dashboard/>}/>
             <Route path="/add" element={<Add/>}/>
             <Route path="/order" element={<YourOrders/>}/>

        </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
