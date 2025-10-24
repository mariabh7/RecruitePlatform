import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
const Main = () => {
  const trans = useTranslations("Main");
  return (
    <div className="flex  capitalize flex-col gap-10 justify-center items-center text-center">
      <p className="text-black font-light text-3xl">{trans("text")} ?</p>
      <div className="flex justify-start   gap-5 ">
        <Link href={"/apply"}>
          {" "}
          <Button variant="solid" color="default" size="large">
            {trans("option1")}
          </Button>
        </Link>
        <Link href={"/recruiters"}>
          <Button type="default" size="large" color="default" className="btn">
            {trans("option2")}
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Main;
