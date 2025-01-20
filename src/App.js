
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookTableForm from './Pages/Bookform';
import Home from './Pages/Home';
import Menu from './Pages/Menu'
import About from './Pages/About';
import Blog from './Pages/Blog';
import Blogdetail from './Pages/Blogdetail';
import Contactus from './Pages/Contactus';

const App = () => {
  return (
  
      <div className='max-w-[1600px] mx-auto p-4 '>

     <BrowserRouter>  
     <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/menu" element={<Menu/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/blog" element={<Blog/>}/>
     <Route path="/blogdetail" element={<Blogdetail/>}/>

     <Route path="/booktable" element={<BookTableForm />} />
     <Route path="/contact" element={<Contactus />} />

     </Routes>
      </BrowserRouter>
      </div>
  
  );
};

export default App;
