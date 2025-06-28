import { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('seller_products')) || [];
    setProducts(saved);
  }, []);

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + (p.stock || 0), 0);
  const totalRevenue = products.reduce((sum, p) => sum + p.price * (p.stock || 1), 0);

  return (
    <div className='seller-dashboard'>
      <h2 className='dashboard-title'>Seller Dashboard</h2>

      <div className='dashboard-cards'>
        <div className='card'>
          <h3>Mahsulotlar soni</h3>
          <p>{totalProducts}</p>
        </div>
        <div className='card'>
          <h3>Umumiy Sklad</h3>
          <p>{totalStock} dona</p>
        </div>
        <div className='card'>
          <h3>Umumiy Daromad (theoretik)</h3>
          <p>{totalRevenue.toLocaleString()} so'm</p>
        </div>
      </div>

      <h3 className='section-title'>Mahsulotlar Ro‘yxati</h3>
      <div className='product-list'>
        {products.length > 0 ? (
          products.map((p) => (
            <div className='product-item' key={p.id}>
              <h4>{p.title}</h4>
              <p>Narx: {p.price.toLocaleString()} so'm</p>
              <p>Sklad: {p.stock || 1} dona</p>
            </div>
          ))
        ) : (
          <p>Hozircha hech qanday mahsulot yo‘q.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
