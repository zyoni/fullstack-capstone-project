import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
<<<<<<< HEAD
=======
import DetailsPage from './components/DetailsPage/DetailsPage';

>>>>>>> bddfc90 (Hands-on Lab: Implement the Details Page)
function App() {
  const navigate = useNavigate();
  return (
        <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<MainPage />} />
<<<<<<< HEAD
          <Route path="/app/login" element={<LoginPage/>} />
          <Route path="/app/register" element={<RegisterPage />} />
=======
          <Route path="/app/product/:productId" element={<DetailsPage/>} />
>>>>>>> bddfc90 (Hands-on Lab: Implement the Details Page)
        </Routes>
        </>
  );
}
export default App;