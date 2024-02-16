import Link from "next/link";
import {
  BiAbacus,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import LottieComponent from "./components/LottieAnimation";
import DownloadButton from "./components/downloadButton";
export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center">
      <div className="relative mt-4 flex flex-row gap-3">
        <Link target="_blank" href="https://www.facebook.com/yusifaliyevpro">
          <BiLogoFacebook className=" p-[5px] text-5xl rounded-[50%] border-solid bg-graybg border-4 cursor-pointer border-[rgb(2,3,7,0.4)] text-white hover:text-graybg hover:bg-white" />
        </Link>
        <Link target="_blank" href="https://twitter.com/yusifaliyevpro">
          <BiLogoTwitter className=" p-1 text-5xl rounded-[50%] border-solid bg-graybg border-4 cursor-pointer border-[rgb(2,3,7,0.4)] text-white hover:text-graybg hover:bg-white" />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/yusifaliyevpro/">
          <BiLogoInstagram className=" p-1 text-5xl rounded-[50%] border-solid bg-graybg border-4 cursor-pointer border-[rgb(2,3,7,0.4)] text-white hover:text-graybg hover:bg-white" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/yusifaliyevpro/"
        >
          <BiLogoLinkedin className=" p-1 text-5xl rounded-[50%] border-solid bg-graybg border-4 cursor-pointer border-[rgb(2,3,7,0.4)] text-white hover:text-graybg hover:bg-white" />
        </Link>
      </div>
      <div className="fixed bottom-56 sm:bottom-28 z-40">
        <h1 className="relative text-white font-bold text-2xl">
          Hi, I am YusifAliyevPro
        </h1>
        <DownloadButton />
      </div>
      <div className="relative w-auto mt-28 sm:mt-0 h-[562px] sm:w-[1000px]">
        <LottieComponent animationPath="/comingsoon1.json" />
      </div>
    </main>
  );
}
