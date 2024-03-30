import React, { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Site footer with DropUp content integrated
 */
export const Footer = () => {
  const dropupContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropupContentRef.current && !dropupContentRef.current.contains(event.target as Node)) {
        dropupContentRef.current.classList.remove("dropup-content");
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleUp = () => {
    dropupContentRef.current?.classList.toggle("dropup-show");
  };

  return (
    <div className="fixed flex flex-shrink-0 justify-between bottom-0 bg-base-100 min-h-0  min-w-full z-20 bg-[#346BAB] shadow-md shadow-secondary py-0 px-0 border-2 border-[#377FE3] rounded-lg">
      <div className="flex w-full py-0 px-0 m-0 bg-[#245DDA]">
        <div onClick={toggleUp} className="p-0">
          <Image src="/winxpstart.png" width="110" height="50" alt="microsoft icon" className="m-0" />
        </div>
        {/* Menu component to be displayed */}
      </div>
    </div>
  );
};

export default Footer;
