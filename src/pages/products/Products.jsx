import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem('seller_products');
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, [location]); // sahifaga har gal qaytganda o‘qiladi

  return (
    <div className='seller-products-container'>
      <h2>Mahsulotlaringiz</h2>

      {products.length > 0 ? (
        <div className='product-grid'>
          {products.map((product) => (
            <div key={product.id} className='product-card'>
              <img src={product.image} alt={product.title} className='product-img' />
              <h3>{product.title}</h3>
              <p className='price'>{product.price.toLocaleString()} so'm</p>

              <div className='btn-group'>
                <Link to={`/edit/${product.id}`} className='edit-btn'>
                  ✏️ Tahrirlash
                </Link>
                <Link to={`/delete/${product.id}`} className='delete-btn'>
                  🗑️ O‘chirish
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '40px', color: '#888' }}>
          Hech qanday mahsulot topilmadi.
        </p>
      )}
    </div>
  );
};

export default Products;
