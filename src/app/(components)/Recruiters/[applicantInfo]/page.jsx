"use client";
import { Empty } from "antd";
import { useParams } from "next/navigation";
import InfoCard from "./applicantCard";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
export default function ApplicantPage({ params }) {
  const trans = useTranslations("InformationPage");
  const { applicantInfo } = params;
  const data = useSelector((state) => state);
  const applicant = data?.find(
    (candidate) => `${candidate?.Name}${candidate?.lastName}` == applicantInfo
  );
  console.log(applicant);
  return (
    <div className="flex justify-center items-center  h-screen bgs">
      {applicant && Object.entries(applicant).length != 0 ? (
        <InfoCard applicant={applicant} />
      ) : (
        <Empty styles={{ width: 400 }} description={trans("notfound")} />
      )}
    </div>
  );
}
