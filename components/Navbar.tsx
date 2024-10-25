"use client";
import Link from "next/link";
import Image from "next/image";
import Gitlogo from "../public/githublogo.svg";
import LinkedinLogo from "../public/linkedinlogo.svg";
import image from "../public/image.png";
import {
  ArrowDownOnSquareStackIcon,
  XMarkIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    document.body.style.overflow = nav ? "hidden" : "auto";
  };

  return (
    <div className="relative my-4">
      <div className="hidden md:flex text-[#9C9C9C] text-md font-semibold md:flex-row flex-col justify-between max-w-6xl mx-auto py-6 px-10 border-b-2 border-[#9C9C9C] rounded-lg lg:px- -z-10">
        <div className="space-x-6 flex">
          <Link href="/" className="hovercode">
            Home
          </Link>
          <Link href="/about" className={`hovercode`}>
            About
          </Link>
          <Link href="/projects" className="hovercode">
            Projects
          </Link>
        </div>

        <div className="flex space-x-3">
          <a href="https://github.com/daniel-akinyemi" target="_blank">
            <Image
              src={Gitlogo}
              alt="Github Logo"
              className=" w-6 h-6 text-white bg-[#9c9c9c] rounded-sm hover:bg-white/90 transition-all delay-100"
            />
          </a>
          <a href="https://www.linkedin.com/in/danielakinyemi/" target="_blank">
            <Image
              src={LinkedinLogo}
              alt="Linkedin Logo"
              className=" w-6 h-6 text-[#d4d4d4] bg-[#9c9c9c] rounded-sm hover:bg-white/90 transition-all delay-100"
            />
          </a>
          <a href="https://drive.usercontent.google.com/uc?id=1whBfKzeI_lTrvXGlaCImUo74b3hs_Wdd&export=download">
            <ArrowDownOnSquareStackIcon className=" w-6 h-6 text-[#9c9c9c] hovercode" />
          </a>
        </div>
      </div>

      <div className="mobile-nav flex justify-between max-w-[90%] mx-auto md:hidden">
        <Link href="/">
          <Image src={image.src} width={100} height={100} alt="logo" />
        </Link>
        {/* Mobile Menu Button */}
        <div
          className="block  my-8 px-4 cursor-crosshair relative z-60 top-0"
          style={{ zIndex: 60 }}
          onClick={handleNav}
        >
          {nav ? (
            <XMarkIcon
              
              className="text-white z-60 relative h-5 w-5"
            />
          ) : (
            <Bars2Icon className="text-white h-5 w-5" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "absolute top-0 mobilemenu bg-black h-[100vh]"
            : " absolute left-[-100%] ease-out duration-200"
        }
      >
        <Link href="/" className="hovercode" onClick={handleNav}>
          Home
        </Link>
        <Link href="/about" className={`hovercode`} onClick={handleNav}>
          About
        </Link>
        <Link href="/projects" className="hovercode" onClick={handleNav}>
          Projects
        </Link>

        
        <div className="flex">
          <a href="https://github.com/daniel-akinyemi" target="_blank">
            <Image
              src={Gitlogo}
              alt="Github Logo"
              className="mx-3 w-5 h-5 text-white bg-[#9c9c9c] rounded-sm hover:bg-white/90 transition-all delay-100"
            />
          </a>
          <a href="https://www.linkedin.com/in/danielakinyemi/" target="_blank">
            <Image
              src={LinkedinLogo}
              alt="Github Logo"
              className="mx-3 w-5 h-5 text-[#d4d4d4] bg-[#9c9c9c] rounded-sm hover:bg-white/90 transition-all delay-100"
            />
          </a>
          <a href="https://drive.usercontent.google.com/uc?id=1whBfKzeI_lTrvXGlaCImUo74b3hs_Wdd&export=download">
            <ArrowDownOnSquareStackIcon className="mx-3 w-5 h-5 text-[#9c9c9c] hovercode" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
