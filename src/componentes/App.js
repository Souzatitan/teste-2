import React from "react";
import '../App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import Reset from "./Reset"

function App() {
    return(
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/reset' element={<Reset />}></Route>
                
            </Routes>
        
        </BrowserRouter>
    )
}

export default App