import CongestionListComponent from "./congestionList";
import { fetchPlace } from "@/lib/dbActions";

type PlaceList = {
  placeInfo: {
      id: string,
      isOpen?: boolean,
      closeTime?: number,
      openTime?: number,
      name: string,
      threshold: Array<number>,
      congestion: number,
      updatedAt?: any;
      center?: any;
  }[]
}

export default async function WatchCardComponent() {

  const placeList:PlaceList = await fetchPlace();

  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl px-0.5 py-2">
      <CongestionListComponent placeList={placeList}/>
    </div >
  );

}
