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
      <div className="flex items-center flex-grow flex-col pt-20 pb-20">
        {/* <div className="px-5">
          <h1 className="text-center mt-10">
            <span className="block text-8xl mb-2">盆栽農園</span>
            <span className="block text-4xl font-bold">利用可能</span>
          </h1>
        </div> */}
        <div className="flex flex-wrap items-center justify-around bg-transparent">
          <div className=" flex flex-col items center m-20">
            <MarcOsWindow title="My Window">
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
