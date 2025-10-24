"use client";

import { useParams } from "next/navigation";
import InfoCard from "./applicantCard";

export default function ApplicantPage({ params }) {
  const { applicantInfo } = params;

  return (
    <div className="flex justify-center items-center  h-screen bgs">
      <InfoCard />
    </div>
  );
}
