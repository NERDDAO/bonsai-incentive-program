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

import InternetExplorerWindow from "../components/windowsXP/newWindowXP"

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */

const Home: NextPage = () => {
  const router = useRouter();
  const [isConnected, setIsConnected] = useState(false);
  const { address: connectedAddress } = useAccount();

  useEffect(() => {
    // Check if connectedAddress exists and is not null
    if (connectedAddress) {
      setIsConnected(true);
      router.push("/nest");
      // Push to the debug page when connectedAddress changes
    }
  }, [connectedAddress]);

  return (
    <>
      <div className="backdrop-blur-md">
        <div className="flex items-center flex-grow flex-col pt-20">
          <div className="px-5">
            <h1 className="text-center">
              <span className="block text-8xl mb-2 kode-mono-retro">盆栽農園</span>
              <span className="block text-4xl font-bold kode-mono-retro">へようこそ</span>
            </h1>
            <p className="text-center text-lg kode-mono-retro">Mint your Lucky Nest and start earning $Bonsai</p>
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
