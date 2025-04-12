import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './Header';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const ForEnterprise = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  });

  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // On Load Animation
      gsap.from('.fade-in', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      });

      // Scroll Animations
      gsap.utils.toArray('.scroll-fade').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert("Thank you! We'll get in touch soon.");
    setFormData({ name: '', company: '', email: '', phone: '' });
  };

  return (
    <>
      <Header />
      <div ref={containerRef}>
        <section className="bg-gray-600 py-10 px-6 fade-in">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-blue-300 mb-4">EasyMoviers ENTERPRISE</h1>
            <h2 className="text-2xl font-semibold text-white">Reliable Goods Transportation</h2>
            <h3 className="text-xl text-white mb-4">Services with Seamless Content</h3>
            <p className="text-white max-w-2xl mx-auto">
              Hassle-Free Enterprise Logistics • Centralised Management • Transparent Operations & Full Control
            </p>
          </div>
        </section>

        <section className="bg-gray-400 py-10 px-6 scroll-fade">
          <div className="max-w-xl mx-auto bg-gray-100 rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Fill Out for More Details</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {['name', 'company', 'email', 'phone'].map((field) => (
                <div key={field}>
                  <input
                    name={field}
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    placeholder={`Enter your ${field}`}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-10 scroll-fade">Key Features We Offer</h1>

          {[
            {
              title: "Unified Trip Details",
              text: "Check all your goods transportation trip information in the city.",
            },
            {
              title: "Payments through Prepaid Wallet",
              text: "No cash reimbursement hassles, as all trips are prepaid.",
            },
            {
              title: "Complete Clarity and Control",
              text: "Monitor wallet usage with full visibility.",
            },
            {
              title: "Multi-User Access",
              text: "Seamlessly add, remove, activate, or deactivate users to maintain unified logistics operations.",
            },
          ].map((item, idx) => (
            <div
              className="grid md:grid-cols-2 gap-10 items-center mb-16 scroll-fade"
              key={idx}
            >
              <div className="text-left">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.text}</p>
              </div>
              <div>
                <div className="w-full h-40 bg-gray-200 rounded-xl shadow" />
              </div>
            </div>
          ))}
        </section>

        <section className="bg-blue-100 py-12 px-6 rounded-xl scroll-fade">
          <h1 className="text-3xl font-bold text-blue-800 mb-10">OUR GROWING NETWORK</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { count: "21+", label: "CITIES" },
              { count: "500+", label: "CLIENTS" },
              { count: "1M+", label: "DELIVERIES" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-6 text-center"
              >
                <h2 className="text-4xl font-bold text-blue-700">{stat.count}</h2>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-white text-center scroll-fade">
          <h1 className="text-4xl font-bold text-blue-700 mb-6">WE ARE TRANSFORMING CITIES</h1>
          <p className="text-gray-700 max-w-4xl mx-auto mb-12 text-lg leading-relaxed">
            Our business is growing by the minute! We are now present in <span className="font-semibold">21+ cities</span> and have an extensive fleet base of more than <span className="font-semibold">7.5L driver-partners</span>! We have established ourselves as a trusted goods transportation service provider for big or small businesses, eCommerce merchants, supermarkets, Kirana store owners and many more for their business goods transportation services.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-gray-200" />
                <p className="text-gray-600 text-sm font-medium">City {i + 1}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black text-white py-16 px-4 scroll-fade">
          <h1 className="text-4xl font-bold text-center mb-12">SOME WORDS FROM OUR HAPPY CUSTOMERS</h1>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <h2 className="text-lg font-semibold text-yellow-400">CEO</h2>
                <p className="text-sm text-gray-400 mb-4">of an Ecommerce company</p>
                <p className="text-base leading-relaxed text-white italic">
                  “They brought ground-level expertise in goods transportation services, and their reliable driver-partner allocation ensured a seamless transportation experience.”
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ForEnterprise;






// import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import { Link } from 'react-router-dom';

// const ForEnterprise = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     company: '',
//     email: '',
//     phone: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     alert("Thank you! We'll get in touch soon.");
//     // reset form
//     setFormData({ name: '', company: '', email: '', phone: '' });
//   };

//   return (
//     <>
//       <Header />

//       <section className="bg-gray-50 py-10 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl font-bold text-blue-700 mb-4"> EasyMoviers ENTERPRISE</h1>
//           <h2 className="text-2xl font-semibold text-gray-700">Reliable Goods Transportation</h2>
//           <h3 className="text-xl text-gray-600 mb-4">Services with Seamless Content</h3>
//           <p className="text-gray-700 max-w-2xl mx-auto">
//             Hassle-Free Enterprise Logistics • Centralised Management • Transparent Operations & Full Control
//           </p>
//         </div>
//       </section>

//       <section className="bg-white py-10 px-6">
//         <div className="max-w-xl mx-auto bg-gray-100 rounded-2xl shadow-md p-8">
//           <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Fill Out for More Details</h2>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <input
//                 name="name"
//                 type="text"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 name="company"
//                 type="text"
//                 placeholder="Enter your company name"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 name="phone"
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
//             >
//               Get in Touch
//             </button>
//           </form>
//         </div>
//       </section>
       
//       <div className="py-16 px-4 bg-gray-50 text-center">
//   {/* Key Features Header */}
//   <h1 className="text-4xl font-bold text-blue-700 mb-10">Key Features We Offer</h1>

//   {/* Unified Trip Details */}
//   <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
//     <div className="text-left">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-2">Unified Trip Details</h2>
//       <p className="text-gray-600">Check all your goods transportation trip information in the city.</p>
//     </div>
//     <div>
//       <img src="#" alt="Trip Details" className="w-full rounded-xl shadow" />
//     </div>
//   </div>

//   {/* Prepaid Wallet */}
//   <div className="grid md:grid-cols-2 gap-10 items-center mb-16 flex-row-reverse">
//     <div className="text-left">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-2">Payments through Prepaid Wallet</h2>
//       <p className="text-gray-600">No cash reimbursement hassles, as all trips are prepaid.</p>
//     </div>
//     <div>
//       <img src="#" alt="Wallet" className="w-full rounded-xl shadow" />
//     </div>
//   </div>

//   {/* Clarity & Multi-User Access */}
//   <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
//     <div>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-2">Complete Clarity and Control</h2>
//       <p className="text-gray-600">Monitor wallet usage with full visibility.</p>
//       <img src="#" alt="Clarity Image" className="mt-4 w-full rounded-xl shadow" />
//     </div>
//     <div>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-2">Multi-User Access</h2>
//       <p className="text-gray-600">Seamlessly add, remove, activate, or deactivate users to maintain unified logistics operations.</p>
//       <img src="#" alt="User Access Image" className="mt-4 w-full rounded-xl shadow" />
//     </div>
//   </div>

//   {/* Our Growing Network */}
//   <div className="bg-blue-100 py-12 px-6 rounded-xl">
//     <h1 className="text-3xl font-bold text-blue-800 mb-10">OUR GROWING NETWORK</h1>
//     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//       <div className="bg-white rounded-xl shadow p-6">
//         <h2 className="text-4xl font-bold text-blue-700">21+</h2>
//         <p className="text-gray-600">CITIES</p>
//       </div>
//       <div className="bg-white rounded-xl shadow p-6">
//         <h2 className="text-4xl font-bold text-blue-700">500+</h2>
//         <p className="text-gray-600">CLIENTS</p>
//       </div>
//       <div className="bg-white rounded-xl shadow p-6">
//         <h2 className="text-4xl font-bold text-blue-700">1M+</h2>
//         <p className="text-gray-600">DELIVERIES</p>
//       </div>
//     </div>
//   </div>
// </div>



// <div className="py-16 px-4 bg-white text-center">
//   {/* Heading */}
//   <h1 className="text-4xl font-bold text-blue-700 mb-6">WE ARE TRANSFORMING CITIES</h1>

//   {/* Paragraph */}
//   <p className="text-gray-700 max-w-4xl mx-auto mb-12 text-lg leading-relaxed">
//     Our business is growing by the minute! We are now present in <span className="font-semibold">21+ cities</span> and have an extensive fleet base of more than <span className="font-semibold">7.5L driver-partners</span>! We have established ourselves as a trusted goods transportation service provider for big or small businesses, eCommerce merchants, supermarkets, Kirana store owners and many more for their business goods transportation services. Our loyal customers across <span className="font-semibold">21+ cities</span> serve as a testament of our top notch service and ever-expanding presence.
//   </p>

//   {/* Cities Grid */}
//   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
//     {Array.from({ length: 16 }).map((_, i) => (
//       <div key={i} className="flex flex-col items-center space-y-2">
//         <img
//           src="#"
//           alt="City Icon"
//           className="w-16 h-16 object-cover rounded-full bg-gray-200"
//         />
//         <p className="text-gray-600 text-sm font-medium">Ahmedabad</p>
//       </div>
//     ))}
//   </div>
// </div>

// <div className="bg-black text-white py-16 px-4">
//   <h1 className="text-4xl font-bold text-center mb-12">SOME WORDS FROM OUR HAPPY CUSTOMERS</h1>

//   <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//     {[1, 2, 3].map((_, index) => (
//       <div
//         key={index}
//         className="bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
//       >
//         <h2 className="text-lg font-semibold text-yellow-400">CEO</h2>
//         <p className="text-sm text-gray-400 mb-4">of an Ecommerce company</p>
//         <h3 className="text-base leading-relaxed text-white italic">
//           “They brought ground-level expertise in goods transportation services, and their reliable
//           driver-partner allocation ensured a seamless transportation experience while helping us
//           identify and address inefficiencies.”
//         </h3>
//       </div>
//     ))}
//   </div>
// </div>



 

//       <Footer />
//     </>
//   );
// };

// export default ForEnterprise;
