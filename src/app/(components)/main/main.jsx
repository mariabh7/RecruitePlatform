import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div className="flex capitalize flex-col gap-10 justify-center items-center text-center">
      <p className="text-gray-500">are you ?</p>
      <div className="flex justify-start   gap-5 ">
        <Button variant="solid" color="default" size="large">
          <Link href={"/apply"}> an applicant</Link>
        </Button>
        <Button type="default" size="large" color="default" className="btn">
          a recruiter
        </Button>
      </div>
    </div>
  );
};

export default Main;
