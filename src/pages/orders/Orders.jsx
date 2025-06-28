import React from 'react';
import './Orders.css';

const orders = [
  {
    id: 1,
    customer: 'Ali Valiyev',
    product: 'Smartfon Samsung A14',
    quantity: 2,
    total: 5000000,
    status: 'Yangi',
  },
  {
    id: 2,
    customer: 'Laylo Karimova',
    product: 'Quloqchin JBL',
    quantity: 1,
    total: 480000,
    status: 'Jarayonda',
  },
  {
    id: 3,
    customer: 'Shoxruh Mirzayev',
    product: 'Noutbuk Lenovo',
    quantity: 1,
    total: 7200000,
    status: 'Yetkazilgan',
  },
];

const Orders = () => {
  return (
    <div className='orders-container'>
      <h2>Buyurtmalar</h2>
      <table className='orders-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Mijoz</th>
            <th>Mahsulot</th>
            <th>Soni</th>
            <th>Jami</th>
            <th>Holat</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.quantity} ta</td>
              <td>{order.total.toLocaleString()} so'm</td>
              <td>
                <span className={`status ${order.status.toLowerCase().trim()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
