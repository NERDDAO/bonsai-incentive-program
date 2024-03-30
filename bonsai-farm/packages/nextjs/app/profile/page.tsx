/* eslint-disable @next/next/no-img-element */
import MarcOsWindow from "../../components/macOS/newWindowMacOS";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Debug Contracts",
  description: "Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way",
});

const Debug: NextPage = () => {
  const screenWidth = window.innerWidth;
  const windowWidth = screenWidth - 50;

  return (
    <>
      <div className="relative pt-20 pb-20">
        <div className="absolute flex flex-wrap items-center justify-center bg-transparent ml-20">
          <div className=" flex flex-col items-center m-20">
            <MarcOsWindow
              title="My Window"
              initPosition={{ x: 0, y: 35 }}
              initSize={{ width: windowWidth, height: 300 }}
            >
              <p className="vt323-regular text-gray-700">This is the content of the Internet Explorer window.</p>
              <img src="nyancat-surf.png" alt="nyancat cat" className="h-1/2 py-0 my-0" />
            </MarcOsWindow>
          </div>
        </div>
      </div>
    </>
  );
};

export default Debug;
