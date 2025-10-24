"use client";

import React from "react";
import { Select } from "antd";

const Translate = ({ locale, setLocale }) => {
  const handleChange = (value) => {
    setLocale(value);
  };

  return (
    <Select
      value={locale}
      onChange={handleChange}
      options={[
        { value: "en", label: "English" },
        { value: "fr", label: "French" },
        { value: "pt", label: "Portuguese" },
      ]}
      style={{ width: 120 }}
    />
  );
};

export default Translate;
