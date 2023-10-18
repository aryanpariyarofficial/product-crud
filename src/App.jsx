import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
