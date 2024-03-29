// cart.js
import React from 'react';
import { useData } from '../../DataContext';
import "./card.css"
import "./cart.css"

const Cart = () => {
  const { cart, setCart } = useData();

 const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    
  };

  

  return (
    <div className="cart container-fluid">
      <h2>Your Products</h2>
      
      <ul className='aq'>
        {cart.map((item, index) => (
            <div className='card-add'> 
                  <img className='image' src={item.img}alt={item.title} />
          <li key={index}>{item.title}</li>
          <p className="price">Price: {item.discount ? item.discount : item.prevPrice}</p>
          
          <div>
            <span>{item.price}</span>
            <button className='remove-button' onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
            </div>
            
          
        ))}
      </ul>
    </div>
  );
};

export default Cart;
