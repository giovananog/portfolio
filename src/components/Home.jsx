import React from "react";
import Header from "./Header";
import Footer from "./Footer";


function Home() {
  
    return (
      <div className="home-container">

        <Header />
      <div className="home">
        <div className="home-content">
            <h1 >Welcome</h1>
            <div className="about-text">
            <hr/>
            <br/>
            <br/>
            <p >This is an portfolio website i developed to show more about me and my projects as a Computer Science student </p>
            </div>
            </div>
         </div>
       <Footer />

      </div>
    );
         
  }
  
  export default Home;