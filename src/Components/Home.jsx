import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from "./Header";

const Home = () => {
  return (
    <>

      <Header></Header>

      <div className="text-center my-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to EasyMoviers</h1>
        <h2 className="text-2xl text-gray-600">Make your travel easy</h2>
      </div>

      <div>
        <img src="#" alt="picture" className="w-full h-auto" />
      </div>


      <Footer></Footer>
    </>
  );
};

export default Home;
