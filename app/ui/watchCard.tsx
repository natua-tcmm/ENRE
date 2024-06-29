"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import CongestionComponent from "./congestion";

export default function WatchCardComponent() {

  const [isExpanded, setIsExpanded] = useState(false);
  const placeIdList1 = ["Miya2", "Lounge1", "Musu2", "Hall1", "Ichi1"];
  const placeIdList2 = ["Libre2", "Musu2", "Fuji1", "Hall2", "Yasai"];


  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl px-0.5 py-2">
      <div className="grid grid-cols-1 gap-2 p-3">
        <div className="justify-items-center items-center text-center mb-1 text-md text-green-700 font-semibold">
          学内ウォッチ
        </div>
        <div className="justify-items-center items-center text-center mb-1 text-sm text-green-700 font-semibold">
          食堂の混雑度
        </div>
        <div className="grid grid-cols-2 justify-items-center items-center justify-self-center w-10/12">
          {placeIdList1.map((placeId, index) => {
            return (
              <CongestionComponent key={index} docId={placeId} />
            );
          })}

          <div className="col-start-1 col-end-3 text-sm px-1 mt-0 mb-1 justify-self-center font-bold text-red-500">
            近くの
            <Link href="/eventlist" className="Line text-red-500">
              イベント
            </Link>
            に参加しませんか？
          </div>
          {/* TODO 1 ここもスケルトン化しなきゃなのかなぁ */}
          {isExpanded && placeIdList2.map((placeId, index) => {
            return (
              <CongestionComponent key={index} docId={placeId} />
            );
          })}

        </div>
        <button
          className="text-xs underline mb-4 text-gray-400"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Λ　表示数を減らす　Λ" : "V　混雑度をもっと見る　V"}
        </button>

        <div className="justify-items-center items-center text-center mb-1 text-sm text-green-700 font-semibold">
          バスプールの混雑度
        </div>
        <div className="grid grid-cols-1 justify-items-center items-center justify-self-center w-10/12">
          <CongestionComponent key={1} docId={"BusWeb1"} />
        </div>
        <div className="justify-self-center items-center text-center mt-2">
          <Link href="https://jweb.kyoto-su.ac.jp/webcam/" className="text-sm text-white bg-green-700 py-2 px-4 rounded-md font-bold no-underline"          >
            バスプールをアイキャッチ
          </Link>
        </div>
      </div>
    </div >
  );
}
