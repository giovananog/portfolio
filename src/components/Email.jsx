import React from 'react';
import { Button, Form, Input } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
};

const onFinish = (values) => {
  console.log(values);
};

const Email = () => (
  <Form 
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      margin: '2% auto',
      backgroundColor: '#112532',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      // style={{width: '100%',}}
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'Message']} label="Message" >
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button htmlType="submit" style={{textAlign: 'center', margin: '1% 45%'}}>
        Send email
      </Button>
    </Form.Item>
  </Form>
);
export default Email;