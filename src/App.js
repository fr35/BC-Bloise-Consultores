import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
