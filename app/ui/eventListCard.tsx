"use client";

import { useCallback, useState, useRef } from "react";
import DetailCardComponent from "./detailCard";
import { LoadingAnimation } from "./skeletons";

type Spots = {
  spotsInfo: {
    title: string;
    content: string;
    place: string;
    link?: string;
    process: string[];
    caution: string[];
    condition: string[];
    owner: string,
    isOpen: boolean,
  }[];
};

export default function EventListComponent({ spotsInfo }: Spots) {
  const [spotInfo] = useState(spotsInfo[0]);

  return (
    <>
      <div className="flex justify-center h-screen w-full">
        <div className="absolute p-1 w-full md:w-5/12 items-center">
          {spotsInfo.map((spotInfo, index) => {
            return (
              <div key={index} className="mb-2 mx-1">
                <DetailCardComponent
                  spotInfo={spotInfo}
                  thema="white"
                  textColor="dark"
                />
              </div>
            );
          })}
        {/* スクロールで隠れる問題わからなかったので無理やり対処 */}
        <div className="absolute p-1 h-28 w-full md:w-5/12 items-center"></div>
        </div>
      </div>
    </>
  );
}
