"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchPlace2 } from "@/lib/dbActions";

type Props = {
  key: number,
  docId: string,
}


export default function CongestionComponent({ key, docId }: Props) {
  const router = useRouter();
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
