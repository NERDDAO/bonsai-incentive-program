/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */

const Home: NextPage = () => {
  //const router = useRouter();
  const [isConnected, setIsConnected] = useState(false);
  const { address: connectedAddress } = useAccount();

  useEffect(() => {
    // Check if connectedAddress exists and is not null
    if (connectedAddress) {
      setIsConnected(true);
      //router.push("/debug");
      // Push to the debug page when connectedAddress changes
    }
  }, [connectedAddress]);

  return (
    <>
      <div className="backdrop-blur-md">
        <div className="flex items-center flex-col pt-20 bg-[url('/bonsai-landscape-2.png')] bg-cover bg-center">
          <div className="px-5">
            <h1 className="text-center">
              <span className="block text-8xl mb-2">盆栽農園</span>
              <span className="block text-4xl font-bold">へようこそ</span>
            </h1>
            <p className="text-center text-lg">Mint your Lucky Nest and start earning $Bonsai</p>
          </div>
          <div>
            <img src="logo-bonsai-farm.png" alt="Description of the image" className="w-full h-auto" />
          </div>
          <div className="text-center text-lg mb-5">
            <ConnectButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
