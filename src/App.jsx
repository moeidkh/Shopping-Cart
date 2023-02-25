import { Routes, Route } from 'react-router-dom';
import ProductContext from './context/ProductContext'
import Store from './components/Store';
import Details from './shared/Details';
import './App.css'
import NavBar from './shared/NavBar';
import CartContext from './context/CartContext';
import Cart from './components/Cart';


function App() {

  return (
    <ProductContext>
      <CartContext>
        <NavBar />
        <Routes>
          <Route path='/products/:id' element={<Details />} />
          <Route path='/products' element={<Store />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/" element={<Store replace to="/products" />} />
        </Routes>
      </CartContext>
    </ProductContext>
  )
}

export default App
