import React from "react";

const InternetExplorerWindow = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="w-96 h-80 bg-[#C0C0C0] border-2 border-[#061990] border-r-[#0B0A0A] border-b-[#0B0A0A] border-t-[#DFDFDF] border-l-[#DFDFDF] rounded-sm overflow-hidden">
      <div className="h-full border-2 border-r-[#808080] border-b-[#808080] border-t-[#FFFFFF] border-l-[#FFFFFF] rounded-sm">
        <div className="bg-gradient-to-r from-[#000080] to-[#1084D0] text-white px-3 py-2 flex justify-between items-center">
          <div className="font-bold">{title}</div>
          <div className="flex gap-2">
            <div className=" w-5 h-5 border-2 border-[#061990] border-r-[#0B0A0A] border-b-[#0B0A0A] border-t-[#DFDFDF] border-l-[#DFDFDF]">
              <div className="w-4 h-4 border-2 border-r-[#808080] border-b-[#808080] border-t-[#FFFFFF] border-l-[#FFFFFF]">
                <button className="flex justify-center items-center w-3 h-3 bg-[#C0C0C0] text-black ">?</button>
              </div>
            </div>
            <div className=" w-5 h-5 border-2 border-[#061990] border-r-[#0B0A0A] border-b-[#0B0A0A] border-t-[#DFDFDF] border-l-[#DFDFDF]">
              <div className="w-4 h-4 border-2 border-r-[#808080] border-b-[#808080] border-t-[#FFFFFF] border-l-[#FFFFFF]">
                <button className="flex justify-center items-center w-3 h-3 bg-[#C0C0C0] text-black ">X</button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">{children}</div>
        <div className="absolute inset-0 shadow-md"></div>
      </div>
    </div>
  );
};

export default InternetExplorerWindow;
