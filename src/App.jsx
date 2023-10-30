import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import AddProduct from './pages/AddProduct/AddProduct';


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add-product' element={<AddProduct/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
