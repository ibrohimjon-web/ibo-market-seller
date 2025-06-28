import { useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('seller_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('seller_user');
    alert('Tizimdan chiqildi!');
    setUser(null);
    window.location.href = '/login';
  };

  //   if (!user) {
  //     return (
  //       <div className='profile-container'>
  //         <h2>Foydalanuvchi ma'lumotlari topilmadi</h2>
  //       </div>
  //     );
  //   }

  return (
    <div className='profile-container'>
      <h2>Profil Ma'lumotlari</h2>
      <div className='profile-card'>
        {/* <p>
          <strong>Ism:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Rol:</strong> {user.role}
        </p>
        <p>
          <strong>Ro‘yxatdan o‘tgan sana:</strong> {user.joined}
        </p> */}
        <p>
          <strong>Ism:</strong> Ibrohimjon
        </p>
        <p>
          <strong>Email:</strong> Ibrohimjon@gmail
        </p>
        <p>
          <strong>Rol:</strong> Seller
        </p>
        <p>
          <strong>Ro‘yxatdan o‘tgan sana:</strong> 2025.06.28
        </p>
        <button className='logout-btn' onClick={handleLogout}>
          Tizimdan chiqish
        </button>
      </div>
    </div>
  );
};

export default Profile;
