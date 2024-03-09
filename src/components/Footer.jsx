import React from "react";
import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

function Footer() {
    return (
      <div className="footer">
      <Space>
        <a href="https://github.com/giovananog">
         <IconFont type="icon-github" style={{fontSize:'30px', color:'white'}}/>
        </a>
      </Space>
      </div>
    );
  }
  
  export default Footer;