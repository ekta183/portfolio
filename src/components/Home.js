import React from 'react';
import '../App.css';
import portfolioImage from '../photos/portfolio.png';  
import Footer from './Footer';
const Home = () => {
  return (
    <div>
    <div className="page-container">
       <div class="container text-center">
  <div class="row">
    <div class="col align-self-end">
    <img src={portfolioImage} alt="description" />
    </div>
    <div class="col align-self-center ">
      <h1>Welcome to My Page</h1>
          <p>This is a brief description of the page content. You can add more text here to explain what this page is about.</p>
    </div>
  </div>
</div>

    </div>
    <Footer/>
    </div>
    
  );
};

export default Home;
