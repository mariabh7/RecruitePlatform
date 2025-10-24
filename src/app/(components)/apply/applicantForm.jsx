"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from "antd";
import { useDispatch } from "react-redux";
import { MailOutlined } from "@ant-design/icons";

const UserForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const [sent, setSent] = useState(false);

  const AvailableCountries = [
    "DZ",
    "FR",
    "US",
    "GB",
    "CA",
    "DE",
    "IT",
    "ES",
    "MA",
    "TN",
    "EG",
    "SA",
    "AE",
    "IN",
    "CN",
    "JP",
    "BR",
    "NG",
    "RU",
    "TR",
  ];

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${AvailableCountries.join(
            ","
          )}`
        );
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();

        const AvailCountries = data
          .map((country) => ({
            value: country.name?.common,
            label: (
              <span className="flex items-center gap-2">
                <img
                  src={country.flags?.svg || country.flags?.png}
                  alt={country.name?.common}
                  className="w-5 h-4 object-cover"
                />
                {country.name?.common}
              </span>
            ),
          }))
          .sort((a, b) => a.value.localeCompare(b.value));

        setCountries(AvailCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const HandleAddingApplicant = (values) => {
    dispatch({
      type: "add an applicant",
      user: values,
    });
    alert("Your application was sent!");
    setSent(true);
  };

  return (
    <>
      {contextHolder}
      <Form
        className="w-[70%] self-center"
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
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input
            placeholder="example@email.com"
            prefix={<MailOutlined />}
            type="email"
          />
        </Form.Item>

        <Form.Item
          label="Job"
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

        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please select a country" }]}
        >
          <Select
            showSearch
            placeholder="Select your country"
            options={countries}
            loading={!countries.length}
            optionFilterProp="label"
          />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="number"
          rules={[
            { required: true, message: "Please enter your phone number!" },
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
    </>
  );
};

export default UserForm;
