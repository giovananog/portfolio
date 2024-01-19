import {React, useState} from "react";
import { Card } from 'antd';
const { Meta } = Card;

function MediaCard() {
    const [showInfo, setShowInfo] = useState(true);

    function handleMouse() {
        setShowInfo(!showInfo);
    }
  
    return (
      <div className="card-container">
      {showInfo ? 
        (<Card
        onMouseOver={handleMouse}
        hoverable
        style={{
          width: 350,
          backgroundColor: 'rgb(111, 123, 135)',
          height: 270,
          color: 'white'
        }}
        cover={<img alt="example" src="watermarking-project.png" />}>
        <Meta title="Project Example" description="" style={{color: 'white'}}/>
        </Card>) 
        : 
        (<Card
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouse}
          hoverable
          style={{
            width: 350,
            backgroundColor: 'rgb(111, 123, 135)',
            height: 270,
            color: 'white'
          }}
        >
          <Meta description="aaaaaaaaa" style={{ color: 'white' }} />
        </Card>
      )}
      </div>
    );
         
  }
  
  export default MediaCard;