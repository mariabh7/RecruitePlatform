"use client";
import { Empty } from "antd";
import { useParams } from "next/navigation";
import InfoCard from "./applicantCard";
import { useSelector } from "react-redux";

export default function ApplicantPage({ params }) {
  const { applicantName } = params;
  const data = useSelector((data) => data);
  const applicant = data?.filter(
    (candidate) => candidate.Name === applicantName
  );
  console.log(applicant);
  return (
    <div className="flex justify-center items-center  h-screen bgs">
      {applicant.length != 0 ? (
        <InfoCard />
      ) : (
        <Empty
          styles={{ width: 400 }}
          description="sorry, we didn't find the applicant you're looking for"
        />
      )}
    </div>
  );
}
