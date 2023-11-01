import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import AddProduct from './pages/AddProduct/AddProduct';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add-product' element={<AddProduct/>}/>
      <Route path='/single-product/:id' element={<SingleProduct/>}/>
      <Route path='/update-product/:id' element={<UpdateProduct/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
