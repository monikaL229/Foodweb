import React, { useState } from 'react';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
const Contactus = () => {

const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message Sent!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      };
      
      return (
        <>
       
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 p-2 border-2 w-full  border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>
    
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 p-2 border-2 w-full  border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                placeholder="Enter your email address"
              />
            </div>
    
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="mt-2 p-2 border-2 w-full  border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                placeholder="Write your message here"
              />
            </div>
    
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
     
        </>

      );
    };
    
  

export default Contactus