"use client";
import { Empty } from "antd";
import { useParams } from "next/navigation";
import InfoCard from "./applicantCard";
import { useSelector } from "react-redux";

export default function ApplicantPage({ params }) {
  const { applicantInfo } = params;
  const data = useSelector((state) => state);
  const applicant = data?.find(
    (candidate) => `${candidate?.Name}${candidate?.lastName}` == applicantInfo
  );
  console.log(applicant);
  return (
    <div className="flex justify-center items-center  h-screen bgs">
      {Object.entries(applicant).length != 0 ? (
        <InfoCard applicant={applicant} />
      ) : (
        <Empty
          styles={{ width: 400 }}
          description="sorry, we didn't find the applicant you're looking for"
        />
      )}
    </div>
  );
}
