"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchPlace2 } from "@/lib/dbActions";

type Props = {
    docId: string,
}


export default function CongestionComponent({docId}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = useRef(false);
  const [name, setName] = useState("");
  const [congestion, setCongestion] = useState<number>();

  useEffect(() => {
    if (ref.current) return;
    (async () => {
      const placeList = await fetchPlace2(docId);
      setName(placeList.placeName);
      setCongestion(placeList.placeCongestion);
    })();

    return () => {
      ref.current = true;
    };
  }, [router, docId]);


  return (
    <main className="col-start-1 col-end-3 text-sm px-1 mt-0 mb-1 justify-self-center font-bold text-red-500">
        {name}: {congestion}
    </main>
  );
}
