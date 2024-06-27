import { fetchCheckinProgramIds } from "@/lib/dbActions";
import Link from "next/link";

export default async function CheckinEventsCardComponent() {
  const checkinProgramIds = await fetchCheckinProgramIds();
  const isContentExist = checkinProgramIds.length !== 0 ? true : false;

  return (
    <div>
      {isContentExist && (
        <div className="w-full bg-red-600 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex justify-center text-center">
            <div className="p-3">
              <div className="uppercase tracking-wide text-sm text-gray-50 font-semibold">
                参加中のイベントがあります！
                <Link href="/detail/checkinevents">
                  <button className="ml-2 px-3 py-1 text-red-600 font-semibold bg-white rounded inline-block">
                    詳細
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
