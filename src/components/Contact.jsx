import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from 'antd';
import Email from "./Email";

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
            <h1>Send me a message!</h1>
            <Email/>
            </div>
            
         </div>
      
       <Footer />

      </div>
    );
         
  }
  
  export default Work;