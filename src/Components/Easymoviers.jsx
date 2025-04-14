import React, { useEffect, useRef } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import img from '../assets/moved.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Easymovieers = () => {
  const pageRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Welcome Banner
      gsap.from('.welcome', {
        opacity: 0,
        y: -30,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
      });

      // Contact Section Animation
      gsap.from('.contact-box', {
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -100 : 100),
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      });

      // Problem Sections
      gsap.utils.toArray('.problem-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
        });
      });

      // Steps Animation
      gsap.utils.toArray('.step-box').forEach((box) => {
        gsap.from(box, {
          scrollTrigger: {
            trigger: box,
            start: 'top 85%',
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
        });
      });
    }, pageRef);

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <div ref={pageRef}>
      <Header />

      {/* Welcome */}
      <div className="text-center my-8 bg-yellow-100 welcome">
        <h1 className="text-4xl text-red-500 font-bold mb-2">Welcome to EasyMoviers</h1>
        <h2 className="text-2xl text-gray-600">Make your travel easy</h2>
      </div>

      {/* Contact/Call/Image */}
      <div className="bg-blue-600 flex flex-col md:flex-row justify-between items-center m-4 md:m-20 gap-6">
        <div className="contact-box bg-red rounded w-full sm:w-50 text-center md:text-left">
          <h3 className="text-xl text-red-600 font-semibold mb-2">Call Us Now</h3>
          <a href="tel:+911234567890" className="text-red-600 text-lg underline">
            +91 9994949949
          </a>
        </div>

        <img
          src={img}
          alt="banner"
          className="contact-box w-full md:w-[45%] h-40 md:h-auto object-cover rounded-xl shadow-md"
        />

        <div className="contact-box w-full sm:w-70 bg-red flex justify-center">
          <Link to="/Contact">
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Contact-for-Shifting
            </button>
          </Link>
        </div>
      </div>

      {/* Problem Section */}
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Problems You Should Avoid, Get Solutions Related to Packers and Movers!
        </h1>

        <div className="mb-8 problem-section">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            Getting Delayed Services from Packers and Movers
          </h2>
          <ul className="flex flex-wrap gap-4">
            {Array(10)
              .fill('The presence of fake services')
              .map((item, idx) => (
                <li
                  key={idx}
                  className="bg-white border border-gray-300 shadow-md p-4 rounded w-full sm:w-[48%] md:w-[30%]"
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>

        <div className="mb-8 problem-section">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            Contact Packers & Movers at the earliest
          </h2>
          <ul className="flex flex-wrap gap-4">
            {Array(10)
              .fill('The presence of fake services')
              .map((item, idx) => (
                <li
                  key={idx}
                  className="bg-white border border-gray-300 shadow-md p-4 rounded w-full sm:w-[48%] md:w-[30%]"
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>

        {/* Button */}
        <div className="flex justify-center w-full">
          <Link to="/Contact" className="w-full sm:w-150">
            <button className="bg-red-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">
              Contact-For-shifting
            </button>
          </Link>
        </div>
      </div>

      {/* How it Works */}
      <div className="max-w-6xl bg-blue-600 mx-auto px-4 py-10">
        <h1 className="text-3xl color-red font-bold text-center mb-10">
          How it Works – 4 Easy Steps to Hire Reliable Local Home Shifting Services in Chandigarh
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'List Your Shifting Needs with Us',
              desc:
                'Fill out the form available on our platform with your details such as current location, desired destination...',
            },
            {
              title: 'Connect with Certified Local Shifting Companies in Chandigarh at ease',
              desc:
                'Once you submit the form... our customer care representatives connect you with Chandigarh’s top logistics players...',
            },
            {
              title: 'Check & Compare Packers and Movers through our Dashboard Feature',
              desc:
                'Our dashboard lets you view reviews, ratings, and business profiles to compare providers with ease.',
            },
            {
              title: 'Get Instant Free Quotes and Choose One That Fits You Best',
              desc:
                'Compare charges of the top 4 Packers and Movers and pick the one that suits you best.',
            },
          ].map((step, i) => (
            <div key={i} className="p-6 bg-white border rounded-lg shadow step-box">
              <h2 className="text-xl text-red-600 font-semibold mb-2">{step.title}</h2>
              <p className="text-gray-700 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Easymovieers;








// import React from 'react'
// import Header from './Header'
// import { Link } from 'react-router-dom'
// import Footer from './Footer'
// import img from "../assets/moved.jpg"

// const Easymovieers = () => {
//   return (
//     <>
//       <Header />

//       <div className="text-center my-8 bg-gray-300">
//         <h1 className="text-4xl text-red-500 font-bold mb-2">Welcome to EasyMoviers</h1>
//         <h2 className="text-2xl text-gray-600">Make your travel easy</h2>
//       </div>


//   <div className="bg-blue-600 flex flex-col md:flex-row justify-between items-center m-4 md:m-20 gap-6">
  
//   {/* Left - Call Section */}
//   <div className="bg-red rounded w-full sm:w-50 text-center md:text-left">
//     <h3 className="text-xl text-red-600  font-semibold mb-2">Call Us Now</h3>
//     <a href="tel:+911234567890" className="text-red-600  text-lg underline">
//       +91 12345 67890
//     </a>
//   </div>

//   {/* Center - Image */}
//   <img
//     src={img}
//     alt="banner"
//     className="w-full md:w-[45%] h-40 md:h-auto object-cover rounded-xl shadow-md"
//   />

//   {/* Right - Button */}
//   <div className="w-full sm:w-70 bg-red flex justify-center">
//     <Link to="/Contact">
//       <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
//         Contact Us
//       </button>
//     </Link>
//   </div>
// </div>


 

//       <div className="max-w-5xl mx-auto p-6">
//   <h1 className="text-3xl font-bold text-center mb-8">
//     Problems You Should Avoid, Get Solutions Related to Packers and Movers!
//   </h1>

//   {/* First List Section */}
//   <div className="mb-8">
//     <h2 className="text-xl font-semibold mb-4 text-blue-700">
//       Getting Delayed Services from Packers and Movers
//     </h2>
//     <ul className="flex flex-wrap gap-4">
//       {Array(10).fill("The presence of fake services").map((item, idx) => (
//         <li
//           key={idx}
//           className="bg-white border border-gray-300 shadow-md p-4 rounded w-full sm:w-[48%] md:w-[30%]"
//         >
//           {item}
//         </li>
//       ))}
//     </ul>
//   </div>



//   {/* Second List Section */}
//   <div className="mb-8">
//     <h2 className="text-xl font-semibold mb-4 text-blue-700">
//       Contact Packers & Movers at the earliest
//     </h2>
//     <ul className="flex flex-wrap gap-4">
//       {Array(10).fill("The presence of fake services").map((item, idx) => (
//         <li
//           key={idx}
//           className="bg-white border border-gray-300 shadow-md p-4 rounded w-full sm:w-[48%] md:w-[30%]"
//         >
//           {item}
//         </li>
//       ))}
//     </ul>
//   </div>



//   {/* Centered Button */}
//   <div className="flex justify-center w-full">
//   <Link to="/Contact" className="w-full sm:w-150">
//     <button className="bg-red-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">
//       Contact Us
//     </button>
//   </Link>
// </div>

// </div>


// <div className="max-w-6xl bg-blue-600 mx-auto px-4 py-10">
//   <h1 className="text-3xl color-red font-bold text-center mb-10">
//     How it Works – 4 Easy Steps to Hire Reliable Local Home Shifting Services in Chandigarh
//   </h1>

//   <div className="grid md:grid-cols-2 gap-6">
//     {/* Step 1 */}
//     <div className="p-6 bg-white border rounded-lg shadow">
//       <h2 className="text-xl text-red-600 font-semibold mb-2">List Your Shifting Needs with Us</h2>
//       <p className="text-gray-700 text-sm">
//         Fill out the form available on our platform with your details such as current location, desired destination, date, name, and mobile number in order to obtain free quotes from local home shifting service providers in Chandigarh.
//       </p>
//     </div>

//     {/* Step 2 */}
//     <div className="p-6 bg-white border rounded-lg shadow">
//       <h2 className="text-xl text-red-600 font-semibold mb-2">
//         Connect with Certified Local Shifting Companies in Chandigarh at ease
//       </h2>
//       <p className="text-gray-700 text-sm">
//         Once you submit the form with all your logistics requirements, our customer care representatives connect you with Chandigarh’s top logistics players enlisted on our platform. We list service providers after detailed background screening to ensure you avail quality shifting services.
//       </p>
//     </div>

//     {/* Step 3 */}
//     <div className="p-6 bg-white border rounded-lg shadow">
//       <h2 className="text-xl text-red-600 font-semibold mb-2">
//         Check & Compare Packers and Movers through our Dashboard Feature
//       </h2>
//       <p className="text-gray-700 text-sm">
//         Our user-friendly dashboard feature empowers you to check background details of various packers and movers in Chandigarh, like their business profiles, user reviews, and ratings. The feature helps you get a clearer picture of different service providers and plan your move with one that best meets your needs.
//       </p>
//     </div>

//     {/* Step 4 */}
//     <div className="p-6 bg-white border rounded-lg shadow">
//       <h2 className="text-xl text-red-600 font-semibold mb-2">
//         Get Instant Free Quotes and Choose One That Fits You Best
//       </h2>
//       <p className="text-gray-700 text-sm">
//         On the basis of quotes, you can compare the charges of the top 4 Packers and Movers in Chandigarh and go with the one you feel is in your best interest. We strive to provide the best logistics solutions. For any queries, you can take our expert's suggestion at any time.
//       </p>
//     </div>
//   </div>
// </div>



//       <Footer />
//     </>
//   )
// }

// export default Easymovieers

