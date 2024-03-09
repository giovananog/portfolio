import {React, useState} from "react";
import { Card } from 'antd';
const { Meta } = Card;

function MediaCard(props) {
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
        cover={<img alt={props.text} src={props.src}/>}>
        <Meta title={props.text} description="" style={{color: 'white'}}/>
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
          <Meta description={props.desc} style={{ color: 'white' }} />
        </Card>
      )}
      </div>
    );
         
  }
  
  export default MediaCard;