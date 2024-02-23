import React, { useEffect, useState } from 'react'
import "./ViewExp.css"

export const ViewOrders = () => {
    const [orders, setOrders] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
      fetch("http://localhost:8080/orderlist",{
        method:"GET",
        headers:{"Authorization":`Bearer ${user.accessToken}`}
      })
      .then(resp=>resp.json())
      .then(data=>setOrders(data))
    }, []);
  
    return (
      <div>
        <h2>Orders</h2>
        <table className="my-table" style={{opacity:"80%",backgroundColor:"white"}}x>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Total Price</th>
              <th>Address ID</th>
              <th>Customer ID</th>
              <th>Order Status ID</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.orderDate}</td>
                <td>{order.totalPrice}</td>
                <td>{order.address.aid}</td>
                <td>{order.customer.customerId}</td>
                <td>{order.orderStatus.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}