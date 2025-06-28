import { useNavigate, useParams } from 'react-router-dom';
import './DeleteProduct.css';
import { useEffect, useState } from 'react';

const DeleteProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const productId = Number(id); // id ni numberga aylantiramiz
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('seller_products')) || [];
    const found = storedProducts.find((p) => Number(p.id) === productId);
    if (!found) {
      alert('Mahsulot topilmadi!');
      navigate('/products');
    } else {
      setProduct(found);
    }
  }, [productId, navigate]);

  const handleDelete = () => {
    const storedProducts = JSON.parse(localStorage.getItem('seller_products')) || [];
    const updated = storedProducts.filter((p) => Number(p.id) !== productId);
    localStorage.setItem('seller_products', JSON.stringify(updated));
    alert('Mahsulot muvaffaqiyatli o‘chirildi!');
    navigate('/products');
  };

  const cancelDelete = () => {
    navigate('/products');
  };

  return (
    <div className='delete-product-container'>
      <h2>{product ? `"${product.title}" mahsulotini o‘chirmoqchimisiz?` : 'Yuklanmoqda...'}</h2>
      <div className='delete-buttons'>
        <button className='confirm-btn' onClick={handleDelete}>
          Ha, o‘chirish
        </button>
        <button className='cancel-btn' onClick={cancelDelete}>
          Yo‘q, qaytish
        </button>
      </div>
    </div>
  );
};

export default DeleteProduct;
