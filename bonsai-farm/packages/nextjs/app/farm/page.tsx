/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Debug Contracts",
  description: "Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way",
});

const Farm: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-grow flex-col pt-20 pb-20">
        <div className="px-5">
          <h1 className="text-center mt-10">
            <span className="block text-8xl mb-2">盆栽農園</span>
            <span className="block text-4xl font-bold">利用可能</span>
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-around bg-transparent">
          {/* <img src="easter-frame.png" alt="Description of the image" className="w-full h-auto bg-transparent" /> */}
          <div className=" flex flex-col items center mx-20 my-10">
            <div>
              <img src="tori-frame.png" alt="Description of the image" className="w-full h-auto bg-transparent" />
            </div>
            <button className="bg-black p-5 mt-2"> Check Farm</button>
          </div>
          <div className=" flex flex-col items center m-20">
            <div>
              <img src="tori-frame.png" alt="Description of the image" className="w-full h-auto bg-transparent" />
            </div>
            <button className="bg-black p-5 mt-2"> Check Farm</button>
          </div>
          <div className=" flex flex-col items center m-20">
            <div className="relative">
              <img src="tori-frame.png" alt="Description of the image" className="w-full h-auto bg-transparent" />
              <p className="absolute "></p>
            </div>
            <button className="bg-black p-5 mt-2"> Check Farm</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Farm;
