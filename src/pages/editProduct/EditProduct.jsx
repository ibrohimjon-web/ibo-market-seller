import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditProduct.css';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', price: '', image: '' });

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('seller_products')) || [];
    const product = storedProducts.find((p) => Number(p.id) === Number(id));

    if (product) {
      setForm(product);
    } else {
      alert('Mahsulot topilmadi');
      navigate('/products');
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedProducts = JSON.parse(localStorage.getItem('seller_products')) || [];
    const updatedProducts = storedProducts.map((p) =>
      Number(p.id) === Number(id) ? { ...form, id: Number(id), price: Number(form.price) } : p
    );

    localStorage.setItem('seller_products', JSON.stringify(updatedProducts));
    alert('Mahsulot muvaffaqiyatli yangilandi!');
    navigate('/products');
  };

  return (
    <div className='edit-product-container'>
      <h2>Mahsulotni Tahrirlash</h2>

      <form className='edit-form' onSubmit={handleSubmit}>
        <label>
          Nomi:
          <input type='text' name='title' value={form.title} onChange={handleChange} required />
        </label>

        <label>
          Narxi:
          <input type='number' name='price' value={form.price} onChange={handleChange} required />
        </label>

        <label>
          Rasm URL:
          <input type='text' name='image' value={form.image} onChange={handleChange} required />
        </label>

        <div className='preview'>
          <img src={form.image} alt='Preview' />
        </div>

        <button type='submit' className='save-btn'>
          Saqlash
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
