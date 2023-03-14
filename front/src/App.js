import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home/index'
import './App.css'

// cnd fontweasome
export default () =>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Router>
    )
}