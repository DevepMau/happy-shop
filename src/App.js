import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import { Box } from '@mui/material';

function App() {
  return (
    <Box
      textAlign={'center'}
    >
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/productos' element={<Productos />}  />
            <Route path='carrito' element={<Carrito />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
