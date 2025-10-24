"use client";
import React from "react";
import { Avatar, Button, Card } from "antd";
import { IconMap } from "antd/es/result";
import { Mail, MapIcon, Phone, Route } from "lucide-react";
const { Meta } = Card;
const InfoCard = ({ Name, LastName, email, phoneNumber, job, country }) => {
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
              {Name?.[0]?.toUpperCase() || "?"}
            </Avatar>
          }
          title={`${Name} , ${LastName}`}
          description={
            <div className="text-gray-600 flex justify-start items-start flex-col gap-2">
              <div>
                <MapIcon /> <strong>country</strong> {country || "—"}
              </div>
              <div>
                <Mail /> <strong>email</strong> {email || "—"}
              </div>
              <div>
                <Phone /> <strong>phone number</strong> {phoneNumber || "—"}
              </div>
              <div>
                <Route /> <strong>job</strong> {job || "—"}
              </div>
            </div>
          }
        />
      </Card>
    </div>
  );
};

export default InfoCard;
