import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';
import UsersHome from './pages/UsersHome';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        {/* add rountes */}
        <Route path='/question' element={<Question/>} />
        <Route path='/users-home' element={<UsersHome/>} />
    </Routes>
    </Router>
);
}
  
export default App;