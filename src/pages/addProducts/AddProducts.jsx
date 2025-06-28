import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProducts.css';

const AddProducts = () => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    image: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Avvalgi mahsulotlar localStorage dan olinadi
    const existingProducts = JSON.parse(localStorage.getItem('seller_products')) || [];

    // Yangi mahsulot
    const newProduct = {
      id: Date.now(),
      ...form,
      price: parseFloat(form.price),
    };

    // Yangilangan ro'yxatni saqlaymiz
    const updatedProducts = [...existingProducts, newProduct];
    localStorage.setItem('seller_products', JSON.stringify(updatedProducts));

    alert('Mahsulot muvaffaqiyatli qo‘shildi!');
    navigate('/products');
  };

  return (
    <div className='add-product-container'>
      <h2>Yangi Mahsulot Qo‘shish</h2>
      <form className='add-form' onSubmit={handleSubmit}>
        <label>
          Mahsulot nomi:
          <input
            type='text'
            name='title'
            value={form.title}
            onChange={handleChange}
            required
            placeholder='Masalan: iPhone 15 Pro Max'
          />
        </label>
        <label>
          Narxi (so‘m):
          <input
            type='number'
            name='price'
            value={form.price}
            onChange={handleChange}
            required
            placeholder='Masalan: 15000000'
          />
        </label>
        <label>
          Rasm URL:
          <input
            type='text'
            name='image'
            value={form.image}
            onChange={handleChange}
            required
            placeholder='https://example.com/image.jpg'
          />
        </label>

        {form.image && (
          <div className='preview'>
            <img src={form.image} alt='preview' />
          </div>
        )}

        <button type='submit' className='add-btn'>
          Mahsulotni qo‘shish
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
