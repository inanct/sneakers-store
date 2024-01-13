// Homepage.js
import { useData } from '../../DataContext';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home-page.css';

const Homepage = () => {
  const { data, setCart  } = useData();

const addToCartInHomepage = (item) => {
    // DataContext.js içindeki setCart fonksiyonunu çağır
    setCart((prevCart) => [...prevCart, item]);
   
  };


  // Most Popular Shoes için filtreleme
  const popularShoes = data.filter(item => item.category === 'sneakers');

  const sale = data
    .filter(item => item.hasOwnProperty(`discount`))

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
    <div className="container-fluid home">
   <div className='popular'>
  <h2>Most Popular Shoes</h2>
  <div className="slick">
    <Slider {...settings}>
      {popularShoes.map(item => (
        <div key={item.title} className="card">
          <img className='image' src={item.img} alt={item.title} />
          <div className="card-content">
            <p className="title">{item.title}</p>
            <p className="price">Price: {item.discount ? item.discount : item.prevPrice}</p>
          </div>
          <div className="add-to-cart">
             <button className="cart-button" onClick={() => addToCartInHomepage(item)}>
                    Add to Cart
                  </button>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

          <div className='discount'>
<h2>Discount Shoes</h2>
      <Slider {...settings}>
        {sale.map(item => (
          <div className="card">
            <img className='image' src={item.img} alt={item.title} />
            <p>{item.title}</p>
            <p>Price: {item.discount}</p>
             <div className="add-to-cart">
           <button className="cart-button" onClick={() => addToCartInHomepage(item)}>
                    Add to Cart
                  </button>

          </div>
          </div>
          
          
        ))}
        
      </Slider>
      
      </div>
      
    </div>
  );
};

export default Homepage;

