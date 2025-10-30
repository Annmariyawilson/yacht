"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { FaWhatsapp } from "react-icons/fa";
import Newsletter from "@/components/newsLetter";
import TopReads from "@/components/topReads";
import Footer from "@/components/footer";
import Book from "@/components/book";

export default function BlogDetails() {
  return (
    <>
      <main className="flex flex-col items-center w-full">
        <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 text-black bg-transparent">
          {/* Left section: Logo + Nav Links */}
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/assets/icon2.svg"
                alt="Yacht Hub Dubai"
width={186} height={48}                 className="object-contain"
              />
            </div>
<span
  style={{
    display: "inline-block",
    width: "2px",
    height: "40px",
    backgroundColor: "black",
  }}
></span>
            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8 text-base">
              <Link
                href="#destinations"
className="font-[Absans] fw-400 px-2 py-1 hover:bg-black hover:text-[#ffffff] transition duration-200"              >
                Destinations
              </Link>
              <Link href="#types" className="font-[Absans] fw-400 px-2 py-1 hover:bg-black hover:text-[#ffffff] transition duration-200">
                Types
              </Link>
              <Link href="#about" className="font-[Absans] fw-400 px-2 py-1 hover:bg-black hover:text-[#ffffff] transition duration-200">
                About
              </Link>
              <Link href="#contact" className="font-[Absans] fw-400 px-2 py-1 hover:bg-black hover:text-[#eff3f4] transition duration-200">
                Contact
              </Link>
              <Link href="/blog" className="font-[Absans] fw-400 px-2 py-1 hover:bg-black hover:text-[#ffffff] transition duration-200">
                {" "}
                Blog
              </Link>
              <Link href="#services" className="font-[Absans] fw-400 px-2 py-1 hover:bg-black hover:text-[#ffffff] transition duration-200">
                Services
              </Link>
            </div>
          </div>

          {/* Right section: Buttons */}
      <div className="flex items-center space-x-4">
        {/* WhatsApp Button */}
        <Button className="bg-[#02CE1A] hover:bg-[#03a41b]  w-[200px] h-[45px] rounded-none text-white cursor-pointer flex items-center">

         <img src="/assets/whatsapp.svg" className="w-5 h-5" alt="" /> <span className="text-[15px]">Book on WhatsApp</span>
        </Button>

            {/* Get Started Button */}
        <Button className=" bg-white text-black hover:text-white hover:bg-black w-[120px] h-[45px] cursor-pointer border border-black  rounded-none font-medium transition">
          Get started
        </Button>
          </div>
        </nav>

        {/* Header Section */}
        <section className="w-full bg-white pt-14 mt-12 flex flex-col items-center text-center px-4">
          <p className="text-md text-[#3B5BFF] font-medium mb-2">Explore</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#0F172A] max-w-3xl leading-tight">
            A Guide to Affordable Yacht Hire Options in Dubai
          </h1>
          <p className="text-gray-500 mt-3 text-md">
            a deep dive into how you can enjoy yacht life without breaking the
            bank
          </p>
          <p className="text-md font-semibold mt-2 mb-3">March 17, 2025</p>
        </section>

        {/* Hero Image */}
        <section className="w-full max-w-8xl">
          <Image
            src="/assets/blog-card.jpg"
            alt="Yacht image"
            width={1200}
            height={100}
            className="w-full object-cover"
          />
        </section>

        {/* Content Section */}
        <section className="w-[100%] max-w-7xl my-16 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10 text-[#0F172A]">
          {/* Sidebar */}
          <aside className="hidden md:block">
            <div className="sticky top-20">
              <h3 className="text-2xl font-bold mb-4">Contents</h3>
              <ul className="space-y-2 text-md text-gray-500">
                <li>Introduction</li>
                <li>Start with yacht size and layout</li>
                <li>Duration matters more than many realize</li>
                <li>Services you can tailor</li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <article className="space-y-18 space-x-30 leading-relaxed">
            <section>
              <h2 className="text-4xl mb-2">Introduction</h2>
              <p className="text-gray-700">
                Affordable yacht hire in Dubai is possible when you focus on
                your precise needs and match the yacht size, duration, and
                services with it. The idea that every yacht is a superyacht is
                simply a misconception. Many families, couples, and small groups
                find mid-range options more viable as they offer comfort and
                privacy without exceeding their budget.
              </p>
            </section>

            <section>
              <h2 className="text-4xl mb-2">
                Start with yacht size and layout
              </h2>
              <p className="text-gray-700">
                The single biggest factor in affordability is the size of the
                yacht. Smaller vessels, often ranging between 50 and 65 feet,
                cost much less than larger yachts. For a couple or small family,
                this size is ideal as it offers indoor lounges, shaded decks,
                and enough space without unnecessary extras.
              </p>
              <p className="text-gray-700 mt-2">
                A yacht like the Elite Cruiser 50 Yacht represents a good entry
                point. It offers a sweet blend of comfort and practicality for
                shorter outings.
              </p>
            </section>

            <section>
              <h2 className="text-4xl mb-2">
                Duration matters more than many realize
              </h2>
              <p className="text-gray-700">
                Another way to manage cost is by adjusting the duration of your
                trip. Shorter charters cost less, and many guests find two- or
                three-hour trips sufficient. Cruising around Dubai Marina, JBR,
                or Palm Jumeirah doesn’t always require a full day either.
              </p>
              <p className="text-gray-700 mt-2">
                Longer day trips or overnight stays add costs for fuel, crew,
                and catering. Unless you need extended travel, shorter trips are
                the best way to keep yacht hire within budget.
              </p>
            </section>

            <section>
              <h2 className="text-4xl mb-2">Services you can tailor</h2>
              <p className="text-gray-700">
                Affordability also comes down to services. Most charters let you
                customize what’s included. You can book a private chef for a BBQ
                or bring your own food on board. Opting out of extras helps keep
                costs low while still ensuring comfort and privacy.
              </p>
              <p className="text-gray-700 mt-2">
                The key is to decide which additions truly matter for you. Many
                first-time guests are surprised at how enjoyable even a basic
                yacht hire can be.
              </p>
            </section>
          </article>
        </section>

        {/* Newsletter Section */}
        <Newsletter />

        {/* More Reads Section */}
        <TopReads />

        {/* Book */}
        <Book />
      </main>
      <Footer />
    </>
  );
}
