import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Experiences from './components/experiences'
function HomePage() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Experiences />
      </div>
    );
  }
  
  export default HomePage;