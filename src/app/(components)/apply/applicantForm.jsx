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
import { useTranslations } from "next-intl";
const UserForm = () => {
  const trans = useTranslations("apply");
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
          label={trans("name")}
          name="Name"
          rules={[
            {
              required: true,
              message: `${trans("obligation")} ${trans("name")}`,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={trans("lastname")}
          name="lastName"
          rules={[
            {
              required: true,
              message: `${trans("obligation")} ${trans("lastname")}`,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: `${trans("obligation")} email`,
            },
            {
              type: "email",
              message: `${trans("obligation")} valid email `,
            },
          ]}
        >
          <Input
            placeholder="example@email.com"
            prefix={<MailOutlined />}
            type="email"
          />
        </Form.Item>

        <Form.Item
          label={trans("job")}
          name="job"
          rules={[
            {
              required: true,
              message: `${trans("obligation")} ${trans("job")}`,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={trans("country")}
          name="country"
          rules={[
            {
              required: true,
              message: `${trans("obligation")} ${trans("country")}`,
            },
          ]}
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
          label={trans("number")}
          name="number"
          rules={[
            {
              required: true,
              message: `${trans("obligation")} ${trans("number")}`,
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label={null}>
          <Button
            variant="solid"
            color="default"
            size="large"
            className="w-full mt-5 text-center"
            htmlType="submit"
          >
            {trans("submit")}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UserForm;
