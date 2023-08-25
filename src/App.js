import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Form from './components/pages/Form';
import FormLogin from './components/pages/FormLogin';
import BookDetail from './components/BookDetail';



function App() {
  const [user, setLoginUser] = useState({})
  if(!user) {
    return <FormLogin setLoginUser={setLoginUser} />
  }

  let redirectToUrl;
      if (user && user._id) //check condition
      {
        redirectToUrl = <Navigate to="/"/>;
      }else{
        redirectToUrl = <Navigate to="/formlogin"/>;
      }
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>

          <Route exact path='/' element={< Home />}>
            
              
            {/* {
              user && user._id ? <Home /> : <FormLogin />
            } */}
          </Route>
          {/* <Route exact path='/' element={< Services />} />
          <Route exact path='/' element={< Categories />}/> */}
          <Route exact path='/form' element={< Form />}/>
          <Route exact path='/formlogin' element= {<FormLogin/>}/>
          <Route exact path='/books/:id' element= {<BookDetail/>}/>
            
        </Routes>
      </Router>
    </>
  );
}

export default App;
