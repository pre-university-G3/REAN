import './App.css'
import HeroSection from './components/hompage/HeroSection';
import { BrowserRouter, Route, Routes } from 'react-router'; 
import RegisterForm from './components/form/RegisterForm';
import HomePage from './pages/HomePage';
import LoginForm from './components/form/LoginForm';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
