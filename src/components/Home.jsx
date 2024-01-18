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
            <p >My name is Tonny Luganda, a self taught web developer based in Los angeles California,
                I'm passionate about creating high fidelity UX/UI designs that greatly impact the people around me. </p>
            </div>
            </div>
         </div>
       <Footer />

      </div>
    );
         
  }
  
  export default Home;