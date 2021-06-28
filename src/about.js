import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Experiences from './components/experiences'
import Hobbies from './components/hobbies'
import Footer from './components/footer'
function HomePage() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Experiences />
        <Hobbies />
        <Footer />
      </div>
    );
  }
  
  export default HomePage;