"use client";

import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";

type Spots = {
  title: string;
  content: string;
  place?: string;
  link?: string;
  process: string[];
  caution: string[];
  condition: string[];
  owner: string,
  schedule: {open: string, close: string, day: string}[];
  isOpen: boolean,
};

type Props = {
  spotInfo: Spots;
  thema: string;
  textColor: string;
};

export default function DetailCardComponent({
  spotInfo,
  thema,
  textColor,
}: Props) {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isEventPeriod, setIsEventPeriod] = useState(false);

  useEffect(() => {
    if (spotInfo.schedule == null) {return;}
    let filteredEvent = spotInfo.schedule.filter((item) => {
      let now = new Date()
      let eventMonth = Number(item.day.split("/")[0]) - 1
      let eventDay = Number(item.day.split("/")[1])
      // イベント開始日時
      let startHour = Number(item.open.split(":")[0])
      let startMin = Number(item.open.split(":")[1])
      let startDate = new Date(now.getFullYear(), eventMonth, eventDay, startHour, startMin)
      // イベント終了日時
      let endHour = Number(item.close.split(":")[0])
      let endMin = Number(item.close.split(":")[1])
      let endDate = new Date(now.getFullYear(), eventMonth, eventDay, endHour, endMin)

      return startDate <= now && now <= endDate
    })
    setIsEventPeriod(filteredEvent.length > 0);
  }, [spotInfo.schedule])

  return (
    <Card border="light" bg={thema} text={textColor} className="w-full drop-shadow">
      <Card.Header className="text-sm font-bold px-2 py-2.5 text-center">
        {spotInfo.title}
      </Card.Header>
      <Card.Body className="p-1">
      {isEventPeriod && (
              <>
                <span className="mx-3 mb-3 mt-2">
                  <span
                    className={[
                      "whitespace-nowrap",
                      "rounded",
                      "bg-red-500",
                      "px-2",
                      "py-1",
                      "text-white",
                    ].join(" ")}
                  >
                    イベント開催中
                  </span>
                </span>
              </>
        )}
        <p className="text-sm mx-3 mb-3 mt-2">{spotInfo.content}</p>
        <p className="text-xs text-end mb-1 mr-2">{spotInfo.owner} {spotInfo.place && (<>({spotInfo.place})</>)}</p>

        {spotInfo.schedule != null && (
          <>
            <div className="">
              <p className="text-sm mx-3 mb-3 mt-2">
                イベント開催時刻
              </p>
              {spotInfo.schedule.map((item, index) => (
                <li key={index} className="text-xs">
                  {item.day} {item.open}-{item.close}
                </li>
              ))}
            </div>
          </>
        )}

        {isExpanded && (
          <>
            <hr />
            <p className="text-xs mb-0 ml-3 font-bold">【手順】</p>
            <div className="mb-2 ml-3">
              {spotInfo.process.map((process, index) => (
                <p key={index} className="text-xs mb-0 ml-3">
                  {`${index + 1}. ${process}`}
                </p>))}
            </div>
            <p className="text-xs mb-0 ml-3 font-bold">【付与条件】</p>
            <div className="mb-2 ml-3">
              {spotInfo.condition.map((condition, index) => (
                <p key={index} className="text-xs mb-0 ml-3">
                  {condition}
                </p>
              ))}
            </div>
          </>
        )}

        <footer className="text-center text-xs underline mt-3 mb-2 text-gray-400">
          <button
            className="text-xs underline"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "詳細を折りたたむ" : "詳細を表示"}
          </button>
        </footer>
        {spotInfo.link && (
          <div className="flex justify-center items-center">
            <Link href={spotInfo.link || "/"}>
              <button className="text-sm bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg m-2">
                イベントに参加
              </button>
            </Link>
          </div>
        )}

      </Card.Body>
    </Card>
  );
}
