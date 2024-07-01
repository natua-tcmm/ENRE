"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchPlace2 } from "@/lib/dbActions";

type Props = {
  name:string, congestion:number, threshold:Array<number>
}

export default function CongestionComponent({name, congestion, threshold}:Props) {

  // const router = useRouter();
  // const ref = useRef(false);

  // 場所情報
  // const placeName =
  //   docId=="BusWeb1" ? "バスプール(京都バス側)":
  //   docId=="Lounge1" ? "天地館1Fラウンジ":
  //   docId=="Hall1"   ? "サン/スガキヤ":
  //   docId=="Ichi1"   ? "壱馬力":
  //   docId=="Libre2"  ? "リブレ":
  //   docId=="Fuji1"   ? "ふじカツ":
  //   docId=="Hall2"   ? "すき家":
  //   docId=="Musu2"   ? "むすびキッチン":
  //   docId=="Miya2"   ? "MIYAKO製麺":
  //   docId=="Yasai"   ? "やさい食堂": "取得に失敗しました";

  // setName(placeName);

  // useEffect(() => {
  //   if (ref.current) return;
  //   (async () => {
  //     const placeList = await fetchPlace2(docId);
  //     setName(placeList.placeName);
  //     setCongestion(placeList.placeCongestion);
  //     setThreshold(placeList.placeThreshold);
  //   })();

  //   return () => {
  //     ref.current = true;
  //   };
  // }, [router, docId]);

  const congestionLevel =
    threshold && congestion < threshold[1] ? 1 :
    threshold && threshold[1] <= congestion && threshold[2] < congestion ? 2 :
    threshold && threshold[2] <= congestion && threshold[3] < congestion ? 3 :
    threshold && threshold[3] <= congestion ? 4 : 1;

  // const congestionLevelColor = ["blue-500","green-500","yellow-500","red-500"][congestionLevel-1];
  const congestionLevelColorCode = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"][congestionLevel - 1];
  const congestionLevelMarker = "■".repeat(congestionLevel) + "□".repeat(5 - congestionLevel);

  return (
    <>
      <div className="col-start-1 col-end-2 text-sm pl-2 py-1 mt-0 mb-1 border-l-4 border-solid justify-self-start" style={{ borderColor: congestionLevelColorCode }}>{name}</div>
      <div className="col-start-2 col-end-3 text-sm py-1 mt-0 mb-1 justify-self-end" style={{ color: congestionLevelColorCode }}>{congestionLevelMarker}</div>
    </>
  );
}
