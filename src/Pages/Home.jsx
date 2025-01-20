// import React from 'react'
// import s1 from "../Accets/s1.jpeg"
// import s2 from "../Accets/s2.jpeg"
// import s3 from "../Accets/s3.jpeg"
// import s4 from "../Accets/s4.jpeg"
// import hero from '../Accets/hero.png';
// import Contactus from './Contactus'
// import Footer from '../Components/Layout/Footer'
// import Header from '../Components/Layout/Header'
// import Hero from './Hero'
// import image1 from '../Accets/image1.png'; 
// import image2 from '../Accets/image2.png'; 

// import image3 from '../Accets/image3.png'; 

// import blog1 from '../Accets/blog1.png'
// import blog2 from '../Accets/blog2.png'
// import blog3 from '../Accets/blog3.png'
// import blog4 from '../Accets/blog4.png'
// import blog5 from '../Accets/blog5.png'

// const Home = () => {

//     const cards = [
//         {
//           id: 1,
//           title: "Caterings",
//           description: 
// "Catering services provide delicious and customized food options for events, ensuring a memorable dining experience for guests",
//           imageUrl:s1, 
//         },
//         {
//           id: 2,
//           title: "Birthdays",
//           description: "Birthday services offer personalized planning and arrangements to create a fun and unforgettable celebration.",
//           imageUrl:s2,  
//         },
//         {
//           id: 3,
//           title: "Weddings",
//           description:"Wedding event services specialize in creating beautiful, seamless experiences, from planning to execution, ensuring your special day is perfect.",
//           imageUrl:s3,  
//         },
//         {
//           id: 4,
//           title: "Events",
//           description:"Event services handle every aspect of your occasion, from planning and coordination to execution, making sure every detail is flawless and memorable.",
//           imageUrl:s4,  
//         },
//       ];

      
//     return (
//         <>

//             <Header />
//             <Hero/>

          
// <section className="py-16 mt-6 bg-gray-100 mx-auto p-4">
//    <div className='text-center px-4'>
//  <h2 className='text-3xl font-bold mb-4'>Browse Our Menu
//   </h2></div>

//   <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center p-4'>
//   <div className="bg-white  p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
//   <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Delicious Breakfast</h2>
//   <p className="text-gray-600 mb-4">Start your day the right way with our selection of freshly prepared breakfast options. From hearty classics to healthy choices, we offer a variety of dishes that fuel your morning with energy and taste.</p>

//     <button className="px-4 py-2  bg-orange-500 text-white rounded-full hover:bg-blue-600 transition-colors">
//     Explore Menu
//     </button>
//   </div>

//   <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
//   <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Main Dishes</h2>
// <p className="text-gray-600 mb-4">Our main dishes are crafted with the finest ingredients to provide you with a memorable dining experience. From savory meats to fresh, vibrant vegetables, each dish is designed to satisfy your hunger and taste buds.</p>

//     <button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-blue-600 transition-colors">
//     Explore Menu
//     </button>
//   </div>

//   <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
//   <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Refreshing Drinks</h2>
// <p className="text-gray-600 mb-4">Quench your thirst with our wide selection of refreshing drinks. Whether you're in the mood for a classic cocktail, freshly squeezed juice, or a refreshing mocktail, we've got the perfect drink to complement any meal.</p>

//     <button className="px-4 py-2  bg-orange-500 text-white rounded-full hover:bg-blue-600 transition-colors">
//     Explore Menu
//     </button>
//   </div>

//   <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
//   <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Delicious Desserts</h2>
// <p className="text-gray-600 mb-4">Indulge in our selection of irresistible desserts, from decadent chocolate cakes to creamy mousses. Each dessert is crafted with love and the finest ingredients to satisfy your sweet tooth and bring joy to your dining experience.</p>

    
//     <button className="px-4 py-2  bg-orange-500 text-white rounded-full hover:bg-blue-600 transition-colors">
//     Explore Menu
//     </button>
//   </div>
// </div>

// </section> 

