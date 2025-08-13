
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Heading from './Heading';
import Footer from './Footer';

import Cards from './Cards';
function App() {
   const cardData = [
       { title: "Project-1", text: "This Is my Project-1 of react " , img: "1" },
       { title: "Project-2", text: "This Is my Project-2 of react " , img: "2" },
       { title: "Project-3", text: "This Is my Project-3 of react " , img: "3" },
       { title: "Project-4", text: "This Is my Project-4 of react " , img: "4" },
       { title: "Project-5", text: "This Is my Project-5 of react " , img: "5" },
       { title: "Project-6", text: "This Is my Project-6 of react " , img: "6" },
       { title: "Project-7", text: "This Is my Project-7 of react " , img: "7" },
       { title: "Project-8", text: "This Is my Project-8 of react " , img: "8" },
       { title: "Project-9", text: "This Is my Project-9 of react " , img: "9" },
   ];
  return (<>
    <Navbar />
    <Heading />
    
    <Cards cardData={cardData} />
    <Footer />
  </> );
}

export default App;

 


