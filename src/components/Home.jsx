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
            <p >Lorem ipsum dolor sit amet,  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
             voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident, sunt in </p>
            </div>
            </div>
         </div>
       <Footer />

      </div>
    );
         
  }
  
  export default Home;