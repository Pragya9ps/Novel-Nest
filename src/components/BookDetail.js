import React from 'react';
import '../App.css';
import { Button } from './Button';
import './BookDetail.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { BOOK_DETAILS_URL } from '../API';


function BookDetail() {

  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
   axios
   .get(`${BOOK_DETAILS_URL}/${id}`)
   .then((res) => {
     setBook(res.data);
   })
   .catch((err)=> console.log(err));
  }, [id]);

  return (
    <>
    <div className='self-container'>
         <div  className='shelf'>
            <div className='space'>
            <div className='book-details'>
              <div className='book-img'>
                
                <img src= {book?.image_url} alt ='#'/>
              </div>
              <div>
                <h1>{book?.title}</h1>
                <p>by</p>
                <h4>{book?.authors}</h4>
                <h2>Description</h2>
                <p>{book?.description}</p>
                
                <h2>Genres</h2>
                <p>{book?.genres}</p>
              </div>
            </div>

     </div>
         </div>
         
        </div>
        
    </>
  );
}

export default BookDetail;