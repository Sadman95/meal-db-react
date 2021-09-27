import React from 'react';
import "./Cart.css";
const Cart = (props) => {
    const {item} = props;
    return (
        <div className="cartStyle">

            <ul><li>{item.category}</li></ul>


            {/* <table style={{textAlign: "left",width: "200px"}}>
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
            </table> */}
        </div>
    );
    
};

export default Cart;