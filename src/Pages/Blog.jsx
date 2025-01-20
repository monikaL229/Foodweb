import React from 'react'
import Header from '../Components/Layout/Header'
import b1 from '../Accets/b1.png'
import b2 from '../Accets/b2.png'
import b3 from '../Accets/b3.png'
import b4 from '../Accets/b4.png'
import b5 from '../Accets/b5.png'
import b6 from '../Accets/b6.png'
import b7 from '../Accets/b7.png'
import b8 from '../Accets/b8.png'
import b9 from '../Accets/b9.png'
import b10 from '../Accets/b10.png'
import b11 from '../Accets/b11.png'
import b12 from '../Accets/b12.png'
import Footer from '../Components/Layout/Footer'

const Blog = () => {

  const Blogdata = [

    {
        id:1 ,
        image:b1,
        date:'january 3 2023',
        description:"How to prepare a delicious gluten free sushi",


    },
    {
    id:2,
        image:b2,
        date:'january 3 2023',
        description:"The secret tips & tricks to prepare a perfect burger",
    },
    {
      id:3,
          image:b3,
          date:'january 3 2023',
          description:"7 delicious cheesecake recipes you can prepare",
      },
      {
        id:4,
            image:b4,
            date:'january 3 2023',
            description:"5 great pizza restaurants you should visit this city",
        },
        {
          id:5,
              image:b5,
              date:'january 3 2023',
              description:"5 great cooking gadgets you can buy to save time",
          },
          {
            id:6,
                image:b6,
                date:'january 3 2023',
                description:"The secret tips & tricks to prepare a perfect burger",
            },
            {
              id:7,
                  image:b7,
                  date:'january 3 2023',
                  description:"7 delicious cheesecake recipes you can prepare",
              },
              {
                id:8,
                    image:b8,
                    date:'january 3 2023',
                    description:"5 great pizza restaurants you should visit this city",
                },
                {
                id:9,
                image:b9,
                date:'january 3 2023',
                description:"5 great pizza restaurants you should visit this city",
            },
            {
              id:10,
              image:b10,
              date:'january 3 2023',
              description:"How to prepare a delicious gluten free sushi",
          },
          {
            id:11,
            image:b11,
            date:'january 3 2023',
            description:"Top 20 simple and quick desserts for kids",
        },
        
        {
          id:12,
          image:b12,
          date:'january 3 2023',
          description:"Top 20 simple and quick desserts for kids",
      },
      


]

  return (
    <>
    <Header/>
    <div className='max-w-[1640px] m-auto px-4 py-12'>
    <div className='bg-gray-100 p-6 max-w-2xl mx-auto flex flex-col justify-center items-center'>
        <h2 className='text-black text-6xl p-4 font-semibold text-center'>Our Blog & Articals</h2>
        <p className='py-4 text-gray-600 text-lg text-center'>
        We consider all the drivers of change gives you the components you need to change to create a truly happens.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 px-12 '>

{Blogdata.map((item)=>(

  <div key={item.id}
  className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
    
    <img src={item.image} alt={item.description} className='rounded-t-lg w-full'/>
   
    <div className='p-4'>

      <p className='text-gray-500 text-sm'>{item.date}</p>
      <h3 className='text-lg text-black font-semibold my-2'>{item.description}</h3>
      </div>

      </div>
))}

      </div>


</div>
<Footer/>
</>
  )
}


export default Blog
