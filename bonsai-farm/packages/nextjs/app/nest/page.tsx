/* eslint-disable @next/next/no-img-element */
import MarcOsWindow from "../../components/macOS/newWindowMacOS";
import ApproveButton from "../../components/mint/ApproveButton";
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
              <h1 className="vt323-heavy text-gray-700">Welcome to Our Epic Bonsai Bonanza!</h1>
              <img src="nyancat-surf.png" alt="nyancat cat" className="h-1/2 py-0 my-0" />
            </MarcOsWindow>
          </div>
        </div>
        <div className="absolute flex flex-wrap items-center justify-around bg-transparent ml-20">
          <div className=" flex flex-col items center m-20">
            <a href="https://www.youtube.com/watch?v=o1zj-q4JPGA" target="_blank" rel="noopener noreferrer">
              <MarcOsWindow title="Salchipapa" initPosition={{ x: 0, y: 370 }} initSize={{ width: 200, height: 200 }}>
                <img src="meme-salchipapa.png" alt="salchipapa plate" className="h-1/2 py-0 my-0 cursor-pointer" />
              </MarcOsWindow>
            </a>
          </div>
        </div>
        <div className="absolute flex flex-wrap items-center justify-around bg-transparent">
          <div className=" flex flex-col items-center ">
            <MarcOsWindow title="Bonanza" initPosition={{ x: 340, y: 0 }} initSize={{ width: 800, height: 250 }}>
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
            </MarcOsWindow>
          </div>
        </div>
        <div className="absolute flex flex-wrap items-center justify-around bg-transparent">
          <div className=" flex flex-col items center m-20">
            <MarcOsWindow
              title="Farm with Bonsai"
              initPosition={{ x: 340, y: 270 }}
              initSize={{ width: 800, height: 1800 }}
            >
              <div className="bg-[url('/bg-pineaple.png')] bg-opacity-75 p-4">
                <h1 className="vt323-heavy text-gray-700 text-center py-0 my-0">Welcome to Our Epic Bonsai Bonanza!</h1>
                <div className="flex w-fit h-fit items-start justify-around gap-4 py-0 my-0 bg-none z-50">
                  <ApproveButton contractName={"Token"} spenderAddress={"0x0A65EB7B31Ad4b0b9fd73cC0e2bb1788eBb393b8"} />
                </div>
              </div>
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
