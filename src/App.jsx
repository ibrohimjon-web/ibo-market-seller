import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Products from './pages/products/Products';
import AddProducts from './pages/addProducts/AddProducts';
import EditProduct from './pages/editProduct/EditProduct';
import DeleteProduct from './pages/deleteProduct/DeleteProduct';
import Orders from './pages/orders/Orders';
import Profile from './pages/profile/Profile';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='app-layout'>
      {/* Login sahifasida sidebar bo‘lmaydi */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='*'
          element={
            <div className='main-content'>
              <Sidebar />
              <div className='page-content'>
                <Routes>
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/products' element={<Products />} />
                  <Route path='/add/products' element={<AddProducts />} />
                  <Route path='/edit/:id' element={<EditProduct />} />
                  <Route path='/delete/:id' element={<DeleteProduct />} />
                  <Route path='/orders' element={<Orders />} />
                  <Route path='/profile' element={<Profile />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
