/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import dynamic from 'next/dynamic'; 

import FarmApprove from "../../components/xStakingPoolButtonComponents/farmApprove";
import FarmBalance from "../../components/xStakingPoolButtonComponents/farmBalance";
import FarmClaim from "../../components/xStakingPoolButtonComponents/farmClaim";
import FarmStake from "../../components/xStakingPoolButtonComponents/farmStake";
import "../../styles/mac.min.css";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";


// required
import "winbox/dist/css/themes/modern.min.css";
// optional
import "winbox/dist/css/themes/white.min.css";
import "winbox/dist/css/winbox.min.css";

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */
const WinBox = dynamic(() => import("react-winbox"), { ssr: false });


const Dashboard: NextPage = () => {

  const { address: connectedAddress } = useAccount();

  const ref = useRef<any>(null);

  const [title, setTitle] = useState("Bonsai Farm");
  const [top, setTop] = useState(50);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [bottom, setBottom] = useState(50);
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

  return (
    <>
      <div className="pt-20 pb-20">
        <div className="flex flex-col items-center justify-center bg-transparent mx-20">
          <h1 className="text-8xl">Dashboard</h1>
          <WinBox
            title={title}
            icon="/logo.ico"
            noMin={false}
            noMax={false}
            noFull={true}
            noClose={false}
            width={500}
            height={300}
            x="center"
            y="center"
            top={top}
            right={right}
            bottom={bottom}
            left={left}
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
              <FarmBalance />
              <FarmClaim /> 
              {/* <FarmStake /> */}
            </div>
          </WinBox>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
