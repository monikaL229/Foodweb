import React from 'react';
import Header from '../Components/Layout/Header';
import about from '../Accets/about.png'
import about1 from '../Accets/about1.png'
import Footer from '../Components/Layout/Footer';
import Review from './Review'

const About = () => {
  return (
    <>
    <Header/>
    <div className="flex flex-col lg:flex-row p-4 bg-gray-200">

    <div className="flex w-full lg:w-1/2 justify-center">
    
    <img src={about} className="w-full lg:w-1/2 object-cover"/>

    </div>
    <div className="flex flex-col w-full lg:w-1/2 justify-center text-black ">
    <h2 className="text-4xl text-center font-semibold text-gray-800 mb-4">We provide healthy food for your family.</h2>
        <p className='py-4 text-gray-600 text-lg'>
          Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in the city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
        </p>
        <p className='py-4 text-gray-600'>
          At our place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>
</div>
</div>

<div className="flex flex-col w-full mt-4  lg:flex-row p-4 bg-gray-100 px-36  items-center">
<div className="flex flex-col lg:w-1/2  justify-center items-center text-black ">
<h2 className="text-4xl text-center font-semibold text-gray-800 mb-4">A little information for our valuable guest</h2>
        <p className='py-4 text-gray-600 text-lg'>
        At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.        </p>
       

        <div className='grid grid-cols-2 gap-4 w-full '>
    <div className="bg-white  rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
        <div className='flex flex-col text-4xl text-center p-4'>3</div>
        <div className='text-sm text-center'>Locations</div>
    </div>

    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
        <div className='flex flex-col text-4xl text-center p-4'>1995</div>
        <div className='text-sm text-center'> Founded</div>
    </div>

    <div className="bg-white  rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
        <div className='flex flex-col text-4xl text-center p-4'>65+</div>
        <div className='text-sm text-center'> Staff Members</div> 
    </div>

    <div className="bg-white  rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
        <div className='flex flex-col text-4xl text-center p-4'>100%</div>
        <div className='text-sm text-center'>   Satisfied Customers</div>
    </div>
</div>


    </div> 

    <div className="flex w-full lg:w-1/2 justify-center">
    
    <img src={about1} className="w-full lg:w-1/2 object-cover"/>

    </div>
</div>
<Review/>
<Footer/>

   </>
  );
};

export default About;
