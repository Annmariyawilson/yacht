"use client";

import React, { useRef } from "react";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  {
    title1: "French",
    title2: " Riviera",
    tag: "Popular in Europe",
    place: "Côte d’Azur, France",
    img: "/assets/location1.jpg",
  },
  {
    title1: "Amalfi Coast",
    title2: "Coast",

    tag: "Popular in Europe",
    place: "Italy",
    img: "/assets/location2.jpg",
  },
  {
    title1: "French",
    title2: "Polynesia",
    tag: "Popular in Pacific",
    place: "Tahiti, Bora Bora",
    img: "/assets/location3.jpg",
  },
  {
    title1: "Balearic",
    title2: "Islands",
    tag: "Popular in Europe",
    place: "Spain",
    img: "/assets/location4.jpg",
  },
];

const MarqueeItem = ({ data }: { data: any }) => (
  <div className="relative overflow-hidden mx-3 min-w-[300px] max-w-[280px] duration-300">
    {/* Background Image */}
    <Image
      src={data.img}
      alt={data.title}
      width={280}
      height={350}
      className="object-cover w-full h-[350px]"
    />

    {/* Overlay gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

    {/* Top-right Tag Badge */}
    <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#00000099] border border-white backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
      <span>{data.tag}</span>
    </div>

    {/* Bottom Content */}
    <div className="absolute bottom-4 left-4 text-white">
      <h3
        className="text-3xl font-semibold"
        style={{ fontFamily:"var(--font-awesome-serif2)" }}
      >
        {data.title1}
      </h3>
      <h2 className="text-4xl font-semibold">{data.title2}</h2>

<p className="text-sm opacity-80 mt-1 flex items-center gap-1">
  <FaMapMarkerAlt className="text-[14px]" />
  {data.place.toUpperCase()}
</p>
    </div>
  </div>
);

export default function LocationsMarquee() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={container}
      className="w-full bg-white flex flex-col justify-center items-center overflow-hidden py-10"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
        Most Popular Locations
      </h2>

      <div className="w-[100%] max-w-8xl mx-auto overflow-hidden">
        <SimpleMarquee
          className="w-full"
          baseVelocity={8}
          repeat={4}
          draggable={false}
          direction="left"
        >
          {locations.map((loc, i) => (
            <MarqueeItem key={i} data={loc} />
          ))}
        </SimpleMarquee>
      </div>
    </section>
  );
}
