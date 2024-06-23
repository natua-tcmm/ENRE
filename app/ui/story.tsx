import Link from "next/link";
import Image from "next/image";
import packageJson from "../../package.json";

export default function StoryComponent() {
  const version = packageJson.version;
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-3">
      <h2 className="text-xl font-bold mt-5">Enreのストーリー</h2>
      <div className="flex mt-4">
        <div className="w-1/2 flex justify-center items-center">
          <Image src="/gama1.png" width={200} height={200} alt="charactor"/>
        </div>
        <div className="w-1/2">
          <p className="text-lg text-center">
            Enreポイントで<br/>ガマちゃんを成長させよう！
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold text-center mt-5">ガマガエルのガマちゃん</h2>
      <h2 className="text-xl font-bold text-center mt-5">実は神様”タニグク”見習い...!?</h2>
      <p className="text-lg text-center mt-5">
        このストーリーは神様見習いのガマちゃんが新たな挑戦や出会い、経験を経て”タニグク”へと成長する物語である…！
      </p>
      <div className="flex">
        <div className="w-1/2">
          <p className="text-lg text-center">
            キャンパスには<br/>
            ・美しい自然環境<br/>
            ・様々なイベント<br/>
            ・新しい出会い<br/>
            が満載！
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image src="/gamagroup1.png" width={200} height={200} alt="charactor"/>
        </div>
      </div>
      <h2 className="text-xl font-bold text-center mt-5">ガマちゃんと共にキャンパスの魅力を探して、ガマちゃんの修行を手助けしよう！</h2>
      <h2 className="text-xl font-bold text-center mt-5">タニグクとは？</h2>
      <p className="text-lg text-center">
        多邇具久（タニグク）とは、古事記などで描かれたヒキガエルの神様であり、国を知り尽くしている存在とされている。<br/>
        そんな多邇具久（タニグク）は京都産業大学学歌にも登場する大学ともゆかりの深い存在なのだ！
      </p>
      <p className="text-lg text-center mt-2">
        Enreでもキャンパスを探索することで、ガマちゃんを大学の隅から隅まで知り尽くしたタニグクに成長させよう！
      </p>
      <Link href={"/"} className="no-underline text-white mt-4">
        <button className="text-lg bg-green-700 p-2 rounded-md">
          ホームに戻る
        </button>
      </Link>
    </main>
  );
}
