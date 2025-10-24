"use client";
import React from "react";
import UserForm from "./applicantForm";
import store from "../state/store";
import { Provider } from "react-redux";
const page = () => {
  return (
    <Provider store={store}>
      <div className="mt-28 mb-10 mx-3 md:mx-10 flex flex-col justify-start items-start">
        <UserForm />
      </div>
    </Provider>
  );
};

export default page;
