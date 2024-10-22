import React from 'react';
import About from './pages/About/about';
import Bookingpage from './pages/Booking/bookingpage';
import Contactus from './pages/Contact/contact';
import Gallerypage from './pages/Gallary/gallarypage';
import Home from './pages/Home/home';
import Notfound from './pages/Not found/notfound';
import Servicepage from './pages/Service/servicespage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Servicepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallerypage />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/booking' element={<Bookingpage />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// ERRORS I AM FACING

// 1.public/index.html  line no 87 : script error  ("commented")
// 3.scrall is not smooth maybe js error..
