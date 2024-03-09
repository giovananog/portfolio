import React from "react";
import Header from "./Header";
import MediaCard from "./Card"

function Work() {

    const projects = [{name: 'Image Watermarking', description: 'Watermarking Image Desktop App', link: 'https://github.com/giovananog/watermarking-app', src:'images/Image Watermarking.png'}, 
                      {name: 'Anime Search', description: 'An app where you can search and explore a lot of animes', link: 'https://github.com/giovananog/anime-search', src:'/images/Anime Search.png'},
                      {name: 'Flappy Bird', description: 'The classic flappy bird game made with javascript', link: 'https://github.com/giovananog/flappy-bird', src:'/images/Flappy Bird.png'} ]

    return (
      <div className="work-container">

        <Header />
        <div className="work">
        <div className="work-content">
            <div className="image-work">
              <img src="/images/unifal.png" alt="unifal logo"></img>
            </div>
           <div className="about-text">
            <hr/>
            <br/>
            <br/>
            <p > I'm currently studying Computer Science at<a href="https://www.unifal-mg.edu.br/dcc/">Universidade Federal de Alfenas</a></p>
            </div>
          </div>
         </div>
         <hr/>
         <br/>
         <div className="projects">
            <h1>Portfolio</h1>
            <p>Here are a few projects, you can see more on<a href="https://github.com/giovananog">my github</a></p>
            <div className="projects-cards">

            {projects.map((project) => 
              <a href={project.link} target="_blank">
                <MediaCard key={project.name} text={project.name} desc={project.description} src={project.src}/>
              </a>
            )}


            </div>
            
         </div>
      </div>
    );
         
  }
  
  export default Work;