import React from 'react';
import "./Cart.css";
const Cart = () => {
    return (
        <div className="cartStyle">
            <table style={{textAlign: "left",width: "200px"}}>
                <thead>
                    <tr>
                        <th className="text-dark">Cart</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Items</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Delivery</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    
};

export default Cart;