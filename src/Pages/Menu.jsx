import React from 'react'
import Header from '../Components/Layout/Header'
import m1 from '../Accets/m1.png'
import m2 from '../Accets/m2.png'
import m3 from '../Accets/m3.png'
import m4 from '../Accets/m4.png'
import m5 from '../Accets/m5.png'
import m6 from '../Accets/m6.png'
import m7 from '../Accets/m7.png'
import m8 from '../Accets/m8.png'
import Category from '../Components/Category'
import Footer from '../Components/Layout/Footer'

const Menu = () => {

  const cards = [
    {
      id: 1,
      title: "Fried Eggs",
      description: 
"Catering services provide delicious and customized food options for events, ensuring a memorable dining experience for guests",
      imageUrl:m1, 
    },
    {
      id: 2,
      title: "Hawaiian Pizza",
      description: "Birthday services offer personalized planning and arrangements to create a fun and unforgettable celebration.",
      imageUrl:m2,  
    },
    {
      id: 3,
      title: "Martinez Cocktail",
      description:"Wedding event services specialize in creating beautiful, seamless experiences, from planning to execution, ensuring your special day is perfect.",
      imageUrl:m3,  
    },
    {
      id: 4,
      title: "Butterscotch Cake",
      description:"Event services handle every aspect of your occasion, from planning and coordination to execution, making sure every detail is flawless and memorable.",
      imageUrl:m4,  
    },
    {
    id: 4,
    title: "Mint Lemonade",
    description:"Event services handle every aspect of your occasion, from planning and coordination to execution, making sure every detail is flawless and memorable.",
    imageUrl:m5,  
  },

  {
    id: 4,
    title: "Chocolate Icecream",
    description:"Event services handle every aspect of your occasion, from planning and coordination to execution, making sure every detail is flawless and memorable.",
    imageUrl:m6,  
  },

  {
    id: 4,
    title: "Cheese Burger",
    description:"Event services handle every aspect of your occasion, from planning and coordination to execution, making sure every detail is flawless and memorable.",
    imageUrl:m7,  
  },

  {
    id: 4,
    title: "Classic Waffles",
    description:"Event services handle every aspect of your occasion, from planning and coordination to execution, making sure every detail is flawless and memorable.",
    imageUrl:m8,  
  },

  ];


  return (
    <>
    <Header/>
    <div className='mx-auto max-w-[1600px]'>
    <div className='bg-gray-100 p-6 max-w-2xl mx-auto flex flex-col justify-center items-center'>
        <h2 className='text-black text-6xl p-4 font-semibold text-center'>Our Menu</h2>
        <p className='py-4 text-gray-600 text-lg text-center'>
          We consider all the drivers of change gives you the components you need to change to create a truly happens.
        </p>
      </div>


</div>
<Category/>
<Footer/>
</>

  )
}

export default Menu