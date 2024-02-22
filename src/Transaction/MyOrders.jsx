import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyOrders() {

    const navigate = useNavigate();
    var uid = (JSON.parse(localStorage.getItem("loggedUser"))).id;


    const [orderitems, setOrderItems] = useState([]);
    const showOrder = () => {

        console.log(uid);
        fetch("http://localhost:8080/getOrderItemByUid?uid=" + uid)
            .then(resp => resp.json())
            .then(data => { setOrderItems(data); console.log(JSON.stringify(orderitems)) })
        console.log(JSON.stringify(orderitems))
    };
    return (
        <div className="fs-4">
            <h1 className="display-1 text-info">Your orders details </h1>
            <table className="table table-bordered table-stripped table-responsive table-warning">
                <thead>
                    <tr>
                        <th>Product name</th>
                        <th>Quantity</th>
                        <th>Total Amout</th>
                        <th>Delivery street name</th>
                        <th>Delivery city name</th>
                        <th>Order placed date</th>
                        <th>Order status</th>
                    </tr>
                </thead>
                <tbody>
                    {orderitems.map((v) => {
                        return (
                            <tr>
                                <td>{v.product.productName}</td>
                                <td>{v.quantity}</td>
                                <td>{v.order.totalPrice}</td>
                                <td>{v.order.address.street}</td>
                                <td>{v.order.address.city}</td>
                                <td>{v.order.orderDate}</td>
                                <td>{v.order.orderStatus.status}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
            <button style={{ position: faAlignCenter }} type="button" className="btn btn-outline-primary" onClick={showOrder}>View orders</button>
            <button style={{ position: faAlignCenter }} type="button" className="btn btn-outline-primary" onClick={() => { navigate("/home") }}>Back to home</button>
        </div>
    )
}