"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./Logos/logo-color.svg";
import {
  IoBag,
  IoCloseCircleSharp,
  IoEllipsisVerticalCircleSharp,
  IoHeartCircle,
  IoSearchCircleSharp,
} from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import Searchbar from "./searchbar";

type Props = {};

const Navbar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="top-0 bg-white lg:block ">
      <div className="flex justify-between items-center p-6">
        <div>
          {/* Logo */}
          <Image src={logo} alt="PetMania"></Image>
        </div>

        <div className="hidden lg:block ">
          <nav className="space-x-4 flex justify-center">
            <Link href="/Home" className="font-bold">
              Home
            </Link>
            <Link href="/Shop" className="font-bold">
              Shop
            </Link>
            <Link href="/Services" className="font-bold">
              Services
            </Link>
            <Link href="/About" className="font-bold">
              About
            </Link>
            <Link href="/Help" className="font-bold">
              Help
            </Link>
          </nav>
        </div>
        {/* search bar */}
        <Searchbar className="2"></Searchbar>

        <div className="flex justify-end items-center space-x-4 ">
          {/* Profile Icon */}
          <Link href="/contact">
            <div className="text-xl">
              <IoMdContact className=" size-9"></IoMdContact>
            </div>
          </Link>

          {/* Wishlist */}
          <Link href="/wishlist">
            <div className="text-xl">
              <IoHeartCircle className=" size-9"></IoHeartCircle>
            </div>
          </Link>

          {/* Cart */}
          <Link href="/cart">
            <div className="relative text-xl">
              <IoBag className="size-7 rounded"></IoBag>
              <div className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full size-5  flex items-center justify-center">
                0
              </div>
            </div>
          </Link>

          <div className="lg:hidden  block ">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none "
            >
              {menuOpen ? (
                <IoCloseCircleSharp className="size-9"></IoCloseCircleSharp>
              ) : (
                <IoEllipsisVerticalCircleSharp className="size-9"></IoEllipsisVerticalCircleSharp>
              )}
            </button>
            {menuOpen && (
              <div className="bg-white absolute top-20 left-0 right-0 z-10 font-bold">
                {/*Hamburger menu*/}
                <div className="p-4 text-black">
                  <hr className="mb-4 w-full mx-auto text-black" />
                  <Link
                    href="/Home"
                    className=" hover:bg-gradient-to-r hover:from-yellow-400 block  mb-2"
                  >
                    Home
                  </Link>
                  <hr className="mb-4 w-full mx-auto text-black" />
                  <Link
                    href="/Shop"
                    className=" hover:bg-gradient-to-r hover:from-yellow-400 block  mb-2"
                  >
                    Shop
                  </Link>
                  <hr className="mb-4 w-full mx-auto text-black" />
                  <Link
                    href="/Services"
                    className=" hover:bg-gradient-to-r hover:from-yellow-400 block  mb-2"
                  >
                    Services
                  </Link>
                  <hr className="mb-4 w-full mx-auto text-black" />
                  <Link
                    href="/About"
                    className=" hover:bg-gradient-to-r hover:from-yellow-400 block  mb-2"
                  >
                    About
                  </Link>
                  <hr className="mb-4 w-full mx-auto text-black" />
                  <Link
                    href="/Help"
                    className=" hover:bg-gradient-to-r hover:from-yellow-400 block  mb-2"
                  >
                    Help
                  </Link>
                  <hr className="mb-4 w-full mx-auto text-black" />
                  <Link
                    href="/Contact"
                    className=" hover:bg-gradient-to-r hover:from-yellow-400 block  mb-2"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
