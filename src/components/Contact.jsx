import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from 'antd';

function Work() {
  
    return (
      <div className="contact-container">

       <Header />

       <div className="contact-content">
            <br/>
            <br/>
            <br/>
            <div className="resume-field">
            <p>You can check out my CV and get to know more about my experiences below</p>
            <Button danger style={{ color: 'rgb(11, 25, 38)', border: 'rgb(11, 25, 38)', 
       textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center', display: 'block', marginTop: '1%'}}>My Resume</Button>
            </div>
            <br/>
            <hr/>
            <br/>

            <div className="email-field">
            <h1>Contact Me</h1>


            <div className="contact-page">
              <div className="contact-field">
                <h2>Linkedin</h2>
                <a href="https://www.linkedin.com/in/giovana-nogueira-oliveira">
                  <p>Giovana Nogueira Oliveira</p>
                </a>
              </div>

              <div className="contact-field">
                <h2>Email</h2>
                <a href="mailto:giovana.nogueira@sou.unifal-mg.edu.br">
                  <p>giovana.nogueira@sou.unfial-mg.edu.br</p>
                </a>
              </div>
            </div>

            

            </div>
            
         </div>
      
       <Footer />

      </div>
    );
         
  }
  
  export default Work;