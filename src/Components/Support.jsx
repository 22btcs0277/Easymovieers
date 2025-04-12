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
        <section className="bg-gray-500 py-10 px-6 fade-in">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-blue-300 mb-4">EasyMoviers ENTERPRISE</h1>
            <h2 className="text-2xl font-semibold  text-white ">Reliable Goods Transportation</h2>
            <h3 className="text-xl text-white mb-4">Services with Seamless Content</h3>
            <p className=" text-white max-w-2xl mx-auto">
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







//  import React from 'react';
// import { Link } from 'react-router-dom';
// import Footer from './Footer';
// import Header from './Header';

// const Support = () => {
//   return (
//     <> 

    
//       <Header></Header>
//       <hr />

//       <section className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
//         {/* Title */}
//         <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">HELP CENTER</h1>
//         <p className="text-gray-700 text-center max-w-xl mb-10">
//           Need assistance? We're happy to help. Reach out to us through the appropriate channels below.
//         </p>

//         {/* Support Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl w-full">
//           {/* Card 1 */}
//           <div className="bg-white shadow-md rounded-xl p-6 flex gap-4 items-start">
//             <img src="#" alt="FAQ Icon" className="w-12 h-12 bg-gray-200 rounded-md" />
//             <div className="text-gray-800">
//               <h2 className="font-semibold text-lg">Click here to read our FAQs</h2>
//               <p className="text-sm mt-1">
//                 For support with your bookings and other queries, email us at{' '}
//                 <span className="text-blue-600 font-medium">help@theporter.in</span> or call us on{' '}
//                 <span className="text-blue-600 font-medium">022 4410 4410</span>.
//               </p>
//             </div>
//           </div>

//           {/* Repeat 3 more cards (copy-paste or map if needed) */}
//           <div className="bg-white shadow-md rounded-xl p-6 flex gap-4 items-start">
//             <img src="#" alt="FAQ Icon" className="w-12 h-12 bg-gray-200 rounded-md" />
//             <div className="text-gray-800">
//               <h2 className="font-semibold text-lg">Click here to read our FAQs</h2>
//               <p className="text-sm mt-1">
//                 For support with your bookings and other queries, email us at{' '}
//                 <span className="text-blue-600 font-medium">help@theporter.in</span> or call us on{' '}
//                 <span className="text-blue-600 font-medium">022 4410 4410</span>.
//               </p>
//             </div>
//           </div>

//           <div className="bg-white shadow-md rounded-xl p-6 flex gap-4 items-start">
//             <img src="#" alt="FAQ Icon" className="w-12 h-12 bg-gray-200 rounded-md" />
//             <div className="text-gray-800">
//               <h2 className="font-semibold text-lg">Click here to read our FAQs</h2>
//               <p className="text-sm mt-1">
//                 For support with your bookings and other queries, email us at{' '}
//                 <span className="text-blue-600 font-medium">help@theporter.in</span> or call us on{' '}
//                 <span className="text-blue-600 font-medium">022 4410 4410</span>.
//               </p>
//             </div>
//           </div>

//           <div className="bg-white shadow-md rounded-xl p-6 flex gap-4 items-start">
//             <img src="#" alt="FAQ Icon" className="w-12 h-12 bg-gray-200 rounded-md" />
//             <div className="text-gray-800">
//               <h2 className="font-semibold text-lg">Click here to read our FAQs</h2>
//               <p className="text-sm mt-1">
//                 For support with your bookings and other queries, email us at{' '}
//                 <span className="text-blue-600 font-medium">help@theporter.in</span> or call us on{' '}
//                 <span className="text-blue-600 font-medium">022 4410 4410</span>.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-50 py-10 px-6">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-blue-700">Our Office</h1>
//         <div className="flex justify-center items-center text-gray-400 my-2">
//           <span className="text-xl">-</span>
//         </div>
//         <h3 className="text-xl font-semibold text-gray-600">HEAD OFFICE</h3>
//         <div className="flex justify-center items-center text-gray-400 my-2">
//           <span className="text-xl">-</span>
//         </div>
//       </div>

//       {/* Head Office Address */}
//       <div className="max-w-4xl mx-auto mb-8 text-center">
//         <h2 className="text-2xl font-bold text-gray-800">Bangalore</h2>
//         <p className="text-gray-700 mt-2">
//           Porter Head Office, BCM Prime 1st Cross, BDA Layout, Bannerghatta Main Rd, New Gurappana Palya,
//           Tavarekere Extension, Bengaluru, Karnataka 560041
//         </p>
//         <h2 className="mt-3 text-blue-600 font-semibold cursor-pointer hover:underline">GET DIRECTIONS →</h2>
//       </div>

//       {/* Regional Offices */}
//       <div className="text-center mb-6">
//         <h1 className="text-3xl font-bold text-blue-700">REGIONAL OFFICES</h1>
//         <div className="flex justify-center items-center text-gray-400 my-2">
//           <span className="text-xl">-</span>
//         </div>
//       </div>

//       {/* Grid of Offices */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//         {[...Array(12)].map((_, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
//           >
//             <h1 className="text-xl font-semibold text-gray-800 mb-2">Mumbai</h1>
//             <p className="text-sm text-gray-600">
//               SmartShift Logistics Solutions Pvt. Ltd., No. A - 501, A – 502, B – 504, B – 505 and B - 506, 
//               Universal Business Park, Chandivali Farm Road, Off. Saki Vihar Road, Andheri (East), 
//               Mumbai, Maharashtra - 400 072
//             </p>
//             <h2 className="mt-4 text-blue-600 font-medium cursor-pointer hover:underline">
//               GET DIRECTIONS →
//             </h2>
//           </div>
//         ))}
//       </div>
//     </section>

//      <Footer></Footer>

 

//     </>
//   );
// };

// export default Support;
