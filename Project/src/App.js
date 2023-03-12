import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Question from './pages/Question';
import UsersHome from './pages/UsersHome';
  
import './pages/UsersHome.css'
function App() {
return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/users-home' element={<UsersHome/>} />
        </Routes>
        <Routes>
            <Route exact path='/home' element={<Home />} />
            {/* add rountes */}
            <Route exact path='/login' element={<Login />} />
            <Route path='/question' element={<Question/>} />
            
        </Routes>
    </Router>
);
}
  
export default App;