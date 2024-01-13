import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.css"
import { MdShoppingCart } from "react-icons/md";
import { useData } from '../../../DataContext';
const Header = () => {
    const[navlist, setnavlist] = useState(false)
     const { cart } = useData();
  return (
    <header>
        <div className='container-fluid '>
            
            <div className="header">
 <div className='logo'>
                <h1>Sneakers</h1>
            </div>
            <div className='nav'>
             <ul className={navlist ? "small" : 'menu'}>
                <li>
                 <Link to="/">Home</Link>
                </li>
                <li>
                    <Link>Category</Link>
                </li>
                 
                 <li>
                    <Link>Brands</Link>
                </li>
                 <li>
                    <Link>Contact</Link>
                </li>
                 <li>
                    <Link>About Us</Link>
                </li>
                 <Link to="/cart">
                  <i ><MdShoppingCart />{cart.length}</i>
                </Link>
             </ul>
             <div className="toggle">
                <button onClick={()=> setnavlist(!navlist)}>
                    <i className='burger'><GiHamburgerMenu /></i>
                </button>
             </div>
            </div>
            
            </div>
           
        </div>
    </header>
  )
}

export default Header