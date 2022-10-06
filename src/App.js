import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ClientesPage from './pages/ClientesPage/ClientesPage';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import StaffPage from './pages/StaffPage/StaffPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/productos' element={<ProductPage/>}/>
        <Route exact path='/staff' element={<StaffPage/>}/>
        <Route exact path='/clientes' element={<ClientesPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
