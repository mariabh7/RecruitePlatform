import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div className="flex capitalize flex-col gap-10 justify-center items-center text-center">
      <p className="text-gray-500">are you ?</p>
      <div className="flex justify-start   gap-5 ">
        <Link href={"/apply"}>
          {" "}
          <Button variant="solid" color="default" size="large">
            an applicant
          </Button>
        </Link>
        <Link href={"/recruiters"}>
          <Button type="default" size="large" color="default" className="btn">
            a recruiter
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Main;
