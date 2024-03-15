import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css';
import Login from './component/login';
import SignUp from './component/register/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<div><Link to="/login">Login</Link></div>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<div>  In home after login </div>} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
