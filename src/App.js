import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Main from './components/pages/main/Main';
import Menu from './components/pages/menu/Menu';
import Cart from './components/pages/cart/Cart';
import Product from './components/pages/menu/Product';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='menu' element={<Menu/>} />
          <Route path='menu/:productId' element={<Product/>} />
          <Route path='cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;