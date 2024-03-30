import React, { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Site footer with DropUp content integrated
 */
export const FooterMacOS = () => {
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
    <div>
      <div className="flex justify-center fixed bottom-0 right-0 left-0 z-20 bg-none">
        <div className="flex m-0 gap-6 bg-white py-2 px-10 border rounded-sm bg-opacity-75 pixel-top-corners-soft">
          <div onClick={toggleUp} className="p-0 drop-shadow-2xl">
            <Image
              src="/macOs-logo.png"
              width="66"
              height="30"
              alt="macOS icon"
              className="m-0 image-rendering-pixelated image-rendering-crisp-edges"
            />
          </div>
          <div onClick={toggleUp} className="p-0 drop-shadow-lg">
            <Image
              src="/logo-bonsai-farm.png"
              width="66"
              height="30"
              alt="macOS icon"
              className="m-0 image-rendering-pixelated image-rendering-crisp-edges"
            />
          </div>
          <div onClick={toggleUp} className="p-0 drop-shadow-lg">
            <Image
              src="/logo-bonsai.png"
              width="66"
              height="30"
              alt="macOS icon"
              className="m-0 image-rendering-pixelated image-rendering-crisp-edges"
            />
          </div>
          {/* Menu component to be displayed */}
        </div>
      </div>
    </div>
  );
};

export default FooterMacOS;
