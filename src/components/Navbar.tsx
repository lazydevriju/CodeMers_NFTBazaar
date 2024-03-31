"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import {useRouter} from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const navElements = ["Create", "Explore", "Sell", "Drops"];
  return (
    <div
      style={{
        height: "10vh",
        // backgroundColor: "#27272a",
        backgroundColor: "transparent",
        paddingTop: "10px"
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: "transparent"
        }}
      >
        <li style={{backgroundColor: "transparent"}}>Logo</li>
        <li style={{backgroundColor: "transparent"}}>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            style={{ color: "black", width: "50vh" }}
          />
        </li>
        {navElements.map((item, index) => (
          <li style={{backgroundColor: "transparent"}} key={index}><Link href="/Explore">{item}</Link></li>
        ))}
        <li style={{backgroundColor: "transparent"}}>connect wallet</li>
        <li style={{backgroundColor: "transparent"}}>Bag</li>
      </ul>
    </div>
  );
};


export default Navbar;