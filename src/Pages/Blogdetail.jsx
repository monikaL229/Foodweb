import React from 'react'
import Header from '../Components/Layout/Header'
import b14 from '../Accets/b14.png'

const Blogdetail = () => {
  return (
    <>
    <Header/>
    <div className='max-w-[1640px] m-auto px-4 py-12'>
    <div className='bg-gray-100 p-6 max-w-2xl mx-auto flex flex-col justify-center items-center'>
        <h2 className='text-black text-6xl p-4 font-semibold text-center'>Our BlogDetail</h2>
        <p className='py-4 text-gray-600 text-lg text-center'>
        The secret tips & tricks to prepare a perfect burger & pizza for our customers
        </p>
        </div> 

      <div className="max-w-2xl mx-auto mt-6" >
     <img src={b14} className='w-full h-auto'/>
     </div>
     <div className='p-4'>
     <h2 className='font-Archivo font-medium text-32 leading-10 max-xs:2xl max-sm:text-xl max-md:text-xl max-lg:text-xl max-xl:text-xl'> What do you need to prepare a home-made burger?</h2></div>
    
     <p className='py-4 font-Archivo leading-8 text-22 font-normal text-grayscale max-xs:text-base max-sm:text-sm max-md:text-base max-lg:text-lg max-xl:text-lg mb-2'>Lorem ipsum dolor sit amet consectetur. Id viverra congue vitae leo justo. Sed aenean fringilla posuere quis. Enim in malesuada mauris aliquam neque ac. Sagittis blandit amet nunc enim lectus amet sodales a posuere. Rhoncus magna quisque augue ut massa proin sodales netus. Quis quis magnis nibh sit porttitor magna ante. Mollis consequat at turpis eu posuere feugiat ultricies at maecenas. Non leo at tincidunt congue faucibus purus in imperdiet. Cras eget eros netus mauris ut tristique in parturient. Sociis id aliquet tellus in lectus purus gravida duis condimentum. Sollicitudin amet eget quis eleifend malesuada mollis.</p>
     Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.
<p className='p-4'>
~ Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.
Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
Cooking: High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.
  </p>  
      </div>
    

    </>
  )
}

export default Blogdetail