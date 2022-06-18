
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import {Route , Routes} from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
      </Routes>
     
    </div>
  );
}

export default App;
