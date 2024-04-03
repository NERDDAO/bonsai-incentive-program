/* eslint-disable react/no-unescaped-entities */

/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import MarcOsWindow from "../../components/macOS/newWindowMacOS";
import FarmApprove from "../../components/xStakingPoolButtonComponents/farmApprove";
import FarmBalance from "../../components/xStakingPoolButtonComponents/farmBalance";
import FarmClaim from "../../components/xStakingPoolButtonComponents/farmClaim";
import FarmStake from "../../components/xStakingPoolButtonComponents/farmStake";
import externalContracts from "../../contracts/externalContracts";
import "../../styles/mac.min.css";
import { ethers } from "ethers";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useContractRead } from "wagmi";
// required
import "winbox/dist/css/themes/modern.min.css";
// optional
import "winbox/dist/css/themes/white.min.css";
import "winbox/dist/css/winbox.min.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

const WinBox = dynamic(() => import("react-winbox"), { ssr: false });

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

const Nest: NextPage = () => {
  const ref = useRef<any>(null);

  const [theme, setTheme] = useState("mac");
  const [hide, setHide] = useState(false);

  const [position, setPosition] = useState<number | undefined>();
  const [size, setSize] = useState<number | undefined>();
  const refreshInfo = () => {
    setPosition(ref.current?.getPosition());
    setSize(ref.current?.getSize());
  };
  const [isFocus, setIsFocus] = useState(false);
  const [open, setOpen] = useState(false);

  const { address: connectedAddress } = useAccount();
  const [isApproved, setIsApproved] = useState(false);

  const spender = externalContracts[137].xStakingPool.address;
  const amount = ethers.MaxUint256.toString();
  const [balance, setBalance] = useState(0);

  const { data } = useContractRead({
    address: externalContracts[137].bonsaiTokenABI.address,
    abi: externalContracts[137].bonsaiTokenABI.abi,
    functionName: "allowance",
    args: [connectedAddress || "", spender],
  });

  const { data: dataB } = useContractRead({
    address: externalContracts[137].xStakingPool.address,
    abi: externalContracts[137].xStakingPool?.abi,
    functionName: "balanceOf",
    args: [connectedAddress || ""],
  });

  useEffect(() => {
    if (data) {
      setIsApproved(true);
      setBalance(Number(dataB));
    }
  }, [data, dataB, connectedAddress]);

  return (
    <>
      <div className="overflow-scroll">
        <div className="">
          <WinBox
            title={"Mad Farm"}
            icon="/logo.ico"
            noMin={false}
            noMax={false}
            noFull={true}
            noClose={false}
            width={200}
            height={300}
            x="70"
            y="70"
            top={0}
            right={0}
            bottom={0}
            left={0}
            hide={hide}
            className={theme ? theme : ""}
            onMaximize={refreshInfo}
            onMinimize={refreshInfo}
            onRestore={refreshInfo}
            onMove={refreshInfo}
            onResize={refreshInfo}
            onClose={() => {
              // destroying actions while `onclose` must be wrapped within `setTimeout`
              setTimeout(() => {
                setOpen(false);
                setPosition(0);
                setSize(0);
              });
            }}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          >
            <div style={{ padding: 10 }}>
              {/* <FarmApprove /> */}
              <h1 className="vt323-heavy text-gray-700">Welcome to Our Mad Bonsai Bonanza!</h1>
              <div id="video-container">
                <a href="https://www.youtube.com/watch?v=hTLOlf5My6w" target="_blank" rel="noopener noreferrer">
                  <img src="catalice.gif" alt="Animated GIF from alice in wonderland cat in a bonsai" />
                </a>
              </div>
            </div>
          </WinBox>

          <WinBox
            title={"AEIOU"}
            icon="/logo.ico"
            noMin={false}
            noMax={false}
            noFull={true}
            noClose={false}
            width={200}
            height={250}
            x="70"
            y="400"
            top={0}
            right={0}
            bottom={0}
            left={0}
            hide={hide}
            className={theme ? theme : ""}
            onMaximize={refreshInfo}
            onMinimize={refreshInfo}
            onRestore={refreshInfo}
            onMove={refreshInfo}
            onResize={refreshInfo}
            onClose={() => {
              // destroying actions while `onclose` must be wrapped within `setTimeout`
              setTimeout(() => {
                setOpen(false);
                setPosition(0);
                setSize(0);
              });
            }}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          >
            <div style={{ padding: 10 }}>
              <a href="https://www.youtube.com/watch?v=fgC-FCZ9B-w" target="_blank" rel="noopener noreferrer">
                <img src="alicebonsai.png" alt="bonsai alice and bob" className="h-1/2 py-0 my-0 cursor-pointer" />
              </a>
            </div>
          </WinBox>
        </div>
        <div>
          <WinBox
            title={"Bonanza"}
            icon="/logo.ico"
            noMin={false}
            noMax={false}
            noFull={true}
            noClose={false}
            width={850}
            height={260}
            x="350"
            y="70"
            top={0}
            right={0}
            bottom={0}
            left={0}
            hide={hide}
            className={theme ? theme : ""}
            onMaximize={refreshInfo}
            onMinimize={refreshInfo}
            onRestore={refreshInfo}
            onMove={refreshInfo}
            onResize={refreshInfo}
            onClose={() => {
              // destroying actions while `onclose` must be wrapped within `setTimeout`
              setTimeout(() => {
                setOpen(false);
                setPosition(0);
                setSize(0);
              });
            }}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          >
            <div style={{ padding: 10 }}>
              <div className="bg-[url('/bg-mushrom.png')] bg-opacity-75 p-4">
                <h1 className="vt323-heavy text-gray-700 text-center py-0 my-0">Welcome to Our Epic Bonsai Bonanza!</h1>
                <div className="flex items-start justify-around gap-4 py-0 my-0">
                  <img src="meme2.png" alt="nyancat cat" className="w-1/6 object-contain py-0 my-0" />
                  <div className="flex flex-col items-center justify-center">
                    <p className="vt323-regular text-gray-700 text-start py-0 my-0">
                      Here in the realm of tiny trees. Nope! You don’t need to join the botanical bourgeoisie to
                      experience the zen. Dive into the lush jungle of our Bonsai Farm. Get ready to rake in those
                      serene vibes and epic growth gains faster than you can say “photosynthesis!”
                    </p>
                    <p className="vt323-regular text-gray-700 text-start py-0 my-0">
                      Got beef with our forest? Remember, embracing the bonsai way: we do NOT follow, we
                      photosynthesize. 🌱✨
                    </p>
                  </div>
                  <img src="meme1.png" alt="nyancat cat" className="w-1/6 object-contain py-0 my-0" />
                </div>
              </div>
            </div>
          </WinBox>
          <WinBox
            title={"Start Farming"}
            icon="/logo.ico"
            noMin={false}
            noMax={false}
            noFull={true}
            noClose={false}
            width={850}
            height={275}
            x="350"
            y="350"
            top={0}
            right={0}
            bottom={0}
            left={0}
            hide={hide}
            className={theme ? theme : ""}
            onMaximize={refreshInfo}
            onMinimize={refreshInfo}
            onRestore={refreshInfo}
            onMove={refreshInfo}
            onResize={refreshInfo}
            onClose={() => {
              // destroying actions while `onclose` must be wrapped within `setTimeout`
              setTimeout(() => {
                setOpen(false);
                setPosition(0);
                setSize(0);
              });
            }}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          >
            <div style={{ padding: 10 }}>
              <div className="flex flex-col items-center justify-center bg-[url('/bg-pineaple.png')] bg-opacity-75 p-4">
                <h1 className="vt323-heavy text-gray-700 text-center py-0 my-0">
                  How it works? You can earn $Bonsai with our bonsai NFT, stake them, and get more $Bonsai!
                </h1>
                <div className="flex items-center justify-around">
                  <div className="flex flex-col">
                    <img src="goldcoinbonsai.png" alt="nyancat cat" className="object-contain py-0 my-0" />
                    {isApproved ? <FarmBalance /> : <></>}
                  </div>

                  {isApproved ? <FarmStake /> : <FarmApprove />}
                  <div className="flex flex-col">
                    {balance ? (
                      <FarmClaim />
                    ) : (
                      <>
                        <img src="bobbonsai.gif" alt="nyancat cat" className="object-contain py-0 my-0" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </WinBox>
        </div>
        <div>
          <WinBox
            title={"Level Up"}
            icon="/logo.ico"
            noMin={false}
            noMax={false}
            noFull={true}
            noClose={false}
            width={200}
            height={250}
            x="1275"
            y="70"
            top={0}
            right={0}
            bottom={0}
            left={0}
            hide={hide}
            className={theme ? theme : ""}
            onMaximize={refreshInfo}
            onMinimize={refreshInfo}
            onRestore={refreshInfo}
            onMove={refreshInfo}
            onResize={refreshInfo}
            onClose={() => {
              // destroying actions while `onclose` must be wrapped within `setTimeout`
              setTimeout(() => {
                setOpen(false);
                setPosition(0);
                setSize(0);
              });
            }}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          >
            <div style={{ padding: 10 }}>
              <img src="mushroombonsaijump.gif" alt="level up bonsai" className="h-1/2 py-0 my-0" />
              <p>Level:</p>
            </div>
          </WinBox>
          <WinBox
            title={"BonBro"}
            icon="/logo.ico"
            noMin={false}
            noMax={false}
            noFull={true}
            noClose={false}
            width={200}
            height={250}
            x="1275"
            y="350"
            top={0}
            right={0}
            bottom={0}
            left={0}
            hide={hide}
            className={theme ? theme : ""}
            onMaximize={refreshInfo}
            onMinimize={refreshInfo}
            onRestore={refreshInfo}
            onMove={refreshInfo}
            onResize={refreshInfo}
            onClose={() => {
              // destroying actions while `onclose` must be wrapped within `setTimeout`
              setTimeout(() => {
                setOpen(false);
                setPosition(0);
                setSize(0);
              });
            }}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          >
            <div style={{ padding: 10 }}>
              <img src="brocolibonsai.png" alt="brocoli bonsai" className="h-1/2 py-0 my-0" />
              <p>In a wild, wacky world where love takes a spin,</p>
              <p>Bonsai and broccoli, let the chaos begin!</p>
              <p>One's a tiny tree, the other's a floret,</p>
              <p>Their romance is wild, you ain't seen nothin' yet!</p>
              <p>Bonsai's all like, "Hey, broccoli, you're so fine!"</p>
              <p>Broccoli blushes, "Stop it, you're blowing my mind!"</p>
              <p>In a veggie patch rave, they groove to their tune,</p>
              <p>Bonsai whispers sweet nothings under the moon.</p>
              <p>Their love's a meme, a degen delight,</p>
              <p>In a world of norms, they shine bright.</p>
              <p>So raise your leafy arms and give a cheer,</p>
              <p>For bonsai and broccoli, love's pioneers! 🌱❤️</p>
            </div>
          </WinBox>
        </div>
      </div>
    </>
  );
};

export default Nest;
