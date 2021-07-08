import React from 'react';
import Header from './components/header';
import HomeBanner from './components/home-banner';
import Work from './components/work'
import Footer from './components/footer'
function Home() {
    return (
      <div className="App">
      <Header />
       <HomeBanner />
       <Work />
       <Footer text='I hope you enjoyed my work! 😄' />
      </div>
    );
  }
  
  export default Home;