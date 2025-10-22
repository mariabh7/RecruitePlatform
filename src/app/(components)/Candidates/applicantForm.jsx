"use client";
import React from "react";
import { Button, Checkbox, Form, Input, InputNumber, Select } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const UserForm = () => (
  <Form
    className="w-[90%] self-center"
    layout="vertical"
    name="basic"
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: "100%" }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: "Please input your username!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item label="country" name="country">
      <Select
        showSearch
        options={[
          { value: "sample", label: <span>sample</span> },
          { value: "red", label: <span>red</span> },
        ]}
        rules={[{ required: true, message: "Please select an option" }]}
      />
    </Form.Item>
    <Form.Item label="state" name="state">
      <Select
        showSearch
        options={[
          { value: "sample", label: <span>sample</span> },
          { value: "red", label: <span>red</span> },
        ]}
        rules={[{ required: true, message: "Please select an option" }]}
      />
    </Form.Item>
    <Form.Item
      label="number"
      name="number"
      rules={[{ required: true, message: "Please enter your phone number!" }]}
    >
      <InputNumber style={{ width: "100%" }} />
    </Form.Item>
    <Form.Item
      label="job"
      name="job"
      rules={[
        { required: true, message: "Please the job you're applying for" },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button
        variant="solid"
        color="default"
        size="large"
        className="w-full text-center"
        htmlType="submit"
      >
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default UserForm;
