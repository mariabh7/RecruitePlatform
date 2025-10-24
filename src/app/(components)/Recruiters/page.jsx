"use client";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { Provider } from "react-redux";
import store from "../state/store";
import Applicants from "./applicants";
const Page = () => {
  return (
    <Provider store={store}>
      <div className="mt-34">
        <Applicants />
      </div>
    </Provider>
  );
};

export default Page;
