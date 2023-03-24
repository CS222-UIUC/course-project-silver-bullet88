import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Question from './pages/Question';
import UsersHome from './pages/UsersHome';
import Register from './pages/Register';  
import './pages/UsersHome.css'
import './pages/login-register.css'
function App() {
return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path='/home' element={<Home />} />
            
            {/* add rountes */}
            <Route exact path='/login' element={<Login />} />
            <Route path='/register' element={<Register/>} />
            <Route path='/question' element={<Question/>} />

            <Route path='/users-home' element={<UsersHome/>} />
            
        </Routes>
    </Router>
);
}
  
export default App;