import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useData } from '../../DataContext';
import "./category.css"

const Category = () => {

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
    <div className="category container-fluid">
        
        <div className="sneakers">
            <h2>Sneakers</h2>
            <Slider {...settings}>
{data.filter(item => item.category === 'sneakers').map((item)=>(
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

        <div className="heels">
            <h2>Heels</h2>
            <Slider {...settings}>
{data.filter(item => item.category === 'heels').map((item)=>(
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

        <div className="sandals">
            <h2>Flats</h2>
            <Slider {...settings}>
{data.filter(item => item.category === 'flats').map((item)=>(
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

export default Category