// {/* about */}
// <div className="flex flex-col lg:flex-row p-4 bg-gray-200">
      
    //   <div className="w-full lg:w-1/2 p-4 flex justify-center">
    //     <img
    //       src={hero}
    //       alt="Hero"
    //       className="w-full lg:w-1/2 object-cover" 
    //     />
    //   </div>

     
    //   <div className="w-full lg:w-1/2 p-4 text-black flex flex-col justify-center">
    //     <h2 className="text-4xl text-center font-semibold text-gray-800 mb-4">We provide healthy food for your family.</h2>
    //     <p className='py-4 text-gray-600 text-lg'>
    //       Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in the city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
    //     </p>
    //     <p className='py-4 text-gray-600'>
    //       At our place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
    //     </p>
    //     <button className="px-4 py-2 mt-4 bg-gray-200 border-2 border-black rounded-full text-black hover:bg-orange-500 transition-colors">
    //       More About Us
    //     </button>
    //   </div>
    // </div>

//     {/* services */}
    
//     <section className="py-16 mt-6 bg-gray-100 mx-auto p-4">
//    <div className='text-left px-4'>
//  <h2 className='text-4xl font-semibold mb-4 text-gray-800'>We also offer unique services for your events
//   </h2></div>
//   <div className="p-4">
     
//       <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden"
//           >
//             <img
//               src={card.imageUrl}
//               alt={card.title}
//             className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"

//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
//               <p className="text-gray-600">{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

// </section>
          
// {/* review */}
// <section className="py-16 mt-6 bg-gray-200 mx-auto p-4">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">

    //     <div className="flex flex-col lg:flex-row justify-between items-center lg:col-span-1">
    //       <div className="w-full lg:w-1/3 p-2">
    //         <img
    //           src={image1}
    //           alt="First Image"
    //           className="w-full h-auto object-cover"
    //         />
    //       </div>
    //       <div className="w-full lg:w-1/3 p-2">
    //         <img
    //           src={image2}
    //           alt="Second Image"
    //           className="w-full h-auto object-cover"
    //         />
    //       </div>
    //       <div className="w-full lg:w-1/3 p-2">
    //         <img
    //           src={image3}
    //           alt="Third Image"
    //           className="w-full h-auto object-cover"
    //         />
    //       </div>
    //     </div>

    //     <div className="lg:col-span-1 p-4 text-black flex flex-col justify-center">
    //       <h2 className="text-4xl font-semibold text-gray-800 mb-4">
    //       Fastest Food Delivery in City          </h2>
    //       <p className="text-lg text-gray-600 mb-4">Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. 
    //       </p>
          
    //       <ul className="space-y-4">
    //   <li className="flex items-center space-x-2">
    //    ~ Delivery within 30 minutes
    //   </li>
    //   <li className="flex items-center space-x-2">
    //   ~ Best Offer & Prices
    //   </li>
    //   <li className="flex items-center space-x-2">
    //   ~ Online Services Available
    //   </li>
    // </ul>

    //     </div></div>
    //     </section>
        
// <div className="mt-6 bg-gray-100 ">
//    <div className='text-center px-4'>
//  <h2 className='text-3xl font-bold mb-4'>What Our Customers Say
//   </h2></div>

//   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center p-4'>
//   <div className="bg-white  p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
//   <h3 className='text-orange-800 mb-4 text-lg font-semibold'>“The best restaurant”</h3>
  
//   <p className='py-4 text-gray-600 text-lg'>Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p></div>
 
//   <div className="bg-white  p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">

//   <h3 className='text-orange-800 mb-4 text-lg font-semibold'>“Simply delicious”</h3>
//   <p className='py-4 text-gray-600 text-lg'>Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
//   </div>
  
//   <div className="bg-white  p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
  
//   <h3 className='text-orange-800 mb-4 text-lg font-semibold'>“One of a kind restaurant”</h3>
//   <p className='py-4 text-gray-600 text-lg'>The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
//  </div> </div> </div>

//  {/* blog */}
//  <section className="py-6 mt-6 bg-gray-200 mx-auto p-4 ">
//         <div className='flex justify-between items-center'>
//             <h3 className="text-4xl font-semibold mb-4 text-gray-800">Our Blog & Articles</h3>
//             <button className="px-4 py-2 mr-36 bg-orange-500 text-white rounded-full hover:bg-blue-600 transition-colors">
//             Read More    </button> 
//         </div>
      
