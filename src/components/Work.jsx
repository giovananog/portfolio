import React from "react";
import Header from "./Header";
import MediaCard from "./Card"

function Work() {
  
    return (
      <div className="work-container">

        <Header />
        <div className="work">
        <div className="work-content">
            <div className="image-work">
              <img src="unifal.png" alt="unifal logo"></img>
            </div>
           <div className="about-text">
            <hr/>
            <br/>
            <br/>
            <p >Lorem ipsum dolor sit amet,  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
             voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident, sunt in </p>
            </div>
          </div>
         </div>
         <hr/>
         <br/>
         <div className="projects">
            <h1>Portfolio</h1>
            <p>Here are a few projects, you can see more on<a href="https://github.com/giovananog">my github</a></p>
            <div className="projects-cards">
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />


            </div>
            
         </div>
       {/* <Footer /> */}

      </div>
    );
         
  }
  
  export default Work;