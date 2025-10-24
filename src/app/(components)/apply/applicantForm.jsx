"use client";
import React from "react";
import { Button, Checkbox, Form, Input, InputNumber, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MailOutlined } from "@ant-design/icons";
const UserForm = () => {
  const dispatch = useDispatch();
  const HandleAddingApplicant = (values) => {
    dispatch({
      type: "add an applicant",
      user: values,
    });
  };
  return (
    <Form
      className="w-[80%] self-center"
      layout="vertical"
      size="default"
      name="basic"
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: "100%", height: 600 }}
      initialValues={{ remember: true }}
      onFinish={HandleAddingApplicant}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="Name"
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="last Name"
        name="lastName"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please enter your email!" },
          { type: "email", message: "Please enter a valid email" },
        ]}
      >
        <Input
          placeholder="example@email.com"
          prefix={<MailOutlined />}
          type="email"
        />
      </Form.Item>
      <Form.Item
        label="job"
        name="job"
        rules={[
          {
            required: true,
            message: "Please enter the job you're applying for",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="country" name="country">
        <Select
          showSearch
          options={[
            { value: "sample", label: <span>algeria</span> },
            { value: "red", label: <span>red</span> },
          ]}
          rules={[{ required: true, message: "Please select an option" }]}
        />
      </Form.Item>
      <Form.Item
        label="phone number"
        name="number"
        rules={[
          { required: true, message: "Please enter your phone number!" },
          { type: "number", message: "Please enter a valid number" },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
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
};
export default UserForm;