//     <div className="flex mt-6 space-x-6">
//     <div className="flex justify-center">
//     <img
//          src={blog1} 
//           alt="Image 1"
//           className="w-full h-auto object-cover"
//         />
//       </div>

//       <div className="grid grid-cols-2 gap-4 ">
//         <img
//         src={blog2} 
//           alt="Image 2"
//           className="w-full h-auto object-cover"
//         />
//         <img
//               src={blog3} 
//           alt="Image 3"
//           className="w-full h-auto object-cover"
//         />
//         <img
//           src={blog4} 
//           alt="Image 4"
//           className="w-full h-auto object-cover"
//         />
//         <img
//           src={blog5} 
//           alt="Image 5"
//           className="w-full h-auto object-cover"
//         />
//       </div>
//     </div>
//     </section>
//             <Contactus />
//             <Footer />

//         </>
//     )
// }

// export default Home

import React, { useState, useEffect } from 'react';
import s1 from "../Accets/s1.jpeg";
import s2 from "../Accets/s2.jpeg";
import s3 from "../Accets/s3.jpeg";
import s4 from "../Accets/s4.jpeg";
import hero from '../Accets/hero.png';
import Contactus from './Contactus';
import Footer from '../Components/Layout/Footer';
import Header from '../Components/Layout/Header';
import Hero from './Hero';
import image1 from '../Accets/image1.png';
import image2 from '../Accets/image2.png';
import image3 from '../Accets/image3.png';
import blog1 from '../Accets/blog1.png';
import blog2 from '../Accets/blog2.png';
import blog3 from '../Accets/blog3.png';
import blog4 from '../Accets/blog4.png';
import blog5 from '../Accets/blog5.png';

