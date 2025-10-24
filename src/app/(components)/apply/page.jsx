"use client";
import React from "react";
import UserForm from "./applicantForm";
import store from "../state/store";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Provider } from "react-redux";
import { WorkflowIcon } from "lucide-react";
const page = () => {
  const trans = useTranslations("apply");
  return (
    <Provider store={store}>
      <div className="pt-28 bgs  pb-10 pr-3 pl-3 md:pl-20 md:pr-10 flex  justify-between items-center">
        <div className="w-full">
          <div className="cardDivs">
            <WorkflowIcon />
            <h2 className="capitalize text-2xl font-bold mb-10">
              {trans("title")}
            </h2>
          </div>
          <UserForm />
        </div>
      </div>
    </Provider>
  );
};

export default page;
