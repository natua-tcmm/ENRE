"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchPlace2 } from "@/lib/dbActions";

type Props = {
  docId: string,
}


export default function CongestionComponent({ docId }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = useRef(false);
  const [name, setName] = useState("");
  const [congestion, setCongestion] = useState<number>(0);
  const [threshold, setThreshold] = useState<Array<number>>();

  useEffect(() => {
    if (ref.current) return;
    (async () => {
      const placeList = await fetchPlace2(docId);
      setName(placeList.placeName);
      setCongestion(placeList.placeCongestion);
      setThreshold(placeList.placeThreshold);
    })();

    return () => {
      ref.current = true;
    };
  }, [router, docId]);

  const congestionLevel =
    threshold && congestion < threshold[1] ? 1 :
    threshold && threshold[1] <= congestion && threshold[2] < congestion ? 2 :
    threshold && threshold[2] <= congestion && threshold[3] < congestion ? 3 :
    threshold && threshold[3] <= congestion ? 4 : 1;


  const congestionLevelColor = ["blue-600","green-600","yellow-600","red-600"][congestionLevel-1];
  // TODO 1 1のときボーダー色変わらない問題
  const borderClass = "col-start-1 col-end-2 text-sm pl-2 py-1 mt-0 mb-1 border-l-4 justify-self-start border-"+congestionLevelColor;
  const textClass =  "col-start-2 col-end-3 text-sm py-1 mt-0 mb-1 justify-self-end text-"+congestionLevelColor;
  const congestionLevelMarker = "■".repeat(congestionLevel)+"□".repeat(5-congestionLevel);

  return (
    <>
      <div className={borderClass}>{name}</div>
      <div className={textClass}>{congestionLevelMarker}</div>
    </>
  );
}
