/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Debug Contracts",
  description: "Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way",
});

const Debug: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-20 bg-transparent">
        <div className="text-center mt-8 p-10 bg-transparent">
          {/* <img src="easter-frame.png" alt="Description of the image" className="w-full h-auto bg-transparent" /> */}
          <img src="tori-frame.png" alt="Description of the image" className="w-full h-auto bg-transparent" />
        </div>
      </div>
    </>
  );
};

export default Debug;
