import React from 'react'
import { useData } from '../../DataContext'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./brands.css"

const Brands = () => {
  const {data, setCart} = useData();

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart,item])
  }
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="brands container-fluid">
      
      <div className="nike">
        <h2>Nike</h2>
        <Slider {...settings}>
          {data.filter(item=>item.company==="Nike").map((item)=>(
            <div className="card" key={item.id}>
              <img className='image' src={item.img} alt={item.title} />
              <p>{item.title}</p>
               <p>Price:{item.discount ? item.discount : item.prevPrice}</p>
               <div className="add-to-cart">
             <button className="cart-button" onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>
          </div>
            </div>
          ))}

        </Slider>

      </div>

      <div className="adidas">
        <h2>Adidas</h2>
        <Slider {...settings}>
          {data.filter(item=>item.company==="Adidas").map((item)=>(
            <div className="card" key={item.id}>
              <img className='image' src={item.img} alt={item.title} />
              <p>{item.title}</p>
               <p>Price:{item.discount ? item.discount : item.prevPrice}</p>
               <div className="add-to-cart">
             <button className="cart-button" onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>
          </div>
            </div>
          ))}

        </Slider>

      </div>

      <div className="puma">
        <h2>Puma</h2>
        <Slider {...settings}>
          {data.filter(item=>item.company==="Puma").map((item)=>(
            <div className="card" key={item.id}>
              <img className='image' src={item.img} alt={item.title} />
              <p>{item.title}</p>
               <p>Price:{item.discount ? item.discount : item.prevPrice}</p>
               <div className="add-to-cart">
             <button className="cart-button" onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>
          </div>
            </div>
          ))}

        </Slider>

      </div>

    </div>
  )
}

export default Brands