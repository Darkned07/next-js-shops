"use client";
import { useSelector } from "react-redux";
import Link from "next/link";
import React from "react";
import SwapController from "./SwapController";

function Navbar() {
  const { total } = useSelector((state) => state.product);

  return (
    <div className="navbar bg-base-100 shadow-2xl">
      <div className="max-container">
        <div className="flex-1">
          <div className="flex flexo-row items-center gap-2">
            <Link href="/" className="btn btn-ghost text-xl">
              Shops
            </Link>
            <SwapController />
          </div>
        </div>
        <div className="flex-none">
          <nav>
            <ul className="flex flex-row gap-3 items-center ">
              <li className=" border-black rounded-[10px] border px-3 py-2 hover:cursor-pointer hover:text-white hover:bg-black hover:border-white ">
                <Link href="/">Home</Link>
              </li>

              <li className=" border-black rounded-[10px] border px-3 py-2 hover:cursor-pointer hover:text-white hover:bg-black hover:border-white ">
                <Link href="/basket">
                  Savat
                  <div className="badge badge-secondary">{total}</div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
