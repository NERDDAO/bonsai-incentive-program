"use client";

import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";


type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  // {
  //   label: "Home",
  //   href: "/",
  // },
  {
    label: "Nest",
    href: "/nest",
  },
  {
    label: "Farms",
    href: "/farm",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-none shadow-md my-0 py-0" : ""
              } hover:bg-none hover:shadow-md focus:!border focus:!border-[#7F8B9B] focus:!text-black active:!text-neutral my-0 py-0 px-3 text-sm text-black gap-2 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const HeaderMacOS = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <div className="fixed flex top-0 left-0 right-0 my-0 py-0 bg-[#E7E6EB] min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2 my-0 pt-0">
        <div className="dropdown my-0 py-0" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 my-0 py-0 ${isDrawerOpen ? "hover:bg-[#E7E6EB]" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <div className="fixed flex top-0 flex-row py-0 my-0 gap-2">
              <img src="logo-banana.png" alt="logo banana" className="h-1/2 py-0 my-0 w-fit" />
              <span className="font-bold text-black leading-tight my-0 py-0 kode-mono-retro">盆栽農園</span>
            </div>
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content my-6 py-0 px-2 shadow bg-[#F2F2F2] border-2 border-[#7F8B9B] w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <HeaderMenuLinks />
            </ul>
          )}
        </div>
      </div>
      {/* <div className="navbar-end flex-grow mr-4 py-0 my-0">
        <RainbowKitCustomConnectButton />
        <FaucetButton /> 
      </div> */}

    </div>
  );
};
