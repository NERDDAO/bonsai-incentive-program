/* eslint-disable @next/next/no-img-element */
import MarcOsWindow from "../../components/macOS/newWindowMacOS";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Debug Contracts",
  description: "Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way",
});

const Nest: NextPage = () => {
  return (
    <>
      <div className="relative pt-20 pb-20">
        <div className="absolute flex flex-wrap items-center justify-around bg-transparent ml-20">
          <div className=" flex flex-col items center m-20">
            <MarcOsWindow title="My Window" initPosition={{ x: 0, y: 35 }} initSize={{ width: 200, height: 300 }}>
              <p className="vt323-regular text-gray-700">This is the content of the Internet Explorer window.</p>
              <img src="nyancat-surf.png" alt="nyancat cat" className="h-1/2 py-0 my-0" />
            </MarcOsWindow>
          </div>
        </div>
        <div className="absolute flex flex-wrap items-center justify-around bg-transparent ml-20">
          <div className=" flex flex-col items center m-20">
            <MarcOsWindow title="My Window" initPosition={{ x: 0, y: 370 }} initSize={{ width: 200, height: 300 }}>
              <p className="vt323-regular text-gray-700">This is the content of the Internet Explorer window.</p>
              <img src="nyancat-surf.png" alt="nyancat cat" className="h-1/2 py-0 my-0" />
            </MarcOsWindow>
          </div>
        </div>
        <div className=" absolute flex flex-wrap items-center justify-around bg-transparent">
          <div className=" flex flex-col items center m-20">
            <MarcOsWindow title="My Window" initPosition={{ x: 340, y: 35 }} initSize={{ width: 800, height: 200 }}>
              <p className="vt323-regular text-gray-700">This is the content of the Internet Explorer window.</p>
              <img src="nyancat-surf.png" alt="nyancat cat" className="h-1/2 py-0 my-0" />
            </MarcOsWindow>
          </div>
        </div>
        <div className="absolute flex flex-wrap items-center justify-around bg-transparent">
          <div className=" flex flex-col items center m-20">
            <MarcOsWindow title="My Window" initPosition={{ x: 340, y: 270 }} initSize={{ width: 800, height: 400 }}>
              <p className="vt323-regular text-gray-700">This is the content of the Internet Explorer window.</p>
              <img src="nyancat-surf.png" alt="nyancat cat" className="h-1/2 py-0 my-0" />
            </MarcOsWindow>
          </div>
        </div>
        <div className="absolute flex flex-wrap items-center justify-around bg-transparent mr-20">
          <div className=" flex flex-col items center m-20">
            <MarcOsWindow title="My Window" initPosition={{ x: 1190, y: 35 }} initSize={{ width: 200, height: 150 }}>
              <p className="vt323-regular text-gray-700">This is the content of the Internet Explorer window.</p>
              <img src="nyancat-surf.png" alt="nyancat cat" className="h-1/2 py-0 my-0" />
            </MarcOsWindow>
          </div>
        </div>
        <div className="absolute flex flex-wrap items-center justify-around bg-transparent mr-20 mb-20">
          <div className=" flex flex-col items center m-20">
            <MarcOsWindow title="My Window" initPosition={{ x: 1190, y: 200 }} initSize={{ width: 200, height: 600 }}>
              <p className="vt323-regular text-gray-700">This is the content of the Internet Explorer window.</p>
              <img src="nyancat-surf.png" alt="nyancat cat" className="h-1/2 py-0 my-0" />
            </MarcOsWindow>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nest;
