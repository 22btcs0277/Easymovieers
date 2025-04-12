import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-item', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
        x: (i) => (i % 2 === 0 ? -100 : 100),
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      });
    }, footerRef);

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 text-white pt-10 pb-6 px-4 md:px-12"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-2 md:col-span-1 footer-item">
          <h1 className="text-2xl font-bold text-blue-400 mb-4">EasyMoviers</h1>
        </div>

        {[...Array(4)].map((_, i) => (
          <div key={i} className="footer-item">
            <h1 className="text-lg font-semibold text-white mb-2">Company</h1>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
        ))}
      </div>

      <hr className="border-gray-700 my-6 footer-item" />

      <div className="text-sm text-gray-300 space-y-2 mb-6 footer-item">
        <h1 className="text-white font-semibold text-lg">Registered Office:</h1>
        <p>© 2025 SmartShift Logistics Solutions Pvt. Ltd.</p>
        <p>
          No. A-501, A-502, B-504, B-505 and B-506, Fifth Floor at Universal Business Park, Chandivali Farm Road, off.
          Saki Vihar Road, Andheri (East), Mumbai-4000072, Maharashtra
        </p>
      </div>

      <div className="text-sm text-gray-300 space-y-1 mb-6 footer-item">
        <p>CIN: U74999MH2014PTC306120</p>
        <p>
          Email: <a href="mailto:help@theporter.in" className="underline">help@theporter.in</a>
        </p>
        <p>
          Phone: <a href="tel:08044104410" className="underline">080 4410 4410</a>
        </p>
      </div>

      <div className="text-sm text-gray-300 footer-item">
        <h1 className="text-white font-semibold mb-1">Follow us on</h1>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-pink-400">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;









// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white pt-10 pb-6 px-4 md:px-12">
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
//         {/* Logo */}
//         <div className="col-span-2 md:col-span-1">
//           <h1 className="text-2xl font-bold text-blue-400 mb-4">EasyMoviers</h1> 
//         </div>

//         {/* Footer Links (Repeated Sections) */}
//         {[...Array(7)].map((_, i) => (
//           <div key={i}>
//             <h1 className="text-lg font-semibold text-white mb-2">Company</h1>
//             <ul className="space-y-1 text-gray-300 text-sm">
//               <li>About Us</li>
//               <li>Careers</li>
//               <li>Blog</li>
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Horizontal Line */}
//       <hr className="border-gray-700 my-6" />

//       {/* Registered Office Info */}
//       <div className="text-sm text-gray-300 space-y-2 mb-6">
//         <h1 className="text-white font-semibold text-lg">Registered Office:</h1>
//         <p>© 2025 SmartShift Logistics Solutions Pvt. Ltd.</p>
//         <p>
//           No. A-501, A-502, B-504, B-505 and B-506, Fifth Floor at Universal Business Park, Chandivali Farm Road, off.
//           Saki Vihar Road, Andheri (East), Mumbai-4000072, Maharashtra
//         </p>
//       </div>

//       {/* Contact Info */}
//       <div className="text-sm text-gray-300 space-y-1 mb-6">
//         <p>CIN: U74999MH2014PTC306120</p>
//         <p>Email: <a href="mailto:help@theporter.in" className="underline">help@theporter.in</a></p>
//         <p>Phone: <a href="tel:08044104410" className="underline">080 4410 4410</a></p>
//       </div>

//       {/* Social Links */}
//       <div className="text-sm text-gray-300">
//         <h1 className="text-white font-semibold mb-1">Follow us on</h1>
//         <div className="space-x-4">
//           <a href="#" className="hover:text-blue-400">Facebook</a>
//           <a href="#" className="hover:text-pink-400">Instagram</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
