import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Question from './pages/Question';
import UsersHome from './pages/UsersHome/UsersHome';
import Register from './pages/Register'; 
import Answer from './pages/Answer/Answer';
// import './pages/UsersHome/flashcard' 
// import './pages/UsersHome/UsersHome.css'
import './pages/login-register.css'
import './pages/Question.css'
function App() {
return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            
            {/* add rountes */}
            <Route exact path='/login' element={<Login />} />
            <Route path='/register' element={<Register/>} />
            <Route path='/question' element={<Question/>} />
            <Route path='/users-home' element={<UsersHome/>} />
            <Route path='/answer' element={<Answer/>} />
            <Route 
                path='/answer/:questionID' 
                element={<Answer/>} 
            />
        </Routes>
    </Router>
);
}
  
export default App;