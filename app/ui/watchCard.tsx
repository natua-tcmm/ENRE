"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function WatchCardComponent() {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl px-0.5 py-2">
      <div className="grid grid-cols-1 gap-2 p-3">
        <div className="justify-items-center items-center text-center mb-1 text-md text-green-700 font-semibold">
          学内ウォッチ(食堂)
        </div>
        {/* TODO ボーダー色変える 混雑度表示 グリッド表示と仲良く */}
        <div className="grid grid-cols-2 justify-items-center items-center justify-self-center w-10/12">

          <div className="col-start-1 col-end-2 text-sm pl-2 py-1 mt-0 mb-1 border-l-4 border-green-600 justify-self-start">すき家</div>
          <div className="col-start-2 col-end-3 text-sm py-1 mt-0 mb-1 justify-self-end">混雑度</div>


          <div className="col-start-1 col-end-3 text-sm px-1 mt-0 mb-1 justify-self-center font-bold text-red-500">
            近くの
            <Link href="/eventlist" className="Line text-red-500">
              イベント
            </Link>
            に参加しませんか？
          </div>
          {isExpanded && (
            <>
              <div className="col-start-1 col-end-2 text-sm pl-2 py-1 mt-0 mb-1 border-l-4 border-green-600 justify-self-start">すき家</div>
              <div className="col-start-2 col-end-3 text-sm py-1 mt-0 mb-1 justify-self-end">混雑度</div>
              <div className="col-start-1 col-end-2 text-sm pl-2 py-1 mt-0 mb-1 border-l-4 border-green-600 justify-self-start">すき家</div>
              <div className="col-start-2 col-end-3 text-sm py-1 mt-0 mb-1 justify-self-end">混雑度</div>
            </>
          )}

        </div>
        <button
          className="text-xs underline mb-4 text-gray-400"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Λ　表示数を減らす　Λ" : "V　混雑度をもっと見る　V"}
        </button>

        <div className="justify-items-center items-center text-center mb-1 text-md text-green-700 font-semibold">
          学内ウォッチ(バスプール)
        </div>
        <div className="grid grid-cols-1 justify-items-center items-center justify-self-center w-10/12">
          <div className="col-start-0 col-end-1 text-sm pl-2 py-1 mt-0 mb-1 border-l-4 border-green-600">京都バス</div>
          <div className="col-start-1 col-end-2 text-sm py-1 mt-0 mb-1 justify-self-end">混雑度</div>
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