const Home = () => {

  const cards = [
    {
      id: 1,
      title: "Caterings",
      description: 
"Catering services provide delicious and customized food options for events, ensuring a memorable dining experience for guests",
      imageUrl:s1, 
    },
    {
      id: 2,
      title: "Birthdays",
      description: "Birthday services offer personalized planning and arrangements to create a fun and unforgettable celebration.",
      imageUrl:s2,  
    },
    {
      id: 3,
      title: "Weddings",
      description:"Wedding event services specialize in creating beautiful, seamless experiences, from planning to execution, ensuring your special day is perfect.",
      imageUrl:s3,  
    },
    {
      id: 4,
      title: "Events",
      description:"Event services handle every aspect of your occasion, from planning and coordination to execution, making sure every detail is flawless and memorable.",
      imageUrl:s4,  
    },
  ];


  const [isVisible, setIsVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerPosition = 300; 
    
    if (scrollPosition > triggerPosition) {
      setFadeIn(true);
      setSlideUp(true);
    } else {
      setFadeIn(false);
      setSlideUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />

      {/* About Section */}
      <div
        className={`flex flex-col lg:flex-row p-4 bg-gray-200 transition-all duration-500 ${
          fadeIn ? 'animate-fade-in' : ''
        }`}
      >

        
        <div className="w-full lg:w-1/2 p-4 flex justify-center">
          <img src={hero} alt="Hero" className="w-full lg:w-1/2 object-cover" />
        </div>
        <div className="w-full lg:w-1/2 p-4 text-black flex flex-col justify-center">
          <h2 className="text-4xl text-center font-semibold text-gray-800 mb-4">
            We provide healthy food for your family.
          </h2>
          <p className="py-4 text-gray-600 text-lg">
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance.
          </p>
          <p className="py-4 text-gray-600">
            At our place, we believe that dining is not just about food, but also about the overall experience.
          </p>
          <button className="px-4 py-2 mt-4 bg-gray-200 border-2 border-black rounded-full text-black hover:bg-orange-500 transition-colors">
            More About Us
          </button>
        </div>
      </div>

      {/* Services Section */}
      <section
        className={`py-16 mt-6 bg-gray-100 mx-auto p-4 transition-all duration-500 ${
          slideUp ? 'animate-slide-up' : ''
        }`}
      >    
     <div className='text-left px-4'>
   <h2 className='text-4xl font-semibold mb-4 text-gray-800'>We also offer unique services for your events
    </h2></div>
    <div className="p-4">
       
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
  
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  
  </section>

      {/* Review Section */}
      <section
          className={`py-16 mt-6 bg-gray-100 mx-auto p-4 transition-all duration-500 ${
            slideUp ? 'animate-slide-up' : ''
          }`}
      >
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">

        
        <div className="flex flex-col lg:flex-row justify-between items-center lg:col-span-1">
          <div className="w-full lg:w-1/3 p-2">

          <div className="hover:scale-110 hover:translate-y-2 transition-all duration-300">
  <img src={image1} alt="Image" className="w-full h-auto object-cover rounded-lg" />
</div>
          </div>
          <div className="w-full lg:w-1/3 p-2">
          <div className="hover:scale-110 hover:translate-y-2 transition-all duration-300">

            <img
              src={image2}
              alt="Second Image"
              className="w-full h-auto object-cover rounded-lg"            />
          </div></div>
          <div className="w-full lg:w-1/3 p-2">
          <div className="hover:scale-110 hover:translate-y-2 transition-all duration-300">

            <img
              src={image3}
              alt="Third Image"
              className="w-full h-auto object-cover rounded-lg"            />
      </div>    </div>
        </div>
        

        <div className="lg:col-span-1 p-4 text-black flex flex-col justify-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Fastest Food Delivery in City          </h2>
          <p className="text-lg text-gray-600 mb-4">Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. 
          </p>
          
          <ul className="space-y-4">
      <li className="flex items-center space-x-2">
       ~ Delivery within 30 minutes
      </li>
      <li className="flex items-center space-x-2">
      ~ Best Offer & Prices
      </li>
      <li className="flex items-center space-x-2">
      ~ Online Services Available
      </li>
    </ul>

        </div></div>
        </section>
              
<div 
          className={`py-16 mt-6 bg-gray-100 mx-auto p-4 transition-all duration-500 ${
            slideUp ? 'animate-slide-up' : ''
          }`}
        >    
   <div className='text-center px-4'>
 <h2 className='text-3xl font-bold mb-4'>What Our Customers Say
  </h2></div>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center p-4'>
  <div className="bg-white  p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
  <h3 className='text-orange-800 mb-4 text-lg font-semibold'>“The best restaurant”</h3>
  
  <p className='py-4 text-gray-600 text-lg'>Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p></div>
 
  <div className="bg-white  p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">

  <h3 className='text-orange-800 mb-4 text-lg font-semibold'>“Simply delicious”</h3>
  <p className='py-4 text-gray-600 text-lg'>Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
  </div>
  
  <div className="bg-white  p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
  
  <h3 className='text-orange-800 mb-4 text-lg font-semibold'>“One of a kind restaurant”</h3>
  <p className='py-4 text-gray-600 text-lg'>The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
 </div> </div> </div>
 
 {/* blog */}
  <section className="py-6 mt-6 bg-gray-200 mx-auto p-4 ">
        <div className='flex justify-between items-center'>
            <h3 className="text-4xl font-semibold mb-4 text-gray-800">Our Blog & Articles</h3>
            <button className="px-4 py-2 mr-36 bg-orange-500 text-white rounded-full hover:bg-blue-600 transition-colors">
            Read More    </button> 
        </div>
      
    <div className="flex mt-6 space-x-6">
    <div className="flex justify-center">
    <img
         src={blog1} 
          alt="Image 1"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 ">
        <img
        src={blog2} 
          alt="Image 2"
          className="w-full h-auto object-cover"
        />
        <img
              src={blog3} 
          alt="Image 3"
          className="w-full h-auto object-cover"
        />
        <img
          src={blog4} 
          alt="Image 4"
          className="w-full h-auto object-cover"
        />
        <img
          src={blog5} 
          alt="Image 5"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
    </section>
   
    

      <Contactus />
      <Footer />
    </>
  );
};

export default Home;
