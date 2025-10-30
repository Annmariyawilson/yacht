"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");
  const [howMany, setHowMany] = useState("");
  const [yachtType, setYachtType] = useState("");

  return (
    <section className="relative w-full h-[1111px] flex flex-col justify-between text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/hero-bg.mp4"
        autoPlay
        loop
        muted
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ======= TOP LEFT HEADING ======= */}
      <div className="relative z-10 text-left px-12 pt-40">
        <h1 className="font-[Absans] text-[60px] leading-[100%] tracking-[-0.07em] font-normal max-w-[646px]">
          <span
            style={{
              fontFamily: "var(--font-awesome-serif)",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "66px",
              lineHeight: "110px",
              letterSpacing: "1px",
              textAlign: "center",
            }}
          >
            Experience Luxury on the
          </span>
          <br />
          Dubai Marina Waters
        </h1>
      </div>

      {/* ======= BOOKING FORM ======= */}
      <div className="relative z-10 flex justify-center mb-40">
        <div
          className="flex items-center bg-white  shadow-sm overflow-hidden"
          style={{
            width: "953.058px",
            height: "125px",
            paddingTop: "26px",
            paddingRight: "40px",
            paddingBottom: "26px",
            paddingLeft: "40px",
            gap: "10px",
          }}
        >
          {/* Input Section */}
          {/* Input Section */}
          <div
            className="flex items-center justify-between border border-[#E5E7EB]"
            style={{
              width: "560.058px",
              height: "80px",
            }}
          >
            {/* Where */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="flex-1 text-gray-700 text-left cursor-pointer hover:bg-gray-50 transition"
                  style={{
                    fontFamily: "Absans",
                    fontWeight: 400,
                    fontSize: "18.61px",
                    lineHeight: "100%",
                    height: "80px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  {where || "Where"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <Input
                  placeholder="Search location..."
                  value={where}
                  onChange={(e) => setWhere(e.target.value)}
                />
                <ul className="mt-2 text-sm space-y-1">
                  {["Dubai Marina", "Palm Jumeirah", "Bluewaters Island"].map(
                    (loc) => (
                      <li
                        key={loc}
                        onClick={() => setWhere(loc)}
                        className="p-2 hover:bg-gray-100 cursor-pointer rounded-md"
                      >
                        {loc}
                      </li>
                    )
                  )}
                </ul>
              </PopoverContent>
            </Popover>

            {/* Divider */}
            <span
              style={{
                display: "inline-block",
                width: "1px",
                height: "40px",
                backgroundColor: "gray", 
                alignSelf: "center", 
              }}
            ></span>

            {/* When */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="flex-1 text-gray-700 text-left cursor-pointer hover:bg-gray-50 transition"
                  style={{
                    fontFamily: "Absans",
                    fontWeight: 400,
                    fontSize: "18.61px",
                    lineHeight: "100%",
                    height: "80px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  {when || "When"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <Input
                  type="date"
                  value={when}
                  onChange={(e) => setWhen(e.target.value)}
                />
              </PopoverContent>
            </Popover>

            {/* Divider */}
            <span
              style={{
                display: "inline-block",
                width: "1px",
                height: "40px",
                backgroundColor: "gray",
                alignSelf: "center",
              }}
            ></span>

            {/* How Many */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="flex-1 text-gray-700 text-left cursor-pointer hover:bg-gray-50 transition"
                  style={{
                    fontFamily: "Absans",
                    fontWeight: 400,
                    fontSize: "18.61px",
                    lineHeight: "100%",
                    height: "80px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  {howMany || "How Many"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <Input
                  type="number"
                  placeholder="Enter number of guests"
                  value={howMany}
                  onChange={(e) => setHowMany(e.target.value)}
                />
              </PopoverContent>
            </Popover>

            {/* Divider */}
            <span
              style={{
                display: "inline-block",
                width: "1px",
                height: "40px",
                backgroundColor: "gray", 
                alignSelf: "center", 
              }}
            ></span>

            {/* Yacht Type */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="flex-1 text-gray-700 cursor-pointer text-left hover:bg-gray-50 transition"
                  style={{
                    fontFamily: "Absans",
                    fontWeight: 400,
                    fontSize: "18.61px",
                    lineHeight: "100%",
                    height: "80px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  {yachtType || "Yacht Type"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <ul className="text-sm space-y-1">
                  {["Luxury", "Sport", "Party", "Family"].map((type) => (
                    <li
                      key={type}
                      onClick={() => setYachtType(type)}
                      className="p-2 hover:bg-gray-100 cursor-pointer rounded-md"
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          </div>

          {/* Blue Button */}
          <Button
            className="rounded-none text-white cursor-pointer transition"
            style={{
              backgroundColor: "#2530FF",
              width: "294px",
              height: "80px",
              fontFamily: "Absans",
              fontWeight: 400,
              fontSize: "18.61px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Book your Dream Trip
          </Button>
        </div>
      </div>
    </section>
  );
}
