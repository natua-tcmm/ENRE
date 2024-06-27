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

  return (
    <Card border="light" bg={thema} text={textColor} className="w-full drop-shadow">
      <Card.Header className="text-sm font-bold px-2 py-2.5 text-center">
        {spotInfo.title}
      </Card.Header>
      <Card.Body className="p-1">
        <p className="text-sm mx-3 mb-3 mt-2">{spotInfo.content}</p>
        <p className="text-xs text-end mb-1 mr-2">{spotInfo.owner} {spotInfo.place && (<>({spotInfo.place})</>)}</p>

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
