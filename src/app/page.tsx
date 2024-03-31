"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Link from "next/link";
import { useState } from "react";
import {useRouter} from "next/navigation";
import Marketplace from "../components/Marketplace";

export default function Home() {
  return (
    <main>
      <Header/>
      <Marketplace/>
    </main>
  );
}