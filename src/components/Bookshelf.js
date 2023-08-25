import React, {useState, useEffect} from 'react';
import '../App.css';
import { Button } from './Button';
import './bookshelf.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from '../API';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#008080", color: "white",
        borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "#008080", color: "white",
        borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

function Bookshelf() {
    
    const [books, setBooks] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
      axios
        .get(API_URL)
        .then((res) => {
          console.log(res.data);
          setBooks(res.data);
        })
        .catch((err) => console.log(err));
    },
        []);

    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



    return(
        <div className='self-container'>
         <div  className='shelf'>
            <div className='Area '>
              <h1>Welcome to NovelNest..</h1>
              <p>Discover a world of literary wonders at NovelNest, your gateway to a vast collection of captivating novels. <br/> Whether you're a dedicated bookworm or a casual reader, our platform offers a seamless reading experience that brings stories to life.</p>
              <h2>Read Anytime, Anywhere</h2>
              <p>Access your favorite novels on the go. Whether you're on your morning commute, lounging at home, or taking a break at work, <br/> NovelNest ensures that your reading journey is always at your fingertips.</p>
            </div>
            <div className='text'>
              <h1>Trending Books</h1>
            </div>
            <div className='space'>
             
                 <div>
                 
               <Slider {...settings}>
               {books.map((book) => (
               <div key={book.id} className='cards'>
                    <div className='cards-top'>
                        <img src={book.image_url} alt="#"/>
                    </div>
                    <div className='cards-bottom'>
                        <button className='button' onClick={() => navigate(`/books/${book.id}`)}>Details</button>
                    </div>
                </div>
                ))}
              
                </Slider>
 
               </div>
            </div>

            <div className='text'>
              <h1>Classic Books</h1>
            </div>

            <div className='space'>
             
                 <div>
                 
               <Slider {...settings}>
               {books.map((book) => (
               <div key={book.id} className='cards'>
                    <div className='cards-top'>
                        <img src={book.image_url} alt="#"/>
                    </div>
                    <div className='cards-bottom'>
                        <button className='button' onClick={() => navigate(`/books/${book.id}`)}>Details</button>
                    </div>
                </div>
                ))}
              
                </Slider>
 
               </div>
            </div>


         </div>
         
        </div>
        
    );
}
export default Bookshelf;