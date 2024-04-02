/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import MarcOsWindow from "../../components/macOS/newWindowMacOS";
import ApproveButton from "../../components/mint/ApproveButton";
import FarmApprove from "../../components/xStakingPoolButtonComponents/farmApprove";
import "../../styles/mac.min.css";
import type { NextPage } from "next";
import WinBox from "react-winbox";
// required
import "winbox/dist/css/themes/modern.min.css";
// optional
import "winbox/dist/css/themes/white.min.css";
import "winbox/dist/css/winbox.min.css";

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

const Nest: NextPage = () => {
  const ref = useRef<any>(null);

  const [theme, setTheme] = useState("mac");
  const [hide, setHide] = useState(false);

  const [position, setPosition] = useState<number | undefined>(undefined);
  const [size, setSize] = useState<number | undefined>(undefined);
  const refreshInfo = () => {
    setPosition(ref.current?.getPosition());
    setSize(ref.current?.getSize());
  };
  const [isFocus, setIsFocus] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-scroll">
        <div className="">
          <WinBox
            title={"Bonsai Farm"}
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
              <h1 className="vt323-heavy text-gray-700">Welcome to Our Epic Bonsai Bonanza!</h1>
              <img src="nyancat-surf.png" alt="nyancat cat" className="h-1/2 py-0 my-0" />
              {/* <FarmStake /> */}
            </div>
          </WinBox>

          <WinBox
            title={"Salchipapa"}
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
              <a href="https://www.youtube.com/watch?v=o1zj-q4JPGA" target="_blank" rel="noopener noreferrer">
                <img src="meme-salchipapa.png" alt="salchipapa plate" className="h-1/2 py-0 my-0 cursor-pointer" />
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
                      Got beef with our forest? Remember, embracing the bonsai way: we don't follow, we photosynthesize.
                      🌱✨
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
              <div className="bg-[url('/bg-pineaple.png')] bg-opacity-75 p-4">
                <h1 className="vt323-heavy text-gray-700 text-center py-0 my-0">Welcome to Our Epic Bonsai Bonanza!</h1>
                <div className="flex w-fit h-fit items-start justify-around gap-4 py-0 my-0 bg-none z-50">
                  <FarmApprove />
                </div>
              </div>
            </div>
          </WinBox>
        </div>
        <div>
          <WinBox
            title={"Salchipapa"}
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
              <p className="vt323-regular text-gray-700">This is the content of the Internet Explorer window.</p>
              <img src="nyancat-surf.png" alt="nyancat cat" className="h-1/2 py-0 my-0" />
            </div>
          </WinBox>
          <WinBox
            title={"Salchipapa"}
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
              <p className="vt323-regular text-gray-700">This is the content of the Internet Explorer window.</p>
              <img src="nyancat-surf.png" alt="nyancat cat" className="h-1/2 py-0 my-0" />
            </div>
          </WinBox>
        </div>
      </div>
    </>
  );
};

export default Nest;
