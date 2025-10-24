"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { List, Avatar, Button, Skeleton, Empty } from "antd";
import Link from "next/link";

const Applicants = () => {
  const Applicants = useSelector((state) => state);
  const [visibleApplicants, setVisibleApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Limit, setLimit] = useState(5);

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
        <Empty description="No applicants found" />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center mb-10 items-center w-full">
      <h2 className="text-2xl font-semibold mb-4  ">Applicants</h2>

      <List
        loading={loading}
        itemLayout="horizontal"
        style={{ width: "90%" }}
        dataSource={visibleApplicants}
        renderItem={(applicant) => (
          <List.Item
            actions={[
              <Link href={`/recruiters/${applicant?.Name || "no one "}`}>
                <Button type="link" key="view">
                  View
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
