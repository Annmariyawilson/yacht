"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 font-absans flex items-center justify-between px-8 py-6 text-white bg-transparent">
      {/* Left section: Logo + Nav Links */}
      <div className="flex items-center space-x-12">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/assets/icon1.svg" alt="Logo" width={186} height={48} />
        </div>
<span
  style={{
    display: "inline-block",
    width: "2px",
    height: "40px",
    backgroundColor: "white",
  }}
></span>

        {/* Nav Links */}
<div className="hidden md:flex items-center space-x-8 text-base">
  {[
    { href: "#destinations", label: "Destinations" },
    { href: "#types", label: "Types" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "#services", label: "Services" },
  ].map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="font-[Absans] fw-400 px-2 py-1 hover:bg-white hover:text-[#00313F] transition duration-200"
    >
      {link.label}
    </Link>
  ))}
</div>
      </div>

      {/* Right section: Buttons */}
      <div className="flex items-center space-x-4">
        {/* WhatsApp Button */}
        <Button className="bg-[#02CE1A] hover:bg-[#03a41b]  w-[200px] h-[45px] rounded-none text-white cursor-pointer flex items-center">

         <img src="/assets/whatsapp.svg" className="w-5 h-5" alt="" /> <span className="text-[15px]">Book on WhatsApp</span>
        </Button>

        {/* Get Started Button */}
        <Button className=" bg-white text-black hover:bg-[#dbdbdb] w-[120px] h-[45px] cursor-pointer  rounded-none font-medium transition">
          Get started
        </Button>
      </div>
    </nav>
  );
}
