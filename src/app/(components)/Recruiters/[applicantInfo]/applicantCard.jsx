"use client";
import React from "react";
import { Avatar, Button, Card } from "antd";
const { Meta } = Card;
const InfoCard = (applicant) => {
  return (
    <div>
      <Card
        size="large"
        className="shadow-2xl"
        style={{ width: 300 }}
        cover={<div className="w-full h-[50px] bg-blue-950" />}
        actions={[
          <Button variant="solid" color="default">
            hire
          </Button>,
        ]}
      >
        <Meta
          avatar={
            <Avatar style={{ backgroundColor: "black" }}>
              {applicant.Name?.[0]?.toUpperCase() || "?"}
            </Avatar>
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
  );
};

export default InfoCard;
