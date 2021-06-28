import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Experiences from './components/experiences'
import Hobbies from './components/hobbies'
function HomePage() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Experiences />
        <Hobbies />
      </div>
    );
  }
  
  export default HomePage;