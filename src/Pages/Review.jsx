import React from 'react'
import image1 from '../Accets/image1.png'; 
import image2 from '../Accets/image2.png'; 

import image3 from '../Accets/image3.png'; 

const Review = () => {
  return (
    <>
    <section className="py-16 mt-6 bg-gray-200 mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">

        <div className="flex flex-col lg:flex-row justify-between items-center lg:col-span-1">
          <div className="w-full lg:w-1/3 p-2">
            <img
              src={image1}
              alt="First Image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/3 p-2">
            <img
              src={image2}
              alt="Second Image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/3 p-2">
            <img
              src={image3}
              alt="Third Image"
              className="w-full h-auto object-cover"
            />
          </div>
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
        
<div className="mt-6 bg-gray-100 mx-auto p-4">
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
</>
  
    
  )
}

export default Review