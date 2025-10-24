"use client";
import React from "react";
import { Avatar, Button, Card } from "antd";
import { IconMap } from "antd/es/result";
import { Mail, MapIcon, Phone, Route } from "lucide-react";
const { Meta } = Card;
import { useTranslations } from "next-intl";
const InfoCard = ({ applicant }) => {
  const trans = useTranslations("InformationPage");
  const { Name, lastName, email, number, job, country } = applicant ?? null;
  return (
    <div>
      <Card
        size="large"
        className="shadow-2xl"
        style={{ width: 400 }}
        cover={<div className="w-full h-[50px] bg-gray-100" />}
        actions={[
          <Button variant="solid" size="large" color="default">
            <span className="capitalize">{trans("hire")}</span>
          </Button>,
        ]}
      >
        <Meta
          avatar={
            <Avatar style={{ backgroundColor: "black" }}>
              {Name?.[0]?.toUpperCase() || "?"}
            </Avatar>
          }
          title={`${Name}  ${lastName}`}
          description={
            <ul className="text-gray-600 text-[17px] mt-10 flex justify-start items-start flex-col gap-2">
              <li className="cardDivs">
                <MapIcon /> <strong>{trans("country")}</strong> {country || "—"}
              </li>
              <li className="cardDivs">
                <Mail /> <strong>email</strong> {email || "—"}
              </li>
              <li className="cardDivs">
                <Phone /> <strong>{trans("number")}</strong> {number || "—"}
              </li>
              <li className="cardDivs">
                <Route /> <strong>{trans("job")}</strong> {job || "—"}
              </li>
            </ul>
          }
        />
      </Card>
    </div>
  );
};

export default InfoCard;
