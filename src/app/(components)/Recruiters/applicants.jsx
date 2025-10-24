"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { List, Avatar, Button, Skeleton, Empty } from "antd";
import Link from "next/link";
import { useTranslations } from "next-intl";
const Applicants = () => {
  const Applicants = useSelector((state) => state);
  const [visibleApplicants, setVisibleApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Limit, setLimit] = useState(5);
  const trans = useTranslations("recruitersPage");
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleApplicants(Applicants.slice(0, Limit));
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [Applicants, Limit]);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const NewLimit = Limit + 1;
      setLimit(NewLimit);
      setVisibleApplicants(Applicants.slice(0, NewLimit));
      setLoading(false);
    }, 600);
  };

  if (!Applicants.length && !loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Empty description={trans("notfound")} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center mb-10 items-center w-full">
      <div className="text-center mb-10 ">
        <h2 className="capitalize text-xl md:text-2xl font-semibold mb-3 ">
          {trans("title")}
        </h2>
        <p className="text-gray-400  text-sm md:text-base font-light">
          {trans("text")}
        </p>
      </div>

      <List
        loading={loading}
        itemLayout="horizontal"
        style={{ width: "80%" }}
        size="large"
        dataSource={visibleApplicants}
        renderItem={(applicant) => (
          <List.Item
            actions={[
              <Link
                href={`/recruiters/${applicant?.Name}${applicant?.lastName} `}
              >
                <Button
                  variant="solid"
                  size="large"
                  color="default"
                  type="link"
                  key="view"
                >
                  {trans("action")}
                </Button>
              </Link>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar style={{ backgroundColor: "black" }}>
                  {applicant.Name?.[0]?.toUpperCase() || "?"}
                </Avatar>
              }
              title={
                <span className="capitalize">
                  {`${applicant.Name} ${applicant.lastName}`}
                </span>
              }
              description={applicant.email || "No email provided"}
            />
          </List.Item>
        )}
      />
      {!loading && Limit < Applicants.length && (
        <div className="text-center mt-4">
          <Button
            variant="solid"
            color="default"
            size="large"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Applicants;
