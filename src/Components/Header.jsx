import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.header-item', {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 shadow-md p-6 md:p-10 bg-white"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left: Logo */}
          <h1 className="text-3xl cursor-pointer font-bold text-blue-600 header-item">
            <Link to="/">EasyMoviers</Link>
          </h1>

          {/* Center: Content */}
          <div className="text-center md:text-left header-item">
            <h3 className="text-sm cursor-pointer md:text-base text-red-500 font-medium">
              <Link to="/ForEnterprise">For Enterprise</Link>
            </h3>
          </div>

          <h3 className="text-sm cursor-pointer md:text-base text-red-500 font-medium header-item">
            <Link to="/Contact">Contact-For-Shifting</Link>
          </h3>

          <h3 className="text-2xl cursor-pointer md:text-4xl font-bold text-gray-800 header-item">
            <Link to="/DeliveryPartners">Delivery Partners</Link>
          </h3>

          {/* Right: API Integration */}
          <h1 className="text-xl md:text-2xl font-semibold text-green-600 header-item">
            <Link to="/Support">Support</Link>
          </h1>
        </div>
      </header>

      {/* Optional visual separator */}
      <div className="mt-[120px]"></div> {/* Push page content below the fixed header */}
    </>
  );
};

export default Header;








// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { gsap } from 'gsap';

// const Header = () => {
//   const headerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from('.header-item', {
//         opacity: 0,
//         y: -30,
//         duration: 1,
//         ease: 'power3.out',
//         stagger: 0.2,
//       });
//     }, headerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>

//       <header ref={headerRef} className="shadow-md p-6 md:p-10 bg-white">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//           {/* Left: Logo */}
//           <h1 className="text-3xl cursor-pointer font-bold text-blue-600 header-item">
//             <Link to="/">EasyMoviesrs</Link>
//           </h1>

//           {/* Center: Content */}
//           <div className="text-center md:text-left header-item">
//             <h3 className="text-sm cursor-pointer md:text-base text-red-500 font-medium">
//               <Link to="/ForEnterprise">For Enterprise</Link>
//             </h3>
//           </div>

//           <h3 className="text-sm cursor-pointer md:text-base text-red-500 font-medium header-item">
//             <Link to="/Contact">Contact</Link>
//           </h3>

//           <h3 className="text-2xl cursor-pointer md:text-4xl font-bold text-gray-800 header-item">
//             <Link to="/DeliveryPartners">Delivery Partners</Link>
//           </h3>

//           {/* Right: API Integration */}
//           <h1 className="text-xl md:text-2xl font-semibold text-green-600 header-item">
//             <Link to="/Support">Support</Link>
//           </h1>
//         </div>
//       </header>


//       <hr />
//     </>
//   );
// };

// export default Header;




// import React from 'react'
// import { Link } from 'react-router-dom';

// const Header= () => {
//   return (

//     <>

//          <header className=" shadow-md p-6 md:p-10">
//         <div className="max-w-6xl  mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//           {/* Left: Logo */}
//           <h1 className="text-3xl cursor-pointer font-bold text-blue-600"><Link to="/">EasyMoviesrs</Link></h1>

//           {/* Center: Content */}
//           <div className="text-center md:text-left">
//             <h3 className="text-sm cursor-pointer md:text-base text-red-500 font-medium"><Link to="/ForEnterprise">For EnterPrise</Link></h3>
//           </div>
//             <h3 className="text-sm cursor-pointer md:text-base text-red-500 font-medium"><Link to="/Contact">Contact</Link></h3>
//             <h3 className="text-2xl cursor-pointer md:text-4xl font-bold text-gray-800"><Link to="/DeliveryPartners">Delivery Partners</Link></h3>

//           {/* Right: API Integration */}
//           <h1 className="text-xl md:text-2xl font-semibold text-green-600"><Link to="/Support">Support</Link></h1>
//         </div>
//       </header>
//       <hr />

//     </>
//   )
// }

// export default Header;