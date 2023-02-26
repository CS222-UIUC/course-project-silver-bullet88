import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import SignUp from './pages/SignUp';
import UsersHome from './pages/UsersHome';
import Question from './pages/Question';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        {/* add rountes */}
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path = 'users-home' element = {<UsersHome/>} />
        <Route path = 'question' element = {<Question/>} />
    </Routes>
    </Router>
);
}
  
export default App;