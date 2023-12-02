// Dependencies
import React from "react";

// Styles
import './index.css'; // Ensure this file exists for Tailwind CSS styles
import Navbar from "./Navbar";
import Header from "./Header";
import Container from "./Container";
import Gallery from "./Galery";
import Pagination from "./Pagination";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Header />
      <h1 className="p-4 ml-10 mt-10 text-2xl">Browse By Category</h1>
      <Container/>
      <Gallery />
      <Pagination/>
      <Footer />
      </div>
  );
};

export default App;
